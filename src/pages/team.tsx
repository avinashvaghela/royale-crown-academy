import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SEOHead from '../components/SEOHead';
import { User, ArrowRight, Award, BookOpen, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function OurTeam() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');

  const placeholderProfiles = [
  {
    name: "[Name placeholder]",
    role: "[Role placeholder — e.g. Founder / Director of Education]",
    subjects: "[Subjects or specialisms placeholder]",
    experience: "[Relevant experience placeholder]",
    qualifications: "[Qualifications placeholder — to be verified before publication]",
    senExperience: "[SEN experience placeholder]",
    approach: "[Approach to learning placeholder]"
  },
  {
    name: "[Name placeholder]",
    role: "[Role placeholder — e.g. SEN Lead]",
    subjects: "[Subjects or specialisms placeholder]",
    experience: "[Relevant experience placeholder]",
    qualifications: "[Qualifications placeholder — to be verified before publication]",
    senExperience: "[SEN experience placeholder]",
    approach: "[Approach to learning placeholder]"
  },
  {
    name: "[Name placeholder]",
    role: "[Role placeholder — e.g. Lead Tutor]",
    subjects: "[Subjects or specialisms placeholder]",
    experience: "[Relevant experience placeholder]",
    qualifications: "[Qualifications placeholder — to be verified before publication]",
    senExperience: "[SEN experience placeholder]",
    approach: "[Approach to learning placeholder]"
  }];


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title="Our Team | Tutors & Education Professionals"
        description="Meet the education professionals at Royale Crown Academy Ltd. Editable team profiles for tutors, SEN specialists and support staff."
        canonical="https://royalecrown.serenitiesai.com/team" />

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

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Team</motion.span>
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-6 mb-6">The People Behind Royale Crown Academy</motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Dedicated education professionals committed to personalised support, inclusion and learner progress.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Team Intro */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Experienced professionals, carefully selected</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 leading-relaxed">
                Our team includes tutors, SEN specialists, teaching assistants and education support professionals. Each profile below is an editable placeholder until verified information is provided by the company.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Team Profiles */}
        <section className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {placeholderProfiles.map((profile, index) =>
              <motion.div key={index} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-sm border border-surface-100 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-12 h-12 text-primary/50" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-1">{profile.name}</h3>
                    <p className="text-secondary font-semibold mb-4">{profile.role}</p>
                    <div className="space-y-3 text-sm text-surface-600">
                      <div className="flex gap-3">
                        <BookOpen className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Subjects:</strong> {profile.subjects}</span>
                      </div>
                      <div className="flex gap-3">
                        <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Experience:</strong> {profile.experience}</span>
                      </div>
                      <div className="flex gap-3">
                        <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Qualifications:</strong> {profile.qualifications}</span>
                      </div>
                      <div className="flex gap-3">
                        <Heart className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>SEN Experience:</strong> {profile.senExperience}</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-surface-100">
                      <p className="text-surface-600 italic text-sm">"{profile.approach}"</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">Join our team</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                We are always interested in hearing from talented tutors, teaching assistants and education professionals.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/join-us" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all">
                  Apply to Join Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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