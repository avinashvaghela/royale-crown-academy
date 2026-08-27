import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { BookOpen, Calculator, FlaskConical, PenTool, GraduationCap, Users, Monitor, ArrowRight, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function Tutoring() {
  const prefersReducedMotion = useReducedMotion();
  const tutoringImageUrl = serenities.files.url('9d4afc54e4fe0660f8d55bba1f7f3634');
  const studyImageUrl = serenities.files.url('a2078dfe9c07ced21d031bfe2ea9a313');

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Private Tuition | Personalised Tutoring Across the UK"
        description="One-to-one and small-group tuition for primary, secondary, GCSE, English, maths, science and study skills."
        canonical="https://royalecrown.serenitiesai.com/tutoring" />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={tutoringImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Private Tuition</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Personalised Tutoring for Every Stage</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                One-to-one and small-group tuition across primary, secondary and GCSE subjects — tailored to the way your child learns best.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Levels */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Levels We Cover</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Support at every stage of learning</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
              { title: "Primary Tuition", desc: "Building strong foundations in literacy, numeracy and confidence." },
              { title: "Secondary Tuition", desc: "Subject support across Key Stage 3 to help learners stay on track." },
              { title: "GCSE Support", desc: "Focused support for GCSE preparation without promising specific grades." },
              { title: "A-Level & Further Education", desc: "Subject support for post-16 learners where offered." }].
              map((level) =>
              <motion.div key={level.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{level.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{level.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Subjects</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Core subjects and beyond</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-8 leading-relaxed">
                  We offer tuition across a wide range of subjects. If you cannot see what you need, please ask — we may still be able to help.
                </motion.p>
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                  {[
                  { icon: BookOpen, title: "English", desc: "Reading, writing, comprehension and literacy skills." },
                  { icon: Calculator, title: "Maths", desc: "Number, algebra, geometry, statistics and problem-solving." },
                  { icon: FlaskConical, title: "Science", desc: "Biology, chemistry, physics and combined science." },
                  { icon: PenTool, title: "Study Skills", desc: "Revision strategies, organisation and exam technique." }].
                  map((subject) =>
                  <div key={subject.title} className="bg-white rounded-lg p-5 border border-surface-100 hover:border-secondary/30 transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <subject.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-primary">{subject.title}</h3>
                      </div>
                      <p className="text-surface-600 text-sm">{subject.desc}</p>
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

                <img src={studyImageUrl} alt="Student studying with books" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tuition Formats */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Tuition Formats</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">Choose the approach that suits you</motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8">

              {[
              { icon: Users, title: "One-to-One Tuition", desc: "Fully personalised sessions focused on your child's specific needs and goals." },
              { icon: BookOpen, title: "Small-Group Tuition", desc: "Supportive group sessions with focused learning and peer interaction." },
              { icon: Monitor, title: "Online Tuition", desc: "Flexible remote sessions delivered through accessible online platforms." }].
              map((format) =>
              <motion.div key={format.title} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-surface-100 hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <format.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{format.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{format.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Exam Prep */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}>

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Exam Preparation</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">Building confidence for exams</motion.h2>
                <motion.div variants={fadeUp} className="space-y-5 text-lg text-primary-foreground/80 leading-relaxed">
                  <p>
                    Our exam preparation support focuses on understanding subject content, developing effective revision habits and building the confidence to perform well.
                  </p>
                  <p>
                    We do not promise specific grades or outcomes. Every learner progresses at their own pace, and our role is to provide structured, supportive tuition that helps them do their best.
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 space-y-3">
                  {["Revision planning", "Past paper practice", "Exam technique", "Managing exam anxiety"].map((item) =>
                  <div key={item} className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-secondary" />
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

                <img src={tutoringImageUrl} alt="Exam preparation tutoring" className="rounded-2xl shadow-2xl w-full" />
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Find the right tuition for your child</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                Tell us about your child's stage, subjects and learning needs. We will recommend a suitable approach.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Discuss Tuition <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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