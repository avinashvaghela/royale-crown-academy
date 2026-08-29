import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { MessageCircle, ClipboardList, FileText, RefreshCw, ArrowRight, Heart, School } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  const parentSteps = [
    { icon: MessageCircle, title: "Make an enquiry", desc: "Contact us by phone or through our parent enquiry form." },
    { icon: ClipboardList, title: "Understand the learner's needs", desc: "We listen to your concerns, goals and any information you wish to share." },
    { icon: FileText, title: "Create a suitable support approach", desc: "We propose a personalised plan tailored to your child." },
    { icon: Heart, title: "Begin support", desc: "Tuition or SEN support begins with clear expectations in place." },
    { icon: RefreshCw, title: "Review progress", desc: "We check in regularly and adjust the approach as needed." }
  ];

  const schoolSteps = [
    { icon: MessageCircle, title: "Tell us your requirements", desc: "Share details about the support or staffing you need." },
    { icon: ClipboardList, title: "Discuss the provision", desc: "We explore options, timelines and how best to work with your setting." },
    { icon: FileText, title: "Identify appropriate support", desc: "We match the right tutor, teaching assistant or professional to your needs." },
    { icon: School, title: "Arrange delivery", desc: "We confirm arrangements, expectations and communication channels." },
    { icon: RefreshCw, title: "Maintain communication and review", desc: "We stay in touch and review how the support is working." }
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="How It Works | Our Process | Royale Crown Academy"
        description="Discover how Royale Crown Academy works with parents, schools and colleges to deliver personalised SEN support, tutoring and staffing."
        canonical="https://royalecrown.serenitiesai.com/how-it-works"
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
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">How It Works</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">A Simple, Supportive Process</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Whether you are a parent or a school leader, our process is designed to be clear, collaborative and focused on outcomes.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Parents Journey */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">For Parents & Carers</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Your child's support journey</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative"
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/50 via-secondary/30 to-transparent -translate-x-1/2" />
              {parentSteps.map((step, index) => (
                <motion.div key={step.title} variants={fadeUp} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-surface-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-lg border-4 border-background">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schools Journey */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">For Schools & Colleges</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Your education support journey</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-5 gap-6"
            >
              {schoolSteps.map((step, index) => (
                <motion.div key={step.title} variants={fadeUp} className="relative text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white border-2 border-secondary/30 flex items-center justify-center mb-5 shadow-sm group-hover:bg-secondary/10 transition-colors">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-sm font-bold text-secondary mb-2">Step {index + 1}</div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to start the conversation?</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Whether you are a parent or a school leader, the first step is simply to get in touch.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all">
                  Make an Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
