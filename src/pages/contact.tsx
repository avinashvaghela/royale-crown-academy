import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MapPin, Heart, School, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [audience, setAudience] = useState('parent');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', learnerName: '', school: '', subject: '', message: '', consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Contact Us | Royale Crown Academy"
        description="Get in touch with Royale Crown Academy Ltd for SEN support, tutoring, education staffing and school enquiries."
        canonical="https://royalecrown.serenitiesai.com/contact"
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
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
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Contact</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">We Would Love to Hear From You</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Whether you are a parent, school leader, council professional or education professional, we are here to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-5">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary mb-2">Telephone</h2>
                <p className="text-surface-600">07553539869</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-5">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary mb-2">Email</h2>
                <p className="text-surface-600">[Email placeholder]</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-5">
                  <MapPin className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary mb-2">Office</h2>
                <p className="text-surface-600">[Address placeholder — to be added if required]</p>
              </motion.div>
            </motion.div>

            {/* Audience Selection */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center mb-10"
              >
                <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">How can we help you?</motion.h2>
                <motion.p variants={fadeUp} className="text-surface-600">Select the option that best describes you.</motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              >
                {[
                  { id: 'parent', label: 'Parent / Carer', icon: Heart },
                  { id: 'school', label: 'School / College', icon: School },
                  { id: 'council', label: 'Council / Local Authority', icon: MapPin },
                  { id: 'professional', label: 'Education Professional', icon: Mail }
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    variants={fadeUp}
                    onClick={() => { setAudience(option.id); setSubmitted(false); }}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                      audience === option.id
                        ? 'border-secondary bg-secondary/5 text-primary'
                        : 'border-surface-200 hover:border-secondary/50 text-surface-600'
                    }`}
                  >
                    <option.icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{option.label}</span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Form */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-surface-100"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank you for your enquiry</h3>
                    <p className="text-surface-600">We have received your message and will be in touch shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                      {audience === 'parent' && "I'm a Parent or Carer"}
                      {audience === 'school' && "I'm a School or College"}
                      {audience === 'council' && "I'm from a Council or Local Authority"}
                      {audience === 'professional' && "I'm an Education Professional"}
                    </h3>
                    <p className="text-surface-600 mb-8">
                      {audience === 'parent' && "Tell us how we can support your learner."}
                      {audience === 'school' && "Tell us about your education support requirements."}
                      {audience === 'council' && "Tell us about your local authority education requirements."}
                      {audience === 'professional' && "Tell us about your skills, experience and the role you are interested in."}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Name *</label>
                          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Telephone</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                        {audience === 'parent' && (
                          <div>
                            <label htmlFor="learnerName" className="block text-sm font-semibold text-primary mb-2">Learner's Name / Age</label>
                            <input type="text" id="learnerName" name="learnerName" value={formData.learnerName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          </div>
                        )}
                        {(audience === 'school' || audience === 'council') && (
                          <div>
                            <label htmlFor="school" className="block text-sm font-semibold text-primary mb-2">Organisation *</label>
                            <input type="text" id="school" name="school" required={audience === 'school' || audience === 'council'} value={formData.school} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                          </div>
                        )}
                        {audience === 'professional' && (
                          <div>
                            <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">Role Interested In</label>
                            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                              <option value="">Please select</option>
                              <option value="tutor">Tutor</option>
                              <option value="teaching-assistant">Teaching Assistant</option>
                              <option value="sen-ta">SEN Teaching Assistant</option>
                              <option value="cover-supervisor">Cover Supervisor</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message *</label>
                        <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" placeholder="Please share details about your enquiry..."></textarea>
                      </div>
                      <div className="bg-surface-50 rounded-lg p-4 text-sm text-surface-600">
                        <p className="mb-2"><strong>Privacy notice:</strong> We only collect the information needed to respond to your enquiry. We do not ask for detailed medical or highly sensitive learner information through this form.</p>
                        <p>Your information will be used to contact you about your enquiry and will be retained in line with our <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded border-surface-300 text-secondary focus:ring-secondary" />
                        <label htmlFor="consent" className="text-sm text-surface-600">
                          I consent to Royale Crown Academy Ltd processing my information to respond to this enquiry. *
                        </label>
                      </div>
                      <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                        Send Enquiry <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
