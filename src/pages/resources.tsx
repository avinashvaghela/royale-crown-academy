import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { BookOpen, ArrowRight, Calendar, User, Tag } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function Resources() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('a2078dfe9c07ced21d031bfe2ea9a313');

  const categories = [
  "SEN Support",
  "Tutoring",
  "Parent Guides",
  "School Resources",
  "Learning Strategies",
  "Exam Preparation",
  "Education Insights"];


  const articles = [
  {
    title: "Understanding SEN Support: A Guide for Parents",
    category: "SEN Support",
    excerpt: "An introduction to SEN support, person-centred planning and how to choose the right provision for your child.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  },
  {
    title: "How to Support Your Child with GCSE Maths",
    category: "Tutoring",
    excerpt: "Practical strategies for building confidence and understanding in GCSE maths without adding pressure.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  },
  {
    title: "What Schools Should Know About Education Staffing",
    category: "School Resources",
    excerpt: "Key considerations for schools when requesting teaching assistants, cover supervisors and SEN support staff.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  },
  {
    title: "Effective Revision Techniques for Exam Success",
    category: "Exam Preparation",
    excerpt: "Research-informed revision strategies to help learners prepare more effectively for exams.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  },
  {
    title: "Building Confidence in Learners with Additional Needs",
    category: "Learning Strategies",
    excerpt: "Approaches that help learners with additional needs feel capable, motivated and engaged.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  },
  {
    title: "A Parent's Guide to Choosing a Tutor",
    category: "Parent Guides",
    excerpt: "What to look for, what to ask and how to find a tutor who is right for your child.",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    updated: "[Updated placeholder]"
  }];


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Resources | Education Insights, Guides & Articles"
        description="Explore our UK education resource centre for SEN support, tutoring tips, parent guides, school resources and exam preparation."
        canonical="https://royalecrown.serenitiesai.com/resources" />

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

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Resources</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">Education Insights & Guides</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Practical resources for parents, learners, schools and education professionals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3">

              {categories.map((category) =>
              <motion.button
                key={category}
                variants={fadeUp}
                className="px-5 py-2.5 rounded-full bg-white border border-surface-200 text-surface-700 font-medium hover:border-secondary hover:text-secondary transition-colors">

                  {category}
                </motion.button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {articles.map((article, index) =>
              <motion.article key={index} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-sm border border-surface-100 hover:shadow-lg transition-shadow group">
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary/30" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-semibold text-secondary">{article.category}</span>
                    </div>
                    <h2 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-surface-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-surface-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Link to="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Can't find what you are looking for?</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed">
                Our team is happy to answer questions and point you towards the right support.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Ask a Question <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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