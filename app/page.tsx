import { ScanForm } from '@/components/scanner/ScanForm';
import { Database, Shield, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-4 pt-32 pb-24 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
          <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
            Privacy Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans mb-6 leading-[1.1]">
          What does your email <br className="hidden md:block" /> expose to the world?
        </h1>

        <p className="text-xl text-muted-foreground font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
          Uncover hidden privacy risks. Cross-reference your email against 12+ billion breached records instantly.
        </p>

        <div className="w-full max-w-xl mx-auto">
          <ScanForm />
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="w-full max-w-5xl px-4 py-24 border-t border-white/5">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <div className="h-1 w-1 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              Dual-Source Engine
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Powered by 12+ Billion Records</h2>
          <p className="text-muted-foreground max-w-2xl">
            We aggregate real-time data from the world&apos;s most reliable breach databases to ensure maximum coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-start gap-4 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Database className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">HaveIBeenPwned</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The gold standard in breach intelligence. Managed by security researcher Troy Hunt, providing verified data on hundreds of large-scale service leaks.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="text-[10px] bg-white/5 border-white/10 text-white/60">600+ Sites</Badge>
              <Badge variant="outline" className="text-[10px] bg-white/5 border-white/10 text-white/60">Verified Records</Badge>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-start gap-4 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">XposedOrNot</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open-source breach intelligence engine. Aggregates data from diverse community-contributed leaks and anonymous paste sites.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="text-[10px] bg-white/5 border-white/10 text-white/60">API-Driven</Badge>
              <Badge variant="outline" className="text-[10px] bg-white/5 border-white/10 text-white/60">Real-Time Updates</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
