import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Shield, Info, Code, Server } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <PageHeader 
        badge="// background"
        title="About the Scanner" 
        description="A professional-grade privacy tool designed to empower users with knowledge about their digital footprint."
      />

      <div className="space-y-12 mt-12">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-white" />
            <h2 className="text-xl font-bold text-white">What is this tool?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Digital Footprint Scanner is an open-source project built to help individuals understand how much of their personal information might be circulating in public data breaches. By analyzing domain patterns and cross-referencing known leak databases, we provide an instant assessment of potential privacy risks.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-white" />
            <h2 className="text-xl font-bold text-white">How Scoring Works</h2>
          </div>
          <div className="border border-border rounded-md overflow-hidden">
            <table className="w-full text-sm font-sans">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-white">Condition</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">Points</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-white">Breach Detection</td>
                  <td className="px-4 py-3 text-white font-mono">+40</td>
                  <td className="px-4 py-3 text-muted-foreground">Email domain matches a known database leak.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">Password Leak</td>
                  <td className="px-4 py-3 text-white font-mono">+30</td>
                  <td className="px-4 py-3 text-muted-foreground">Credentials (passwords) were exposed in the breach.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">High Frequency</td>
                  <td className="px-4 py-3 text-white font-mono">+20</td>
                  <td className="px-4 py-3 text-muted-foreground">Domain appears in more than 10 different breaches.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">Suspicious Domain</td>
                  <td className="px-4 py-3 text-white font-mono">+10</td>
                  <td className="px-4 py-3 text-muted-foreground">Domain is known for temporary/disposable use.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">Risky TLD</td>
                  <td className="px-4 py-3 text-white font-mono">+5</td>
                  <td className="px-4 py-3 text-muted-foreground">Domain uses a TLD often associated with spam.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-2 mb-3">
              <Code className="h-4 w-4 text-white" />
              <h3 className="font-bold text-white">Tech Stack</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li>- Next.js 14 (App Router)</li>
              <li>- TypeScript</li>
              <li>- Tailwind CSS v3</li>
              <li>- shadcn/ui</li>
              <li>- Geist Sans / Mono</li>
            </ul>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-2 mb-3">
              <Server className="h-4 w-4 text-white" />
              <h3 className="font-bold text-white">Open Source</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool is fully transparent. All scoring logic happens server-side, but the source code is available for anyone to audit. We believe in privacy through transparency.
            </p>
          </Card>
        </section>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic">
            Disclaimer: This tool provides heuristic analysis based on domain matches and public breach lists. It does not guarantee that your specific email address is or is not compromised.
          </p>
        </div>
      </div>
    </div>
  );
}
