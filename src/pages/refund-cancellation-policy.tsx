import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function RefundCancellationPage() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy" lastUpdated="[Date to be inserted]">
      <p>
        This Refund & Cancellation Policy explains how cancellations, refunds and changes are handled for services provided by Royale Crown Academy Ltd. Specific terms may also be set out in individual service agreements.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">1. Cancellations by you</h2>
      <p>
        If you need to cancel or reschedule a booked service, please contact us as soon as possible. Specific notice periods and any charges will be set out in your service agreement or booking confirmation.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">2. Cancellations by us</h2>
      <p>
        In exceptional circumstances, we may need to cancel or reschedule a session or service. We will notify you as soon as possible and, where appropriate, offer an alternative or refund.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">3. Refunds</h2>
      <p>
        Refunds will be considered on a case-by-case basis, taking into account the circumstances, any advance payments made, and the terms of the relevant service agreement. Where a refund is agreed, it will be processed within [timeframe to be inserted].
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">4. Non-attendance</h2>
      <p>
        Failure to attend a booked session without reasonable notice may result in the session being charged. Please refer to your service agreement for details.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">5. Changes to services</h2>
      <p>
        If you wish to change the type, frequency or format of support, please contact us to discuss. We will do our best to accommodate reasonable requests.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground">6. Contact us</h2>
      <p>
        For cancellation or refund queries, please contact us at <a href="mailto:info@royalecrownacademy.co.uk" className="font-medium text-primary underline">info@royalecrownacademy.co.uk</a>.
      </p>
    </LegalPageLayout>);

}