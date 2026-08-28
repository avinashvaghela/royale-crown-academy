import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Briefcase, Users, Heart, UserCheck, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function JoinUs() {
  const prefersReducedMotion = useReducedMotion();
  const professionalImageUrl = serenities.files.url('b1508abe1eb6618ff8eb1f79ee65e27f');

  const [formData, setFormData] = useState({
    fullName: '', email: '', telephone: '', location: '', role: '', subjects: '', experience: '', senExperience: '', availability: '', message: '', consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
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
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Join Our Team | Education Professionals"
        description="Join Royale Crown Academy Ltd as a tutor, teaching assistant, SEN support professional or education specialist."
        canonical="https://royalecrown.serenitiesai.com/join-us"
      />
      <Header />
      <main id="main-content">
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={professionalImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Careers</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Build Your Education Career With Us</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Join a growing UK education organisation committed to personalised learning, inclusion and professional standards.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Opportunities</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Who we are looking for</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: BookOpen, title: "Tutors", desc: "Subject specialists across primary, secondary, GCSE and A-Level subjects." },
                { icon: Users, title: "Teaching Assistants", desc: "Classroom support professionals who work confidently alongside learners." },
                { icon: Heart, title: "SEN Teaching Assistants", desc: "Support professionals with experience of working with learners with additional needs." },
                { icon: UserCheck, title: "Cover Supervisors", desc: "Reliable education professionals able to supervise classes." },
                { icon: Users, title: "Learning Support Assistants", desc: "Professionals who provide targeted support to help learners access the curriculum." },
                { icon: Briefcase, title: "Education Support Professionals", desc: "Other suitable education professionals with complementary skills." }
              ].map((role) => (
                <motion.div key={role.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{role.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{role.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="application-form" className="py-24 bg-surface-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-xl border border-surface-100 overflow-hidden">
                <div className="bg-primary px-8 py-8">
                  <h2 className="font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">Application Form</h2>
                  <p className="mt-2 text-primary-foreground/80">Tell us about your experience and the role you are interested in.</p>
                </div>
                <div className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank you for your application</h3>
                      <p className="text-surface-600">We have received your details and will be in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">Full name *</label>
                          <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-semibold text-primary mb-2">Telephone</label>
                          <input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-sm font-semibold text-primary mb-2">Location</label>
                          <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-primary mb-2">Role you are applying for *</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
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
                        <label htmlFor="subjects" className="block text-sm font-semibold text-primary mb-2">Subjects / specialisms</label>
                        <input id="subjects" name="subjects" type="text" value={formData.subjects} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="experience" className="block text-sm font-semibold text-primary mb-2">Relevant experience</label>
                          <textarea id="experience" name="experience" rows={3} value={formData.experience} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" />
                        </div>
                        <div>
                          <label htmlFor="senExperience" className="block text-sm font-semibold text-primary mb-2">SEN experience</label>
                          <textarea id="senExperience" name="senExperience" rows={3} value={formData.senExperience} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="availability" className="block text-sm font-semibold text-primary mb-2">Availability</label>
                        <input id="availability" name="availability" type="text" value={formData.availability} onChange={handleChange} placeholder="e.g. weekdays after 3pm" className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Additional information</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" />
                      </div>
                      <div className="flex items-start gap-3">
                        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded border-surface-300 text-secondary focus:ring-secondary" />
                        <label htmlFor="consent" className="text-sm text-surface-600">
                          I agree to Royale Crown Academy Ltd processing my personal data in accordance with the <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>. *
                        </label>
                      </div>
                      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                      <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                        Submit Application
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
