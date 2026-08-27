import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { Target, Heart, Shield, Users, Award, ArrowRight, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function AboutUs() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');
  const classroomImageUrl = serenities.files.url('d8a52ffe130477f20c51a632ffc8d950');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="About Us | Royale Crown Academy"
        description="Learn about Royale Crown Academy Ltd's mission to provide personalised SEN support, tutoring and education staffing across the UK."
        canonical="https://royalecrown.serenitiesai.com/about" />

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

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">About Royale Crown Academy</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">A modern education organisation built around the learner</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                We believe every learner deserves support that recognises who they are, how they learn and what they need to make meaningful progress.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative">

                <img src={classroomImageUrl} alt="Professional classroom environment" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Who We Are</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Purpose-led education support</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5 text-lg text-surface-600 leading-relaxed">
                  <p>
                    Royale Crown Academy Ltd is a UK education organisation providing specialist SEN support, personalised tutoring and education staffing services. We work with children, young people, parents, schools and colleges to deliver support that is thoughtful, structured and tailored to individual needs.
                  </p>
                  <p>
                    Our focus is on building confidence, supporting progress and creating positive educational experiences. We do this through close collaboration with families and educational settings, professional standards and a genuine commitment to inclusion.
                  </p>
                  <p>
                    [Editable placeholder: Additional company history, founding principles or organisational background can be added here once verified by the company.]
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Values</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">What guides our work</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
              { icon: Heart, title: "Inclusion", desc: "We design support that respects difference and enables every learner to participate and progress." },
              { icon: Target, title: "Personalisation", desc: "No two learners are the same. We tailor our approach to individual goals, strengths and needs." },
              { icon: Sparkles, title: "Confidence", desc: "We help learners believe in their ability to learn, grow and achieve on their own terms." },
              { icon: Shield, title: "Safeguarding", desc: "The safety and wellbeing of learners is central to everything we do." },
              { icon: Users, title: "Partnership", desc: "We work openly with parents, carers, schools and colleges to achieve the best outcomes." },
              { icon: Award, title: "Professionalism", desc: "Clear communication, reliable service and high standards define our work." }].
              map((value) =>
              <motion.div key={value.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Who We Support</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">Support for the whole education community</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
              { title: "Parents & Carers", desc: "Personalised tuition and SEN support for your child." },
              { title: "Learners", desc: "One-to-one and small-group support that builds confidence." },
              { title: "Schools & Colleges", desc: "Flexible staffing, tuition and SEN provision for your setting." },
              { title: "Education Professionals", desc: "Opportunities to join a growing UK education organisation." }].
              map((audience) =>
              <motion.div key={audience.title} variants={fadeUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <h3 className="font-heading text-xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{audience.desc}</p>
                </motion.div>
              )}
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
                className="order-2 lg:order-1">

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Approach</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Thoughtful, structured and collaborative</motion.h2>
                <motion.div variants={fadeUp} className="space-y-6 text-lg text-surface-600 leading-relaxed">
                  <p>
                    We begin by listening. Every engagement starts with understanding the learner, the family or the setting. From there, we build a support plan that is realistic, measurable and aligned with your goals.
                  </p>
                  <p>
                    Our tutors and education professionals are selected with care. We look for people who combine subject knowledge with empathy, patience and the ability to adapt their approach to different learners.
                  </p>
                  <p>
                    Communication is central to our work. We keep parents, schools and colleges informed, and we regularly review progress to make sure support remains effective.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-1 lg:order-2">

                <img src={heroImageUrl} alt="Education support environment" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
            </div>
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Want to learn more about us?</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                We would be pleased to discuss how Royale Crown Academy can support your family, school or college.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
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