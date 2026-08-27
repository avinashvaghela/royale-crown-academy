import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { BookOpen, Calculator, FlaskConical, Globe, Monitor, History, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function Subjects() {
  const prefersReducedMotion = useReducedMotion();
  const studyImageUrl = serenities.files.url('a2078dfe9c07ced21d031bfe2ea9a313');

  const subjectGroups = [
  {
    category: "Core Subjects",
    icon: BookOpen,
    subjects: [
    { name: "English", levels: "Primary, GCSE, A-Level where offered" },
    { name: "Maths", levels: "Primary, GCSE, A-Level where offered" },
    { name: "Science", levels: "Primary, GCSE, A-Level where offered" }]

  },
  {
    category: "Sciences",
    icon: FlaskConical,
    subjects: [
    { name: "Biology", levels: "GCSE, A-Level where offered" },
    { name: "Chemistry", levels: "GCSE, A-Level where offered" },
    { name: "Physics", levels: "GCSE, A-Level where offered" }]

  },
  {
    category: "Humanities & Social Sciences",
    icon: History,
    subjects: [
    { name: "History", levels: "Primary, GCSE, A-Level where offered" },
    { name: "Geography", levels: "Primary, GCSE, A-Level where offered" },
    { name: "Religious Studies", levels: "GCSE, A-Level where offered" }]

  },
  {
    category: "Languages, Business & Computing",
    icon: Globe,
    subjects: [
    { name: "Modern Languages", levels: "GCSE, A-Level where offered" },
    { name: "Business Studies", levels: "GCSE, A-Level where offered" },
    { name: "Computing / IT", levels: "Primary, GCSE, A-Level where offered" }]

  }];


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Subjects | Private Tuition Across the UK Curriculum"
        description="Explore the subjects offered by Royale Crown Academy Ltd, including English, maths, science and more for primary, secondary and GCSE learners."
        canonical="https://royalecrown.serenitiesai.com/subjects" />

      <Header />
      <main id="main-content">
        <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={studyImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0B1D3A]/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Academic Subjects</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Subject Support Across the Curriculum</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                We offer personalised tuition and academic support in a wide range of subjects. If you cannot see what you need, please ask.
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
              className="grid gap-8 lg:grid-cols-2">

              {subjectGroups.map((group, groupIndex) =>
              <motion.div key={groupIndex} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-surface-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                      <group.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary">{group.category}</h2>
                  </div>
                  <div className="space-y-3">
                    {group.subjects.map((subject, i) =>
                  <div key={i} className="flex items-center justify-between rounded-lg border border-surface-100 bg-surface-50 p-4 hover:border-secondary/40 transition-colors">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-primary">{subject.name}</h3>
                          <p className="text-sm text-surface-600">{subject.levels}</p>
                        </div>
                        <Link to="/contact" className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                          Enquire
                        </Link>
                      </div>
                  )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-surface-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Cannot see the subject you need?</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                Our subject network is expanding. Contact us to discuss your requirements and we will let you know how we can help.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Ask Us About a Subject <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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