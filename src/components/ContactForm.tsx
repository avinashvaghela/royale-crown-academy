import React, { useState } from 'react';
import Icon from './Icon';

export default function ContactForm({ audience = 'parent' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    learnerAge: '',
    supportType: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please tell us a little about what you need';
    if (!formData.consent) nextErrors.consent = 'Please confirm you agree to our privacy notice';
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Thank you for your enquiry</h3>
        <p className="mt-2 text-sm text-surface-600">
          We have received your message and will be in touch shortly. If your enquiry is urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">Full name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="you@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-foreground">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="learnerAge" className="block text-sm font-medium text-foreground">Learner's age or year group</label>
          <input
            type="text"
            id="learnerAge"
            name="learnerAge"
            value={formData.learnerAge}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="e.g. Year 7"
          />
        </div>
        <div>
          <label htmlFor="supportType" className="block text-sm font-medium text-foreground">Type of support</label>
          <select
            id="supportType"
            name="supportType"
            value={formData.supportType}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Please select</option>
            <option value="sen">SEN support</option>
            <option value="tutoring">Personalised tutoring</option>
            <option value="primary">Primary tuition</option>
            <option value="secondary">Secondary tuition</option>
            <option value="gcse">GCSE support</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">How can we help? <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us about your needs, goals and any relevant background."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-surface-300 text-primary focus:ring-primary"
            aria-invalid={errors.consent ? 'true' : 'false'}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm text-surface-600">
            I agree to Royale Crown Academy Ltd processing my personal data in line with the <a href="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</a>. I understand I can withdraw consent at any time. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p id="consent-error" className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Sending...' : audience === 'school' ? 'Request Support' : 'Send Enquiry'}
      </button>
    </form>
  );
}
