import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function BookConsultation() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  const [formData, setFormData] = useState({
    name: '', email: '', telephone: '', audience: '', topic: '', preferredDate: '', message: '', consent: false
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
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Book a Consultation | Royale Crown Academy"
        description="Book a free, no-obligation consultation with Royale Crown Academy to discuss tuition, SEN support or education staffing requirements."
        canonical="https://royalecrown.serenitiesai.com/book-consultation" />

      <Header />
      <main id="main-content">
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Consultation</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Book a Consultation</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Arrange a friendly, no-obligation conversation with our team to discuss tuition, SEN support, staffing or any other education requirement.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-xl border border-surface-100 overflow-hidden">
                <div className="bg-primary px-8 py-8">
                  <h2 className="font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">Request a consultation</h2>
                  <p className="mt-2 text-primary-foreground/80">We will contact you to arrange a convenient time.</p>
                </div>
                <div className="p-8">
                  {submitted ?
                  <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-3">Consultation request received</h3>
                      <p className="text-surface-600">Thank you. A member of our team will be in touch shortly to arrange a convenient time to speak.</p>
                    </div> :

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Name *</label>
                          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-semibold text-primary mb-2">Telephone</label>
                        <input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="audience" className="block text-sm font-semibold text-primary mb-2">I am a... *</label>
                          <select id="audience" name="audience" value={formData.audience} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
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
                          <label htmlFor="topic" className="block text-sm font-semibold text-primary mb-2">Topic *</label>
                          <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
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
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-primary mb-2">Preferred date / time</label>
                        <input id="preferredDate" name="preferredDate" type="text" value={formData.preferredDate} onChange={handleChange} placeholder="e.g. Weekday afternoons" className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">How can we help?</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" />
                      </div>
                      <div className="flex items-start gap-3">
                        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded border-surface-300 text-secondary focus:ring-secondary" />
                        <label htmlFor="consent" className="text-sm text-surface-600">
                          I agree to Royale Crown Academy Ltd processing my personal data in accordance with the <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>. *
                        </label>
                      </div>
                      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                      <button type="submit" className="w-full md:w-auto px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2">
                        Request Consultation <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  }
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>);

}