import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { School, Users, BookOpen, Heart, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function ForSchoolsColleges() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '', jobTitle: '', school: '', email: '', phone: '', supportType: '', timeframe: '', message: '', consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const schoolImageUrl = serenities.files.url('d8a52ffe130477f20c51a632ffc8d950');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="For Schools & Colleges | Education Support & Staffing"
        description="Flexible education support, SEN provision, tuition and staffing solutions for UK schools and colleges."
        canonical="https://royalecrown.serenitiesai.com/for-schools-colleges" />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={schoolImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">For Schools & Colleges</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Education Support That Works Around Your Setting</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Flexible SEN support, targeted tuition, catch-up programmes and staffing solutions designed for headteachers, SENCOs and education leaders.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Services for Settings</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Comprehensive support for education settings</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: Heart, title: "SEN Support", desc: "Specialist support for learners with additional educational needs." },
              { icon: BookOpen, title: "Targeted Tutoring", desc: "One-to-one and small-group tuition for specific learners or cohorts." },
              { icon: School, title: "Catch-Up Support", desc: "Structured intervention to help learners close gaps and rebuild confidence." },
              { icon: Users, title: "Teaching Assistants", desc: "Classroom and SEN support staff to reinforce learning." },
              { icon: Users, title: "Cover Supervisors", desc: "Reliable cover to maintain continuity in your setting." },
              { icon: Shield, title: "Flexible Staffing", desc: "Responsive staffing solutions that adapt to your timetable and needs." }].
              map((service) =>
              <motion.div key={service.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Why Schools Choose Us */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative">

                <img src={schoolImageUrl} alt="School leadership team" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Why Schools Work With Us</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">A partner, not just a provider</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5">
                  {[
                  "Responsive communication and clear processes",
                  "Support tailored to your setting's priorities",
                  "Safeguarding-aware professionals",
                  "Flexible arrangements that fit your timetable",
                  "Regular review and ongoing partnership"].
                  map((item, index) =>
                  <div key={index} className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-surface-700 text-lg">{item}</p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Request Support Form */}
        <section className="py-24 bg-background" id="request-support">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Request Support</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Discuss your school's requirements</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600">
                Complete the form below and a member of our team will contact you to discuss your needs.
              </motion.p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-surface-100">

              {submitted ?
              <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank you for your enquiry</h3>
                  <p className="text-surface-600">We have received your message and will be in touch shortly.</p>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-semibold text-primary mb-2">Job Title *</label>
                      <input type="text" id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-semibold text-primary mb-2">School / College *</label>
                    <input type="text" id="school" name="school" required value={formData.school} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Telephone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="supportType" className="block text-sm font-semibold text-primary mb-2">Type of Support Required *</label>
                      <select id="supportType" name="supportType" required value={formData.supportType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                        <option value="">Please select</option>
                        <option value="sen-support">SEN Support</option>
                        <option value="tuition">Targeted Tuition</option>
                        <option value="catch-up">Catch-Up Support</option>
                        <option value="teaching-assistant">Teaching Assistant</option>
                        <option value="cover-supervisor">Cover Supervisor</option>
                        <option value="staffing">Flexible Staffing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeframe" className="block text-sm font-semibold text-primary mb-2">Approximate Timeframe</label>
                      <select id="timeframe" name="timeframe" value={formData.timeframe} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                        <option value="">Please select</option>
                        <option value="immediate">As soon as possible</option>
                        <option value="within-month">Within a month</option>
                        <option value="term">Next term</option>
                        <option value="future">Future planning</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded border-surface-300 text-secondary focus:ring-secondary" />
                    <label htmlFor="consent" className="text-sm text-surface-600">
                      I consent to Royale Crown Academy Ltd processing my information to respond to this enquiry. I have read the <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                    Request Support
                  </button>
                </form>
              }
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>);

}