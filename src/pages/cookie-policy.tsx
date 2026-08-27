import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="[Date to be confirmed]">
      <p>
        This Cookie Policy explains how Royale Crown Academy Ltd uses cookies and similar technologies on our website. It should be read alongside our <Link to="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</Link>.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the website function and can be used to understand how visitors use the site.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Types of cookies we use</h2>
      <p>We use the following categories of cookies:</p>

      <h3 className="font-semibold text-foreground">Necessary cookies</h3>
      <p>
        These cookies are essential for the website to function and cannot be disabled. They include cookies that remember your cookie preferences and enable core site features.
      </p>

      <h3 className="font-semibold text-foreground">Analytics cookies</h3>
      <p>
        These cookies help us understand how visitors use our website, which pages are popular and where improvements can be made. We only use these cookies with your consent.
      </p>

      <h3 className="font-semibold text-foreground">Marketing cookies</h3>
      <p>
        These cookies may be used to deliver relevant marketing communications. We only use these cookies with your consent.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. How to manage cookies</h2>
      <p>
        When you first visit our website, you will see a cookie banner allowing you to accept all, reject non-essential or manage your preferences. You can change your preferences at any time by clicking the "Cookie preferences" link in the footer.
      </p>
      <p>
        You can also manage cookies through your browser settings. Please note that disabling certain cookies may affect how the website works.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Third-party cookies</h2>
      <p>
        Where we use third-party analytics or marketing tools, those providers may set their own cookies. We do not control these cookies and recommend reviewing the relevant provider's cookie policy.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The latest version will always be available on this page.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Contact us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
