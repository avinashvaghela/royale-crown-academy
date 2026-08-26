import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="[Date to be inserted]">
      <p>
        These Terms & Conditions govern your use of the Royale Crown Academy Ltd website and the services we provide. Please read them carefully.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. About us</h2>
      <p>
        Royale Crown Academy Ltd is a UK education company. Our registered office is [registered office address to be inserted] and our company registration number is [number to be inserted].
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Use of the website</h2>
      <p>
        You may use this website for lawful purposes only. You must not use it in any way that causes damage to the website, impairs its availability, or is fraudulent, unlawful or harmful.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Services</h2>
      <p>
        The services described on this website are subject to availability and may be changed or withdrawn at any time. Specific terms apply to tutoring and school/college services; please see our <a href="/tutoring-terms" className="font-medium text-primary underline">Tutoring Terms</a> and <a href="/school-college-terms" className="font-medium text-primary underline">School/College Terms</a>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Intellectual property</h2>
      <p>
        All content on this website, including text, images, logos and design, is owned by or licensed to Royale Crown Academy Ltd and is protected by copyright and other intellectual property laws.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Royale Crown Academy Ltd will not be liable for any loss or damage arising from your use of this website or reliance on its content. This does not exclude liability that cannot be excluded under applicable law.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Links to third-party websites</h2>
      <p>
        This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">7. Changes to these terms</h2>
      <p>
        We may update these Terms & Conditions from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">8. Governing law</h2>
      <p>
        These Terms & Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact us</h2>
      <p>
        If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>);

}