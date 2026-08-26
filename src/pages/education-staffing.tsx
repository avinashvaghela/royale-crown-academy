import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Users, UserCheck, Shield, ClipboardCheck, ArrowRight, Briefcase, School, Phone, Heart, BookOpen } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function EducationStaffing() {
  const prefersReducedMotion = useReducedMotion();
  const professionalImageUrl = serenities.files.url('b1508abe1eb6618ff8eb1f79ee65e27f');
  const schoolImageUrl = serenities.files.url('d8a52ffe130477f20c51a632ffc8d950');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Education Staffing | Teaching Assistants, SEN Support & Cover"
        description="Professional education staffing solutions for schools and colleges. Supply of Teaching Assistants, SEN Teaching Assistants, Cover Supervisors and tutors."
        canonical="https://royalecrown.serenitiesai.com/education-staffing" />

      <Header />
      <main id="main-content">
        {/* Hero */}
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
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Education Staffing</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Reliable Education Professionals for Your Setting</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Supply of Teaching Assistants, SEN support staff, Cover Supervisors, tutors and other education professionals for schools and colleges.
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

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Roles We Supply</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">The right professional for the right role</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: Users, title: "Teaching Assistants", desc: "Classroom support to help learners access the curriculum and stay engaged." },
              { icon: Heart, title: "SEN Teaching Assistants", desc: "Specialist support for learners with additional educational needs." },
              { icon: UserCheck, title: "Cover Supervisors", desc: "Reliable cover support to maintain continuity in the classroom." },
              { icon: BookOpen, title: "Tutors", desc: "Subject specialists for one-to-one and small-group tuition." },
              { icon: Briefcase, title: "Education Support Professionals", desc: "Additional support staff to meet the changing needs of your setting." },
              { icon: School, title: "School & College Support", desc: "Flexible staffing solutions designed around your timetable and budget." }].
              map((role) =>
              <motion.div key={role.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{role.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{role.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Process</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">A professional placement journey</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                  We manage each staffing request with care, professionalism and clear communication from start to finish.
                </motion.p>
                <motion.div variants={fadeUp} className="space-y-8">
                  {[
                  { step: "01", title: "Understand the requirement", desc: "We discuss your needs, role specification and setting context." },
                  { step: "02", title: "Identify suitable professionals", desc: "We match candidates with the skills, experience and approach you need." },
                  { step: "03", title: "Appropriate verification", desc: "We complete relevant checks and safeguarding processes in line with the role." },
                  { step: "04", title: "Introduce and arrange support", desc: "We facilitate introductions and confirm arrangements with your setting." },
                  { step: "05", title: "Ongoing communication", desc: "We maintain contact to ensure the placement continues to work well." }].
                  map((item) =>
                  <div key={item.step} className="flex gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 border-2 border-secondary/30">
                        <span className="font-heading font-bold text-secondary">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-primary mb-1">{item.title}</h3>
                        <p className="text-surface-600">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative">

                <img src={schoolImageUrl} alt="Professional school staffing" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Safeguarding Note */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.div variants={fadeUp} className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold mb-4">Safer recruitment and safeguarding</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                We take safer recruitment seriously. The checks and verification processes we carry out are appropriate to each role and aligned with safeguarding expectations for education settings.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/safeguarding" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-white transition-colors">
                  Read our safeguarding approach <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Two Pathways */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">How can we help you?</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8">

              <motion.div variants={fadeUp} className="bg-white rounded-xl p-10 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow">
                <School className="w-12 h-12 text-secondary mb-6" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">I need education staff</h3>
                <p className="text-surface-600 mb-6 leading-relaxed">Request Teaching Assistants, SEN support, Cover Supervisors or tutors for your school or college.</p>
                <Link to="/for-schools-colleges" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Request Staff <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-10 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow">
                <Briefcase className="w-12 h-12 text-secondary mb-6" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">I want to work with you</h3>
                <p className="text-surface-600 mb-6 leading-relaxed">Join our network of tutors, teaching assistants and education professionals.</p>
                <Link to="/join-us" className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                  Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Request education staffing support</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                Tell us about your staffing requirement and we will respond promptly.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Request Staffing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>);

}