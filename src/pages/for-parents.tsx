import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Heart, BookOpen, Users, Monitor, Shield, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function ForParents() {
  const prefersReducedMotion = useReducedMotion();
  const parentImageUrl = serenities.files.url('f34fc1b81df48676874b63a662a22911');
  const tutoringImageUrl = serenities.files.url('9d4afc54e4fe0660f8d55bba1f7f3634');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="For Parents & Carers | Personalised Tuition & SEN Support"
        description="Personalised tuition, SEN support and academic guidance for children and young people across the UK."
        canonical="https://royalecrown.serenitiesai.com/for-parents" />

      <Header />
      <main id="main-content">
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={parentImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">For Families</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Support That Puts Your Child First</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Personalised tuition, SEN support and academic guidance designed around your child's individual needs, strengths and goals.
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

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">How We Help Families</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Support for every learner</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: BookOpen, title: "Private Tuition", desc: "One-to-one and small-group tuition across primary, secondary and GCSE subjects." },
              { icon: Heart, title: "SEN Support", desc: "Personalised support for learners with autism, ADHD, dyslexia, dyscalculia, SEMH and other needs." },
              { icon: Users, title: "One-to-One Support", desc: "Dedicated attention for learners who benefit from individualised teaching." },
              { icon: Monitor, title: "Online Tuition", desc: "Flexible remote sessions where appropriate, delivered safely and accessibly." },
              { icon: GraduationCap, title: "Study Skills", desc: "Revision strategies, organisation and exam preparation support." },
              { icon: Shield, title: "Safeguarding", desc: "All support is delivered with learner safety and wellbeing as the priority." }].
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
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative">

                <img src={tutoringImageUrl} alt="Personalised tutoring session" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Approach</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Understanding before teaching</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed">
                  <p>
                    We begin by listening to you and understanding your child. We discuss their strengths, interests, challenges and what you hope to achieve.
                  </p>
                  <p>
                    From there, we recommend a support approach that fits your family — whether that is weekly tuition, SEN support, exam preparation or a combination of services.
                  </p>
                  <p>
                    We keep you informed throughout and regularly review progress so that support stays relevant and effective.
                  </p>
                </motion.div>
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">Discuss your child's needs</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Tell us about your child and we will arrange a confidential, no-obligation conversation.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all">
                  Talk to Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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