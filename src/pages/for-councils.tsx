import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Building2, Heart, Users, BookOpen, Target, Briefcase, ArrowRight, Shield } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function ForCouncils() {
  const prefersReducedMotion = useReducedMotion();
  const councilImageUrl = serenities.files.url('830c9fa38dff96866d6c64aad56a496d');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Councils & Local Authorities | Education Services"
        description="Professional education services for UK councils and local authorities, including SEN support, specialist tuition, intervention and education staffing."
        canonical="https://royalecrown.serenitiesai.com/for-councils" />

      <Header />
      <main id="main-content">
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={councilImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">For Public Sector</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Education Services for Councils & Local Authorities</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Flexible, accountable education support designed around the requirements of local authorities, commissioning teams and SEND services.
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
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Services</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">How we support local authorities</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: BookOpen, title: "Tuition Provision", desc: "One-to-one and small-group tuition across key subjects and stages." },
              { icon: Heart, title: "SEN Support", desc: "Specialist educational support for learners with additional needs." },
              { icon: Target, title: "Educational Intervention", desc: "Targeted catch-up programmes and academic intervention." },
              { icon: Users, title: "Tutor Supply", desc: "Subject specialists available for local authority tuition programmes." },
              { icon: Briefcase, title: "Education Staffing", desc: "Teaching assistants, SEN support staff and other professionals." },
              { icon: Building2, title: "Bespoke Programmes", desc: "Programmes shaped around local priorities and commissioning needs." }].
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

        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Partnership</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Professional, accountable partnership</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed">
                  <p>
                    We approach every local authority engagement with professionalism, transparency and a clear focus on learner outcomes.
                  </p>
                  <p>
                    Our team is happy to discuss service-level arrangements, reporting requirements and safeguarding expectations. We understand the importance of clear communication with commissioning teams.
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 space-y-3">
                  {[
                  "Clear communication with commissioning teams",
                  "Structured service agreements and reporting",
                  "Safeguarding and safer recruitment processes",
                  "Flexible delivery models to suit local needs"].
                  map((item, index) =>
                  <div key={index} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-secondary" />
                      <span>{item}</span>
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

                <img src={councilImageUrl} alt="Professional council partnership" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">Discuss a council requirement</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Our team is ready to explore how Royale Crown Academy can support your local education provision.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all">
                  Discuss a Council Requirement <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-primary-foreground font-semibold rounded-lg hover:bg-white/10 transition-all">
                  Submit an Enquiry
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