import React, { useState } from 'react';
import Icon from './Icon';

export default function SchoolForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    supportNeeded: [],
    urgency: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const supportOptions = [
  'SEN tuition',
  'Targeted tutoring',
  'Catch-up support',
  'One-to-one learner support',
  'Small-group programmes',
  'Teaching Assistants',
  'Cover Supervisors',
  'Flexible staffing support'];


  const validate = () => {
    const nextErrors = {};
    if (!formData.schoolName.trim()) nextErrors.schoolName = 'Please enter the school or college name';
    if (!formData.contactName.trim()) nextErrors.contactName = 'Please enter your name';
    if (!formData.role.trim()) nextErrors.role = 'Please enter your role';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please describe your requirements';
    if (!formData.consent) nextErrors.consent = 'Please confirm you agree to our privacy notice';
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSupportChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(option) ?
      prev.supportNeeded.filter((o) => o !== option) :
      [...prev.supportNeeded, option]
    }));
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
        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Request received</h3>
        <p className="mt-2 text-sm text-surface-600">
          Thank you. A member of our team will contact you shortly to discuss your school's requirements.
        </p>
      </div>);

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="schoolName" className="block text-sm font-medium text-foreground">School or college name <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-invalid={errors.schoolName ? 'true' : 'false'}
          aria-describedby={errors.schoolName ? 'schoolName-error' : undefined} />

        {errors.schoolName && <p id="schoolName-error" className="mt-1.5 text-sm text-red-600">{errors.schoolName}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-foreground">Your name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-invalid={errors.contactName ? 'true' : 'false'}
            aria-describedby={errors.contactName ? 'contactName-error' : undefined} />

          {errors.contactName && <p id="contactName-error" className="mt-1.5 text-sm text-red-600">{errors.contactName}</p>}
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-foreground">Your role <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="e.g. SENCO"
            aria-invalid={errors.role ? 'true' : 'false'}
            aria-describedby={errors.role ? 'role-error' : undefined} />

          {errors.role && <p id="role-error" className="mt-1.5 text-sm text-red-600">{errors.role}</p>}
        </div>
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
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined} />

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
            placeholder="Optional" />

        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-foreground">Support needed</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {supportOptions.map((option) =>
          <label key={option} className="flex items-center gap-2.5 rounded-md border border-surface-200 p-3 hover:bg-surface-50">
              <input
              type="checkbox"
              checked={formData.supportNeeded.includes(option)}
              onChange={() => handleSupportChange(option)}
              className="h-4 w-4 rounded border-surface-300 text-primary focus:ring-primary" />

              <span className="text-sm text-foreground">{option}</span>
            </label>
          )}
        </div>
      </fieldset>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-foreground">How soon do you need support?</label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">

          <option value="">Please select</option>
          <option value="immediate">As soon as possible</option>
          <option value="this-term">This term</option>
          <option value="next-term">Next term</option>
          <option value="planning">Future planning</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">Tell us about your requirements <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-300 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-surface-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Number of learners, year groups, specific needs and any timescales."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined} />

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
            aria-describedby={errors.consent ? 'consent-error' : undefined} />

          <span className="text-sm text-surface-600">
            I confirm I am authorised to make this enquiry and agree to Royale Crown Academy Ltd processing these details in line with the <a href="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</a>. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p id="consent-error" className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto">

        {submitting ? 'Sending...' : 'Request Support'}
      </button>
    </form>);

}