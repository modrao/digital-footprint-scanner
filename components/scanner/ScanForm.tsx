'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { ScanResult as ScanResultComponent } from './ScanResult';
import { ScanResult } from '@/lib/types';
import { Search, Loader2, AlertCircle, Shield } from 'lucide-react';

export function ScanForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'result' | 'error'>('idle');
  const [result, setResult] = useState<ScanResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');
    setResult(null);

    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Try again in a moment.');
        setStatus('error');
        return;
      }

      setResult(data);
      setStatus('result');
    } catch {
      setErrorMsg('Something went wrong. Try again in a moment.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setResult(null);
    setEmail('');
    setErrorMsg('');
  };

  return (
    <div className="w-full space-y-6">
      {/* Form */}
      {status !== 'result' && (
        <form onSubmit={handleScan} className="relative group max-w-xl mx-auto">
          <div className="flex items-center bg-secondary border border-border group-focus-within:border-white/20 transition-all rounded-md overflow-hidden h-12">
            <div className="pl-4 pr-2 text-muted-foreground">
              <Search className="h-4 w-4" />
            </div>
            <Input
              id="email-input"
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              required
              className="flex-1 bg-transparent border-0 text-white placeholder:text-muted-foreground font-sans text-sm h-full focus-visible:ring-0 shadow-none"
            />
            <div className="p-1.5">
              <Button
                id="scan-button"
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className="bg-white text-black hover:bg-white/90 font-bold h-9 px-4 sm:px-6 rounded-[4px] shrink-0 transition-all disabled:opacity-50 flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="hidden sm:inline">HIBP & XON</span>
                  </div>
                ) : (
                  <>
                    <Shield className="h-4 w-4 hidden sm:block" />
                    <span>Scan</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-high text-sm p-3 rounded-md border border-high/20 bg-high/10">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Skeleton loader */}
      {status === 'loading' && (
        <div className="space-y-4 border border-border rounded-md p-6 bg-card">
          <Skeleton className="h-7 w-28 bg-[#1f1f1f]" />
          <div className="space-y-2">
            <Skeleton className="h-16 w-full bg-[#1f1f1f]" />
            <Skeleton className="h-2 w-full bg-[#1f1f1f]" />
          </div>
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-40 bg-[#1f1f1f]" />
            <Skeleton className="h-12 w-full bg-[#1f1f1f]" />
            <Skeleton className="h-12 w-full bg-[#1f1f1f]" />
            <Skeleton className="h-12 w-3/4 bg-[#1f1f1f]" />
          </div>
          <Skeleton className="h-32 w-full bg-[#1f1f1f]" />
        </div>
      )}

      {/* Result */}
      {status === 'result' && result && (
        <ScanResultComponent result={result} onReset={handleReset} />
      )}
    </div>
  );
}
