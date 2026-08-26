import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="[Date to be inserted]">
      <p>
        Royale Crown Academy Ltd is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store and protect personal data when you use our website and services.
      </p>
      <p>
        We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Who we are</h2>
      <p>
        Royale Crown Academy Ltd is a UK education company. Our registered office is [registered office address to be inserted]. Our company registration number is [number to be inserted].
      </p>
      <p>
        For data protection queries, please contact [Data Protection Officer / privacy contact to be inserted] at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. What data we collect</h2>
      <p>We may collect the following types of personal data:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Name, email address and phone number</li>
        <li>Postcode and location information</li>
        <li>Details about the learner, their needs and goals</li>
        <li>School or college name and role, where relevant</li>
        <li>Information you provide through forms, emails or calls</li>
        <li>Technical data such as IP address and browser type, where collected by analytics cookies with consent</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. How we use your data</h2>
      <p>We use personal data to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Respond to enquiries and provide requested information</li>
        <li>Arrange and deliver support, tutoring or staffing services</li>
        <li>Communicate with parents, carers, schools and colleges</li>
        <li>Improve our website and services</li>
        <li>Comply with legal and safeguarding obligations</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Legal basis for processing</h2>
      <p>
        We rely on lawful bases including consent, contractual necessity, legal obligation and legitimate interests. Where we rely on consent, you may withdraw it at any time by contacting us.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. How we share your data</h2>
      <p>
        We do not sell personal data. We may share data with trusted service providers who help us operate our business, or where required by law, safeguarding requirements or professional obligations.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. How long we keep your data</h2>
      <p>
        We keep personal data only for as long as necessary for the purposes described in this policy, or as required by law. Retention periods depend on the type of data and the service provided.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">7. Your rights</h2>
      <p>Under UK data protection law, you have the right to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request erasure in certain circumstances</li>
        <li>Object to or restrict processing</li>
        <li>Withdraw consent</li>
        <li>Complain to the Information Commissioner's Office (ICO)</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">8. Cookies</h2>
      <p>
        We use cookies in line with our <a href="/cookie-policy" className="font-medium text-primary underline">Cookie Policy</a>. You can manage your preferences at any time.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version will always be available on this page.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">10. Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
