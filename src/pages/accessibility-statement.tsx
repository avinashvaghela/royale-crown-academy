import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function AccessibilityStatementPage() {
  return (
    <LegalPageLayout title="Accessibility Statement" lastUpdated="[Date to be inserted]">
      <p>
        Royale Crown Academy Ltd is committed to making this website accessible to as many people as possible. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA principles.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Our commitment</h2>
      <p>
        We want everyone who visits our website to be able to find, understand and use the information they need. We are continually working to improve accessibility and welcome feedback.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Accessibility features</h2>
      <p>This website includes the following accessibility features:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Keyboard-navigable menus, links and forms</li>
        <li>Visible focus indicators</li>
        <li>Semantic HTML and logical heading structure</li>
        <li>Alternative text for images</li>
        <li>Accessible form labels and error messages</li>
        <li>Respect for reduced motion preferences</li>
        <li>Clear colour contrast</li>
        <li>Skip-to-content link</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Known limitations</h2>
      <p>
        Some older content or third-party integrations may not yet meet all accessibility standards. We are working to address these issues. If you encounter a barrier, please let us know.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Feedback and contact</h2>
      <p>
        If you experience any difficulty using this website, or if you have suggestions for improvement, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Enforcement procedure</h2>
      <p>
        If you are not happy with our response, you can contact the Equality Advisory and Support Service (EASS) or, in Northern Ireland, the Equality Commission for Northern Ireland.
      </p>
    </LegalPageLayout>
  );
}
