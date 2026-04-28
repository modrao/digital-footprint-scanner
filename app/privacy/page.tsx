import { PageHeader } from '@/components/layout/PageHeader';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <PageHeader 
        badge="// security"
        title="Privacy Policy" 
        description="We prioritize your anonymity. Our scanner is built with a zero-data-retention architecture."
      />

      <div className="space-y-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <EyeOff className="h-5 w-5" />
              <h3 className="font-bold">No Storage</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not store the email addresses you scan. Once the result is generated, the data is wiped from memory.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Lock className="h-5 w-5" />
              <h3 className="font-bold">No Logging</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Search queries are never logged to our servers or any third-party analytics services.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-bold">Secure Processing</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All scanning logic is processed server-side. No API keys or sensitive endpoints are exposed to the browser.
            </p>
          </div>
        </div>

        <section className="space-y-4 pt-8 border-t border-border">
          <h2 className="text-xl font-bold text-white">Data Sources</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our tool uses the public <a href="https://haveibeenpwned.com" className="text-white hover:underline">HaveIBeenPwned</a> database list to identify potential breaches. We do not transmit your full email address to their API; instead, we fetch the complete breach list once and perform domain-level matching locally on our server.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">Compliance</h2>
          <p className="text-muted-foreground leading-relaxed">
            While we do not store personal data, we aim to follow best practices aligned with GDPR and the Bangladesh Data Protection Act (DPDP). Since no data is retained, there is no &quot;Right to be Forgotten&quot; needed—your data is forgotten the moment the scan ends.
          </p>
        </section>

        <div className="p-6 rounded-md bg-secondary/30 border border-border">
          <h3 className="text-sm font-bold text-white mb-2">Contact</h3>
          <p className="text-sm text-muted-foreground">
            For questions about this policy, please open an issue on our GitHub repository.
          </p>
        </div>
      </div>
    </div>
  );
}
