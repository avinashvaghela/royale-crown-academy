import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

export default function ComplaintsPolicyPage() {
  return (
    <LegalPageLayout title="Complaints Policy" lastUpdated="[Date to be inserted]">
      <p>
        Royale Crown Academy Ltd is committed to providing a high-quality service. We welcome feedback and take complaints seriously. This policy explains how to raise a concern and how we will respond.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Who can make a complaint</h2>
      <p>
        Complaints may be made by parents, carers, learners, schools, colleges, professionals or any other person who has used or interacted with our services.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. How to raise a concern</h2>
      <p>
        In the first instance, please contact us by email or phone to explain your concern. Many issues can be resolved quickly through informal discussion.
      </p>
      <p>
        If the matter is not resolved informally, you may make a formal complaint in writing to us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. What to include</h2>
      <p>Please include the following information in your complaint:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Your name and contact details</li>
        <li>A clear description of the issue</li>
        <li>When and where it happened</li>
        <li>What outcome you are seeking</li>
        <li>Any relevant supporting information</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. How we handle complaints</h2>
      <p>
        We will acknowledge your complaint within [timeframe to be inserted, e.g. five working days]. We will investigate fairly and impartially, and provide a response within [timeframe to be inserted, e.g. 20 working days]. If we need more time, we will let you know.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Safeguarding concerns</h2>
      <p>
        If your complaint relates to safeguarding, it will be handled in line with our <Link to="/safeguarding-policy" className="font-medium text-primary underline">Safeguarding Policy</Link> and may be escalated to the Designated Safeguarding Lead or relevant authorities.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Escalation</h2>
      <p>
        If you are not satisfied with our response, you may request a review. Details of the escalation process will be provided with our response.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">7. Record-keeping</h2>
      <p>
        We keep records of complaints securely and use them to improve our services. Records are handled in line with data protection law.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">8. Contact us</h2>
      <p>
        To make a complaint or request further information, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
