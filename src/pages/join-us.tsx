import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';

const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function JoinUs() {
  const heroRef = useReveal();
  const section1Ref = useReveal();
  const formRef = useReveal();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    location: '',
    role: '',
    subjects: '',
    experience: '',
    senExperience: '',
    availability: '',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Please enter a valid email address';
    if (!formData.role) nextErrors.role = 'Please select a role';
    if (!formData.consent) nextErrors.consent = 'Please confirm you agree to our privacy notice';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-body text-[#243247]">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#102A56] pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 opacity-10">
            <LogoWatermark className="h-[140%] w-[140%] -translate-x-1/4 -translate-y-1/4 text-[#FAF9F6]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#102A56] via-[#102A56]/95 to-[#0B1D3A]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={heroRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Careers</span>
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl max-w-4xl">
                Build your education career with us.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FAF9F6]/85">
                Join a growing UK education organisation committed to personalised learning, inclusion and professional standards. We welcome applications from tutors, teaching assistants, SEN professionals and other education specialists.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#application-form" className="inline-flex items-center rounded-md bg-[#C6A15B] px-6 py-3 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                  Apply Now
                </a>
                <Link to="/education-staffing" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 bg-transparent px-6 py-3 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                  Learn About Staffing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={section1Ref} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Who we are looking for</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                  We are interested in hearing from education professionals who share our commitment to high-quality, learner-centred support.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                { title: 'Tutors', desc: 'Subject specialists across primary, secondary, GCSE and A-Level subjects, able to deliver personalised tuition online or in person.' },
                { title: 'Teaching Assistants', desc: 'Classroom support professionals who work confidently alongside learners and teachers in a range of settings.' },
                { title: 'SEN Teaching Assistants', desc: 'Support professionals with experience of working with learners with additional needs, including autism, ADHD and dyslexia.' },
                { title: 'Cover Supervisors', desc: 'Reliable education professionals able to supervise classes and maintain a positive learning environment.' },
                { title: 'Learning Support Assistants', desc: 'Professionals who provide targeted support to help learners access the curriculum and build confidence.' },
                { title: 'Education Support Professionals', desc: 'Other suitable education professionals with skills and experience that complement our services.' }].
                map((item, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 h-1 w-12 rounded-full bg-[#C6A15B] transition-all group-hover:w-20" />
                    <h3 className="font-heading text-xl font-semibold text-[#102A56]">{item.title}</h3>
                    <p className="mt-3 text-[#243247]/75 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="application-form" className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div ref={formRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="bg-[#102A56] px-8 py-8">
                  <h2 className="font-heading text-2xl font-bold text-[#FAF9F6] sm:text-3xl">Application Form</h2>
                  <p className="mt-2 text-[#FAF9F6]/80">Tell us about your experience and the role you are interested in.</p>
                </div>
                <div className="p-8">
                  {submitted ?
                  <div className="rounded-xl bg-[#E8D7B2]/20 p-8 text-center">
                      <h3 className="font-heading text-xl font-semibold text-[#102A56]">Thank you for your application</h3>
                      <p className="mt-3 text-[#243247]/80">We have received your details and will be in touch shortly to discuss the next steps.</p>
                      <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-[#102A56] px-6 py-3 text-sm font-semibold text-[#FAF9F6] transition-colors hover:bg-[#0B1D3A]">
                        Return to Home
                      </Link>
                    </div> :

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-semibold text-[#102A56]">Full name <span className="text-[#C6A15B]">*</span></label>
                          <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-[#102A56]">Email <span className="text-[#C6A15B]">*</span></label>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-semibold text-[#102A56]">Telephone</label>
                          <input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-sm font-semibold text-[#102A56]">Location</label>
                          <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-[#102A56]">Role you are applying for <span className="text-[#C6A15B]">*</span></label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20">
                          <option value="">Select a role</option>
                          <option value="tutor">Tutor</option>
                          <option value="teaching-assistant">Teaching Assistant</option>
                          <option value="sen-teaching-assistant">SEN Teaching Assistant</option>
                          <option value="cover-supervisor">Cover Supervisor</option>
                          <option value="learning-support-assistant">Learning Support Assistant</option>
                          <option value="other">Other Education Professional</option>
                        </select>
                        {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
                      </div>
                      <div>
                        <label htmlFor="subjects" className="block text-sm font-semibold text-[#102A56]">Subjects / specialisms</label>
                        <input id="subjects" name="subjects" type="text" value={formData.subjects} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="experience" className="block text-sm font-semibold text-[#102A56]">Relevant experience</label>
                          <textarea id="experience" name="experience" rows={3} value={formData.experience} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                        </div>
                        <div>
                          <label htmlFor="senExperience" className="block text-sm font-semibold text-[#102A56]">SEN experience</label>
                          <textarea id="senExperience" name="senExperience" rows={3} value={formData.senExperience} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="availability" className="block text-sm font-semibold text-[#102A56]">Availability</label>
                        <input id="availability" name="availability" type="text" value={formData.availability} onChange={handleChange} placeholder="e.g. weekdays after 3pm" className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#102A56]">Additional information</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div className="flex items-start gap-3">
                        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="mt-1 h-5 w-5 rounded border-[#E5EAF1] text-[#102A56] focus:ring-[#C6A15B]" />
                        <label htmlFor="consent" className="text-sm text-[#243247]/80">
                          I agree to Royale Crown Academy Ltd processing my personal data in accordance with the <Link to="/privacy-policy" className="text-[#102A56] underline hover:text-[#C6A15B]">Privacy Policy</Link>. <span className="text-[#C6A15B]">*</span>
                        </label>
                      </div>
                      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                      <button type="submit" className="w-full rounded-md bg-[#102A56] px-6 py-4 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                        Submit Application
                      </button>
                    </form>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}