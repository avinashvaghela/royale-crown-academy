import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';

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

export default function BookConsultation() {
  const heroRef = useReveal();
  const formRef = useReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    audience: '',
    topic: '',
    preferredDate: '',
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
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Please enter a valid email address';
    if (!formData.audience) nextErrors.audience = 'Please select who you are';
    if (!formData.topic) nextErrors.topic = 'Please select a topic';
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
                <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Consultation</span>
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl max-w-4xl">
                Book a consultation.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FAF9F6]/85">
                Arrange a friendly, no-obligation conversation with our team to discuss tuition, SEN support, staffing or any other education requirement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div ref={formRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="bg-[#102A56] px-8 py-8">
                  <h2 className="font-heading text-2xl font-bold text-[#FAF9F6] sm:text-3xl">Request a consultation</h2>
                  <p className="mt-2 text-[#FAF9F6]/80">We will contact you to arrange a convenient time.</p>
                </div>
                <div className="p-8">
                  {submitted ?
                  <div className="rounded-xl bg-[#E8D7B2]/20 p-8 text-center">
                      <h3 className="font-heading text-xl font-semibold text-[#102A56]">Consultation request received</h3>
                      <p className="mt-3 text-[#243247]/80">Thank you. A member of our team will be in touch shortly to arrange a convenient time to speak.</p>
                      <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-[#102A56] px-6 py-3 text-sm font-semibold text-[#FAF9F6] transition-colors hover:bg-[#0B1D3A]">
                        Return to Home
                      </Link>
                    </div> :

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-[#102A56]">Name <span className="text-[#C6A15B]">*</span></label>
                          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-[#102A56]">Email <span className="text-[#C6A15B]">*</span></label>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-semibold text-[#102A56]">Telephone</label>
                        <input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="audience" className="block text-sm font-semibold text-[#102A56]">I am a... <span className="text-[#C6A15B]">*</span></label>
                          <select id="audience" name="audience" value={formData.audience} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20">
                            <option value="">Select an option</option>
                            <option value="parent">Parent / Carer</option>
                            <option value="school">School / College</option>
                            <option value="council">Council / Local Authority</option>
                            <option value="professional">Education Professional</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.audience && <p className="mt-1 text-sm text-red-600">{errors.audience}</p>}
                        </div>
                        <div>
                          <label htmlFor="topic" className="block text-sm font-semibold text-[#102A56]">Topic <span className="text-[#C6A15B]">*</span></label>
                          <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20">
                            <option value="">Select a topic</option>
                            <option value="tuition">Private Tuition</option>
                            <option value="sen">SEN Support</option>
                            <option value="staffing">Education Staffing</option>
                            <option value="school-support">School / College Support</option>
                            <option value="council">Council / Local Authority</option>
                            <option value="careers">Careers / Join Our Team</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.topic && <p className="mt-1 text-sm text-red-600">{errors.topic}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-[#102A56]">Preferred date / time</label>
                        <input id="preferredDate" name="preferredDate" type="text" value={formData.preferredDate} onChange={handleChange} placeholder="e.g. Weekday afternoons" className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#102A56]">How can we help?</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-2 block w-full rounded-md border border-[#E5EAF1] bg-[#FAF9F6] px-4 py-3 text-[#243247] focus:border-[#C6A15B] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/20" />
                      </div>
                      <div className="flex items-start gap-3">
                        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="mt-1 h-5 w-5 rounded border-[#E5EAF1] text-[#102A56] focus:ring-[#C6A15B]" />
                        <label htmlFor="consent" className="text-sm text-[#243247]/80">
                          I agree to Royale Crown Academy Ltd processing my personal data in accordance with the <Link to="/privacy-policy" className="text-[#102A56] underline hover:text-[#C6A15B]">Privacy Policy</Link>. <span className="text-[#C6A15B]">*</span>
                        </label>
                      </div>
                      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                      <button type="submit" className="w-full rounded-md bg-[#C6A15B] px-6 py-4 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                        Request Consultation
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