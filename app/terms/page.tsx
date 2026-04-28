import { PageHeader } from '@/components/layout/PageHeader';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <PageHeader 
        badge="// legal"
        title="Terms of Service" 
        description="By using this scanner, you agree to these basic usage principles."
      />

      <div className="space-y-8 mt-12 text-muted-foreground leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Informational Purposes Only</h2>
          <p>
            The results provided by this scanner are for informational and educational purposes only. They do not constitute legal advice, security guarantees, or definitive proof of a compromised account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Acceptable Use</h2>
          <p>
            You agree to use this tool only for email addresses that you own or have explicit permission to scan. Automated scraping, bulk scanning, or any attempt to abuse the API routes is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Accuracy of Information</h2>
          <p>
            We rely on public data sources like HaveIBeenPwned. While we strive for accuracy, we cannot guarantee the completeness or timeliness of the breach data. Some matches may be partial or heuristic in nature.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
          <p>
            The developers of Digital Footprint Scanner shall not be held liable for any damages, security incidents, or privacy issues resulting from the use of this tool or the information provided herein.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Your continued use of the site after changes are posted constitutes acceptance of the new terms.
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-sm">
            Last updated: April 2025
          </p>
        </div>
      </div>
    </div>
  );
}
