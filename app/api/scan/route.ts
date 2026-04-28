import { NextRequest } from 'next/server';
import { computeScore } from '@/lib/scoring';
import { validateEmail, extractDomain } from '@/lib/email-utils';

// Basic in-memory rate limiting (resets on cold start)
const rateLimit = new Map<string, number>();

async function getHIBPBreaches() {
  const HIBP_ALL_BREACHES = 'https://haveibeenpwned.com/api/v3/breaches';
  const res = await fetch(HIBP_ALL_BREACHES, {
    next: { revalidate: 3600 },
    headers: { 'User-Agent': 'DigitalFootprintScanner/1.0' }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((b: any) => ({ ...b, source: 'HIBP' }));
}

async function getXposedBreaches() {
  const XON_ALL_BREACHES = 'https://api.xposedornot.com/v1/breaches';
  const res = await fetch(XON_ALL_BREACHES, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  // XON returns { exposedBreaches: [...] }
  return (data.exposedBreaches || []).map((b: any) => ({
    Name: b.breachID,
    Title: b.breachID,
    Domain: b.domain,
    BreachDate: b.breachedDate?.split('T')[0],
    PwnCount: b.exposedRecords,
    Description: b.exposureDescription,
    DataClasses: b.exposedData,
    source: 'XposedOrNot'
  }));
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !validateEmail(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Basic rate limiting
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const lastRequest = rateLimit.get(ip) || 0;
    if (now - lastRequest < 2000) {
      return Response.json({ error: 'Please wait a moment between scans.' }, { status: 429 });
    }
    rateLimit.set(ip, now);

    const domain = extractDomain(email);

    // Add a realistic delay (1.5s)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Fetch from both sources in parallel
    const [hibp, xon] = await Promise.all([
      getHIBPBreaches(),
      getXposedBreaches()
    ]);
    
    // Deduplicate and merge sources
    const breachMap = new Map<string, any>();

    [...hibp, ...xon].forEach(b => {
      const key = (b.Domain || b.Name).toLowerCase();
      if (breachMap.has(key)) {
        const existing = breachMap.get(key);
        if (!existing.sources.includes(b.source)) {
          existing.sources.push(b.source);
        }
        // Prefer longer description if available
        if (b.Description?.length > existing.Description?.length) {
          existing.Description = b.Description;
        }
      } else {
        breachMap.set(key, { ...b, sources: [b.source] });
      }
    });

    const allBreaches = Array.from(breachMap.values());
    
    // Compute score based on combined data
    const result = await computeScore(email, domain, allBreaches);

    return Response.json(result);
  } catch (error) {
    console.error('Scan error:', error);
    return Response.json({ error: 'Unable to reach breach database. Try again.' }, { status: 500 });
  }
}
