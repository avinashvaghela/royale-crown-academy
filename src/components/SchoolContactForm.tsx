import React, { useState } from 'react';
import Icon from './Icon';

export default function SchoolContactForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    role: '',
    settingName: '',
    email: '',
    phone: '',
    postcode: '',
    supportType: '',
    requirement: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.contactName.trim()) nextErrors.contactName = 'Please enter your name';
    if (!formData.settingName.trim()) nextErrors.settingName = 'Please enter your school or college name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.requirement.trim()) nextErrors.requirement = 'Please tell us about your requirement';
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
          We have received your request and will be in touch shortly to discuss how we can support your school or college.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-foreground">Full name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
            aria-invalid={errors.contactName ? 'true' : 'false'}
            aria-describedby={errors.contactName ? 'contactName-error' : undefined}
          />
          {errors.contactName && <p id="contactName-error" className="mt-1.5 text-sm text-red-600">{errors.contactName}</p>}
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-foreground">Your role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="e.g. SENCO, Headteacher"
          />
        </div>
      </div>

      <div>
        <label htmlFor="settingName" className="block text-sm font-medium text-foreground">School or college name <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="settingName"
          name="settingName"
          value={formData.settingName}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Name of setting"
          aria-invalid={errors.settingName ? 'true' : 'false'}
          aria-describedby={errors.settingName ? 'settingName-error' : undefined}
        />
        {errors.settingName && <p id="settingName-error" className="mt-1.5 text-sm text-red-600">{errors.settingName}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="you@school.ac.uk"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-foreground">Setting postcode</label>
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
        <div>
          <label htmlFor="supportType" className="block text-sm font-medium text-foreground">Type of support required</label>
          <select
            id="supportType"
            name="supportType"
            value={formData.supportType}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Please select</option>
            <option value="sen-tuition">SEN tuition</option>
            <option value="targeted-tutoring">Targeted tutoring</option>
            <option value="catch-up">Catch-up support</option>
            <option value="staffing">Teaching Assistant / staffing</option>
            <option value="cover">Cover Supervisor</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-foreground">Tell us about your requirement <span className="text-red-500">*</span></label>
        <textarea
          id="requirement"
          name="requirement"
          rows={4}
          value={formData.requirement}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Number of learners, year groups, SEN needs, staffing role, start date, etc."
          aria-invalid={errors.requirement ? 'true' : 'false'}
          aria-describedby={errors.requirement ? 'requirement-error' : undefined}
        />
        {errors.requirement && <p id="requirement-error" className="mt-1.5 text-sm text-red-600">{errors.requirement}</p>}
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
            I agree to Royale Crown Academy Ltd processing the data above in line with the <a href="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</a>. I confirm I am authorised to make this enquiry on behalf of the setting. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p id="consent-error" className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Sending...' : 'Request Support'}
      </button>
    </form>
  );
}
