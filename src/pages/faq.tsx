import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(null);
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  const faqs = [
  {
    category: "Tutoring",
    question: "What subjects and levels do you tutor?",
    answer: "We offer tuition across primary, secondary and GCSE subjects, including English, maths, science and study skills. We also support A-Level and further education learners where appropriate. If you cannot see the subject you need, please ask."
  },
  {
    category: "SEN Support",
    question: "What areas of SEN support do you provide?",
    answer: "We provide personalised learning support for learners with a range of additional needs, including autism/ASC, ADHD, dyslexia, dyscalculia, SEMH and general learning difficulties. We do not diagnose conditions or make medical claims."
  },
  {
    category: "Pricing",
    question: "How much does tuition cost?",
    answer: "Pricing depends on the type of support, subject, level, duration and whether sessions are one-to-one or in a group. We provide personalised quotations after an initial discussion."
  },
  {
    category: "Online Tuition",
    question: "Do you offer online sessions?",
    answer: "Yes. We offer online tuition and SEN support where appropriate, using accessible platforms and safe online practices."
  },
  {
    category: "School Partnerships",
    question: "Can you work directly with our school or college?",
    answer: "Yes. We partner with schools and colleges to provide tuition, SEN support, catch-up programmes and education staffing. Please contact us to discuss your requirements."
  },
  {
    category: "Staffing",
    question: "How does education staffing work?",
    answer: "We discuss your requirement, identify suitable professionals, complete appropriate verification and safeguarding processes, arrange the placement and maintain ongoing communication."
  },
  {
    category: "Safeguarding",
    question: "What safeguarding measures do you have in place?",
    answer: "Safeguarding is central to our work. We follow safer recruitment practices, provide safeguarding training, conduct appropriate checks and have clear procedures for reporting concerns."
  },
  {
    category: "Enquiries",
    question: "How do I get started?",
    answer: "Simply complete our enquiry form or call us. We will arrange a consultation to understand your needs and recommend a suitable approach."
  },
  {
    category: "Cancellations",
    question: "What is your cancellation policy?",
    answer: "Our cancellation and rescheduling terms are set out in our service agreement. We ask for reasonable notice where possible and handle requests fairly."
  },
  {
    category: "Consultations",
    question: "Is the initial consultation free?",
    answer: "We offer an initial discussion to understand your needs and explain how we can help. Any charges for ongoing services will be clearly agreed in advance."
  },
  {
    category: "Councils & Local Authorities",
    question: "Do you work with councils and local authorities?",
    answer: "Yes. We provide education and learner-support services for councils and local authorities, including tuition, SEN support, intervention and education staffing. Please contact us to discuss your requirements."
  },
  {
    category: "Payments",
    question: "Does the website accept payment?",
    answer: "No. The website does not accept online payments. We will discuss fees and arrangements directly with you before any services begin."
  }];


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="FAQ | Frequently Asked Questions"
        description="Answers to common questions about SEN support, tutoring, education staffing, safeguarding, pricing and consultations."
        canonical="https://royalecrown.serenitiesai.com/faq" />

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
                <HelpCircle className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Frequently Asked Questions</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Answers for parents, schools, colleges and education professionals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4">

              {faqs.map((faq, index) =>
              <motion.div key={index} variants={fadeUp} className="bg-white rounded-xl border border-surface-100 shadow-sm overflow-hidden">
                  <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-50 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/30"
                  aria-expanded={openIndex === index}>

                    <div>
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{faq.category}</span>
                      <h2 className="font-heading text-lg font-bold text-primary mt-1 pr-4">{faq.question}</h2>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>

                        <div className="px-6 pb-6 text-surface-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </motion.div>
              )}
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Still have questions?</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                We would be happy to answer your questions directly.
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