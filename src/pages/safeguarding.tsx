import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Shield, Users, FileCheck, GraduationCap, AlertTriangle, Monitor, Phone, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function Safeguarding() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Safeguarding | Royale Crown Academy"
        description="Our safeguarding commitment to learners, families, schools and colleges. Safer recruitment, training and reporting concerns."
        canonical="https://royalecrown.serenitiesai.com/safeguarding" />

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
              variants={staggerContainer}>

              <motion.div variants={fadeUp} className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Safeguarding Comes First</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                The safety, wellbeing and dignity of every learner is central to our work.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Commitment</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">A safeguarding-first culture</motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed text-left">
                <p>
                  Royale Crown Academy Ltd is committed to safeguarding and promoting the welfare of children, young people and vulnerable learners. We expect all staff, tutors, contractors and volunteers to share this commitment.
                </p>
                <p>
                  We take a proactive approach to safeguarding in every aspect of our work — from recruitment and training to the delivery of tuition, SEN support and staffing services.
                </p>
                <p>
                  [Editable placeholder: The company's full safeguarding policy, Designated Safeguarding Lead details and local authority reporting procedures can be inserted here once verified.]
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Safeguarding Principles</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">How we keep learners safe</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: Users, title: "Safer Recruitment", desc: "We follow robust recruitment and verification processes appropriate to each role." },
              { icon: FileCheck, title: "Appropriate Checks", desc: "Relevant checks are completed in line with the responsibilities of the position." },
              { icon: GraduationCap, title: "Safeguarding Training", desc: "Staff and professionals receive safeguarding awareness training and updates." },
              { icon: Monitor, title: "Online Safety", desc: "Online sessions are conducted safely, with appropriate tools, supervision and communication." },
              { icon: AlertTriangle, title: "Reporting Concerns", desc: "Clear procedures for raising and responding to safeguarding concerns." },
              { icon: Shield, title: "Culture of Vigilance", desc: "We encourage a proactive, open and questioning approach to safeguarding." }].
              map((principle) =>
              <motion.div key={principle.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{principle.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{principle.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* DSL Placeholder */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.div variants={fadeUp} className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold mb-4">Safeguarding Contact</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                If you have a safeguarding concern, please contact our Designated Safeguarding Lead or use the details below.
              </motion.p>
              <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <p className="font-semibold text-lg mb-2">Designated Safeguarding Lead</p>
                <p className="text-primary-foreground/80 mb-1">[Name placeholder]</p>
                <p className="text-primary-foreground/80 mb-1">[Email placeholder]</p>
                <p className="text-primary-foreground/80">[Telephone placeholder]</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Reporting */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Reporting a concern</motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed">
                <p>
                  If you believe a child or young person is at immediate risk, please contact the police on 999 or your local authority children's services team.
                </p>
                <p>
                  For non-urgent concerns relating to Royale Crown Academy services, please contact us using the safeguarding details above. We will respond in line with our safeguarding procedures.
                </p>
                <p>
                  [Editable placeholder: Additional safeguarding policy links, local authority contacts and out-of-hours procedures can be added here once verified.]
                </p>
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Questions about safeguarding?</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                We are happy to discuss our safeguarding approach with parents, schools and education professionals.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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