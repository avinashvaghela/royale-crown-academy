import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

export default function SchoolCollegeTermsPage() {
  return (
    <LegalPageLayout title="School & College Terms" lastUpdated="[Date to be inserted]">
      <p>
        These School & College Terms apply to staffing, SEN tuition, tutoring and other services provided by Royale Crown Academy Ltd to schools, colleges and other educational settings. They should be read alongside our main <a href="/terms-and-conditions" className="font-medium text-primary underline">Terms & Conditions</a> and <a href="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</a>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Enquiries and agreements</h2>
      <p>
        All services begin with an enquiry and consultation. A formal service agreement or purchase order will be agreed before any staffing placement or tuition programme begins.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Services</h2>
      <p>
        Services may include SEN tuition, targeted tutoring, catch-up support, one-to-one or small-group learner support, Teaching Assistants, Cover Supervisors and other education professionals. The exact scope, duration and fees will be set out in the agreed service documentation.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Recruitment and checks</h2>
      <p>
        We follow our safer recruitment and verification procedures for all education professionals. The specific checks undertaken will be documented and are reviewed regularly. Settings remain responsible for their own statutory and safeguarding obligations, including any induction or supervision arrangements.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Fees and payment</h2>
      <p>
        Fees will be agreed in writing before services commence. Payment terms, invoicing arrangements and any cancellation charges will be set out in the service agreement.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Cancellations</h2>
      <p>
        Cancellations or changes to booked services should be made with reasonable notice. Specific notice periods and any charges will be set out in the service agreement.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Safeguarding</h2>
      <p>
        All services are delivered in line with our <a href="/safeguarding-policy" className="font-medium text-primary underline">Safeguarding Policy</a>. Concerns should be reported immediately to the Designated Safeguarding Lead and, where appropriate, to the setting's safeguarding team.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">7. Confidentiality and data protection</h2>
      <p>
        We handle all personal data in line with UK GDPR and the Data Protection Act 2018. Settings should only share learner information that is necessary and appropriate for the agreed purpose.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">8. Liability</h2>
      <p>
        Our liability is limited to the extent permitted by law and as set out in the service agreement. We do not accept liability for matters outside our reasonable control.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">9. Termination</h2>
      <p>
        Either party may terminate the service agreement with reasonable notice. Termination does not affect any accrued rights or obligations.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">10. Contact us</h2>
      <p>
        If you have any questions about these School & College Terms, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
