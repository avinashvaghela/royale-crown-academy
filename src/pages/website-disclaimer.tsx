import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function WebsiteDisclaimerPage() {
  return (
    <LegalPageLayout title="Website Disclaimer" lastUpdated="[Date to be inserted]">
      <p>
        The information on this website is provided for general information purposes only. While we aim to keep it accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability or suitability of the information.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Not professional advice</h2>
      <p>
        The content on this website does not constitute legal, medical, educational, therapeutic or professional advice. It should not be relied upon as a substitute for advice from a qualified professional.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. External links</h2>
      <p>
        This website may contain links to third-party websites. We are not responsible for the content, accuracy or practices of those websites. Links are provided for convenience only.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Royale Crown Academy Ltd will not be liable for any loss or damage arising from the use of, or reliance on, information on this website.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Changes to content</h2>
      <p>
        We may update or remove content from this website at any time without notice.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Contact us</h2>
      <p>
        If you have any questions about this disclaimer, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
