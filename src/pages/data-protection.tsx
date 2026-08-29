import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function DataProtectionPage() {
  return (
    <LegalPageLayout title="Data Protection / Data Handling" lastUpdated="[Date to be inserted]">
      <p>
        Royale Crown Academy Ltd is committed to handling personal data responsibly, securely and in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Data protection principles</h2>
      <p>We ensure that personal data is:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Processed lawfully, fairly and transparently</li>
        <li>Collected for specified, explicit and legitimate purposes</li>
        <li>Adequate, relevant and limited to what is necessary</li>
        <li>Accurate and kept up to date</li>
        <li>Kept only for as long as necessary</li>
        <li>Processed securely</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Data we handle</h2>
      <p>
        We handle personal data relating to learners, parents, carers, schools, colleges, staff and professionals. This may include names, contact details, educational information and, where relevant, special category data such as health or SEN information.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Lawful basis</h2>
      <p>
        We process personal data on lawful bases including consent, contractual necessity, legal obligation, vital interests and legitimate interests. Special category data is processed only where an additional condition under UK GDPR applies.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Data security</h2>
      <p>
        We use appropriate technical and organisational measures to protect personal data against unauthorised access, loss or disclosure. Access is limited to those who need it for their role.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Data subject rights</h2>
      <p>
        Individuals have the right to access, correct, erase, restrict or object to the processing of their personal data, and to request data portability where applicable. To exercise these rights, please contact us using the details below.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Data sharing</h2>
      <p>
        We share personal data only where necessary, with appropriate safeguards in place. This may include schools, colleges, local authorities, service providers or regulatory bodies.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">7. Retention</h2>
      <p>
        We retain personal data only for as long as required for the purposes for which it was collected, or as required by law, safeguarding practice or professional obligations.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">8. Breach reporting</h2>
      <p>
        In the event of a personal data breach, we will assess the risk and, where required, notify the Information Commissioner's Office and affected individuals without undue delay.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact</h2>
      <p>
        For data protection queries, please contact [Data Protection Officer / contact to be inserted] at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>);

}