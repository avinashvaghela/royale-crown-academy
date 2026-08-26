import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const roles = [
  { icon: 'bookOpen', title: 'Tutors', text: 'Subject specialists for one-to-one and small-group tuition across primary, secondary and GCSE.' },
  { icon: 'heart', title: 'SEN Support Professionals', text: 'Experienced professionals who understand autism, ADHD, dyslexia, SEMH and additional learning needs.' },
  { icon: 'users', title: 'Teaching Assistants', text: 'Classroom and learner support professionals for schools, colleges and specialist settings.' },
  { icon: 'briefcase', title: 'Cover Supervisors', text: 'Reliable cover professionals to maintain continuity and expectations in the classroom.' },
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    subjects: '',
    ageGroups: '',
    experience: '',
    qualifications: '',
    senExperience: '',
    availability: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.role.trim()) nextErrors.role = 'Please select or enter a role';
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

  return (
    <PageLayout>
      <SEOHead
        title="Join Our Team | Education Professionals"
        description="Join Royale Crown Academy Ltd as a tutor, teaching assistant, SEN support professional or education specialist. Apply online today."
        path="/join-us"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FA]/50 pt-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#102A56]/5 blur-3xl" />
        <LogoWatermark opacity={0.03} size={400} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FAF9F6] px-4 py-1.5 text-sm font-medium text-[#102A56] border border-[#102A56]/10">
                  <Icon name="briefcase" className="h-4 w-4 text-[#C6A15B]" />
                  Careers
                </span>
                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl lg:text-6xl">
                  Join Royale Crown Academy
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#243247] sm:text-xl">
                  We are building a network of dedicated education professionals who share our commitment to personalised support, safeguarding and meaningful progress.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#102A56] px-6 py-3.5 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                    Apply Now <Icon name="arrowRight" className="h-5 w-5" />
                  </a>
                  <a href="#roles" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3.5 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                    View Roles
                  </a>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF4FA] via-[#FAF9F6] to-[#E8D7B2]/30 p-10 shadow-md">
                <img src={logoUrl} alt="Royale Crown Academy Ltd" className="mx-auto h-36 w-auto object-contain opacity-95 sm:h-44" />
                <p className="mt-6 text-center text-sm font-medium text-[#243247]">Build your education career with a growing UK education organisation.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Opportunities</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Roles we recruit</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => (
              <SectionReveal key={role.title} delay={index * 75}>
                <div className="flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name={role.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#102A56]">{role.title}</h3>
                  <p className="mt-2 flex-1 text-[#243247]">{role.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-8 shadow-sm sm:p-12">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Apply to work with us</h2>
                <p className="mt-4 text-lg text-[#243247]">Complete the form below and we will be in touch about suitable opportunities.</p>
              </div>

              {submitted ? (
                <div className="mt-10 rounded-md border border-green-200 bg-green-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icon name="check" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">Thank you for your application</h3>
                  <p className="mt-2 text-sm text-[#243247]">We have received your details and will contact you if a suitable opportunity arises.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#243247]">Full name <span className="text-red-500">*</span></label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                      {errors.fullName && <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#243247]">Email address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                      {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#243247]">Phone number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-[#243247]">Location / postcode</label>
                      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-[#243247]">Role you are interested in <span className="text-red-500">*</span></label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20">
                      <option value="">Please select</option>
                      <option value="tutor">Tutor</option>
                      <option value="sen-support">SEN Support Professional</option>
                      <option value="teaching-assistant">Teaching Assistant</option>
                      <option value="sen-teaching-assistant">SEN Teaching Assistant</option>
                      <option value="cover-supervisor">Cover Supervisor</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && <p className="mt-1.5 text-sm text-red-600">{errors.role}</p>}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="subjects" className="block text-sm font-medium text-[#243247]">Subjects / specialisms</label>
                      <input type="text" id="subjects" name="subjects" value={formData.subjects} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                    </div>
                    <div>
                      <label htmlFor="ageGroups" className="block text-sm font-medium text-[#243247]">Age groups</label>
                      <input type="text" id="ageGroups" name="ageGroups" value={formData.ageGroups} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-[#243247]">Relevant experience</label>
                    <textarea id="experience" name="experience" rows={3} value={formData.experience} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                  </div>

                  <div>
                    <label htmlFor="qualifications" className="block text-sm font-medium text-[#243247]">Qualifications</label>
                    <textarea id="qualifications" name="qualifications" rows={2} value={formData.qualifications} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                  </div>

                  <div>
                    <label htmlFor="senExperience" className="block text-sm font-medium text-[#243247]">SEN experience</label>
                    <textarea id="senExperience" name="senExperience" rows={2} value={formData.senExperience} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-[#243247]">Availability</label>
                    <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#243247]">Additional information</label>
                    <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="mt-1.5 w-full rounded-md border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-2.5 text-sm text-[#243247] placeholder:text-[#243247]/50 focus:border-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#102A56]/20" />
                  </div>

                  <div>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-[#E2E8F0] text-[#102A56] focus:ring-[#102A56]" />
                      <span className="text-sm text-[#243247]">I agree to Royale Crown Academy Ltd processing my personal data in line with the <a href="/privacy-policy" className="font-medium text-[#102A56] underline">Privacy Policy</a>. I understand I can withdraw consent at any time. <span className="text-red-500">*</span></span>
                    </label>
                    {errors.consent && <p className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
                  </div>

                  <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-md bg-[#102A56] px-6 py-3 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] disabled:opacity-60 sm:w-auto">
                    {submitting ? 'Sending...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
