import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Heart, Users, BookOpen, Monitor, Home, ArrowRight, Shield, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function SENSupport() {
  const prefersReducedMotion = useReducedMotion();
  const senImageUrl = serenities.files.url('45a479344c0996e95fef0084456de99a');
  const tutoringImageUrl = serenities.files.url('9d4afc54e4fe0660f8d55bba1f7f3634');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="SEN Support | Specialist SEND Support Across the UK"
        description="Personalised SEN and SEND support for learners with autism, ADHD, dyslexia, dyscalculia, SEMH and additional learning needs."
        canonical="https://royalecrown.serenitiesai.com/sen-support"
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={senImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Specialist Support</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">SEN Support Designed Around the Learner</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Personalised SEND support that builds confidence, supports engagement and helps learners make progress in ways that work for them.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Approach</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Support that starts with understanding</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed">
                  <p>
                    We provide personalised SEN support for children and young people with a wide range of learning needs. Our approach is respectful, person-centred and focused on what each learner can achieve.
                  </p>
                  <p>
                    We do not diagnose conditions or make medical claims. Instead, we work with the information shared by families, schools and other professionals to create support that is appropriate, practical and responsive.
                  </p>
                  <p>
                    Every learner is different. We take time to understand individual strengths, preferences and challenges before designing a support plan.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <img src={senImageUrl} alt="Supportive one-to-one SEN learning" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Areas of Support</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Support tailored to a wide range of needs</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 max-w-3xl mx-auto">
                We support learners with various additional learning needs. All support is planned around the individual, not the label.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { title: "Autism / ASC", desc: "Structured, predictable support that respects sensory and communication preferences." },
                { title: "ADHD", desc: "Engaging approaches that support focus, organisation and self-regulation." },
                { title: "Dyslexia", desc: "Literacy support that builds confidence with reading, writing and spelling." },
                { title: "Dyscalculia", desc: "Maths support that makes numbers and concepts more accessible." },
                { title: "SEMH", desc: "Support for social, emotional and mental health needs in a calm, consistent environment." },
                { title: "Learning Difficulties", desc: "Patient, step-by-step support matched to the learner's pace." },
                { title: "Additional Learning Needs", desc: "Flexible provision for learners who need something different from standard classroom support." },
                { title: "School Reintegration", desc: "Gentle, structured support to help learners return to school or college where appropriate." },
                { title: "Confidence & Engagement", desc: "Support that helps learners feel safe, capable and willing to participate." }
              ].map((area) => (
                <motion.div key={area.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{area.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Support Formats */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2 lg:order-1"
              >
                <img src={tutoringImageUrl} alt="Personalised learning session" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-1 lg:order-2"
              >
                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">How We Support</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Flexible support formats</motion.h2>
                <motion.div variants={fadeUp} className="space-y-6">
                  {[
                    { icon: Users, title: "One-to-one support", desc: "Dedicated attention for learners who benefit from individualised support." },
                    { icon: BookOpen, title: "Small-group support", desc: "Structured group sessions that encourage interaction and peer learning." },
                    { icon: Monitor, title: "Online support", desc: "Remote sessions where appropriate, using accessible tools and approaches." },
                    { icon: Home, title: "In-person support", desc: "Face-to-face support in suitable locations, including schools and homes where agreed." }
                  ].map((format) => (
                    <div key={format.title} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <format.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-primary">{format.title}</h3>
                        <p className="text-surface-600">{format.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
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
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold mb-4">Safeguarding is at the heart of our SEN support</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                We take learner wellbeing seriously. All SEN support is delivered with appropriate safeguarding awareness, clear communication and respect for each learner's dignity.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/safeguarding" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-white transition-colors">
                  Read our safeguarding commitment <ArrowRight className="w-4 h-4" />
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
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Discuss your child's support needs</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                Tell us about your child and we will arrange a confidential, no-obligation conversation about how we can help.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
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
