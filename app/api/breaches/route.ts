const HIBP_ALL_BREACHES = 'https://haveibeenpwned.com/api/v3/breaches';

export async function GET() {
  try {
    const res = await fetch(HIBP_ALL_BREACHES, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: { 'User-Agent': 'DigitalFootprintScanner/1.0' }
    });
    
    if (!res.ok) {
      throw new Error(`HIBP API returned ${res.status}`);
    }

    const breaches = await res.json();
    return Response.json(breaches, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
      }
    });
  } catch (error) {
    console.error('Error fetching breaches:', error);
    return Response.json({ error: 'Failed to fetch breach data' }, { status: 500 });
  }
}
