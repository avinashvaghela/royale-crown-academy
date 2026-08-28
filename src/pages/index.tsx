import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import LogoWatermark from '../components/LogoWatermark';
import SEOHead from '../components/SEOHead';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Users, Award, Shield, ArrowRight, Phone, ChevronRight, Star, Heart, School, Briefcase, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const heroImageUrl = serenities.files.url('f325f7281e4fb37f2576f08ff2a51ada');
  const tutoringImageUrl = serenities.files.url('9d4afc54e4fe0660f8d55bba1f7f3634');
  const senImageUrl = serenities.files.url('45a479344c0996e95fef0084456de99a');
  const schoolImageUrl = serenities.files.url('d8a52ffe130477f20c51a632ffc8d950');
  const professionalImageUrl = serenities.files.url('b1508abe1eb6618ff8eb1f79ee65e27f');
  const parentImageUrl = serenities.files.url('f34fc1b81df48676874b63a662a22911');
  const studyImageUrl = serenities.files.url('a2078dfe9c07ced21d031bfe2ea9a313');
  const senLearnerImageUrl = serenities.files.url('e5fee8507681ccff4b3c2fdabe10a248');

  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden" data-oid="/#o0">
      <SEOHead
        title="Royale Crown Academy | Personalised Education. Meaningful Progress."
        description="Specialist SEN support, personalised tutoring and education staffing services for learners, families, schools and colleges across the UK."
        canonical="https://royalecrown.serenitiesai.com/" data-oid="/#o1" />

      <Header data-oid="/#o2" />
      <main id="main-content" data-oid="/#o3">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary" aria-label="Welcome to Royale Crown Academy" data-oid="/#o4">
          <div className="absolute inset-0 z-0" data-oid="/#o5">
            <img src={heroImageUrl} alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 100%' }} data-oid="/#o6" />
            <div className="absolute inset-0 bg-primary/30" data-oid="/#o7" />
          </div>
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" data-oid="/#o8" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" data-oid="/#o9" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center" data-oid="/#o10">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8" data-oid="/#o11">

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-secondary/30 mb-8 mt-4" data-oid="/#o12" style={{ paddingTop: "10px", marginTop: "40px", marginBottom: "7px" }}>
                <Star className="w-4 h-4 text-secondary" data-oid="/#o13" />
                <span className="text-sm font-medium text-primary-foreground/90 tracking-wide" data-oid="/#o14">UK Education & Private Tuition</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8" data-oid="/#o15">

              Personalised Education.
              <br data-oid="/#o16" />
              <span className="text-secondary" data-oid="/#o17">Meaningful Progress.</span>
            </motion.h1>
            
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light" data-oid="/#o18">

Specialist SEN support, personalised tuition and education services for learners, families, schools, colleges and local authorities across the UK.
            </motion.p>
            
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-oid="/#o19">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30" data-oid="/#o20">

                Make an Enquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-oid="/#o21" />
              </Link>
              <Link
                to="/tutoring"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-primary-foreground font-semibold rounded-lg hover:bg-white/10 transition-all duration-300" data-oid="/#o22">

                Explore Our Services
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" data-oid="/#o23">

            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2" data-oid="/#o24">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-secondary rounded-full" data-oid="/#o25" />

            </div>
          </motion.div>
        </section>

        {/* Audience Pathways */}
        <section className="py-24 bg-background relative" data-oid="/#o26">
          <LogoWatermark data-oid="/#o27" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="/#o28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16" data-oid="/#o29">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o30">How Can We Help?</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o31">Education support designed around you</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 max-w-2xl mx-auto" data-oid="/#o32">We work with parents, schools, colleges, councils and education professionals to provide the right support for each situation.</motion.p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="/#o33">

              {[
              { icon: Heart, title: "Parents & Carers", desc: "Personalised tuition and learning support designed around each learner.", cta: "For Parents", link: "/for-parents", image: parentImageUrl },
              { icon: School, title: "Schools & Colleges", desc: "Flexible education services, tuition and staffing support for education settings.", cta: "For Schools & Colleges", link: "/for-schools-colleges", image: schoolImageUrl },
              { icon: Briefcase, title: "Councils & Local Authorities", desc: "Professional education and learner-support services for council requirements.", cta: "For Councils", link: "/for-councils", image: professionalImageUrl },
              { icon: Users, title: "Education Professionals", desc: "Opportunities for tutors, teachers and education professionals to work with us.", cta: "Join Our Team", link: "/join-us", image: professionalImageUrl }].
              map((pathway, index) =>
              <motion.div
                key={pathway.title}
                variants={fadeUp}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-100" data-oid="/#o34">

                  <div className="h-48 overflow-hidden" data-oid="/#o35">
                    <img src={pathway.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-oid="/#o36" />
                  </div>
                  <div className="p-8" data-oid="/#o37">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors" data-oid="/#o38">
                      <pathway.icon className="w-6 h-6 text-primary" data-oid="/#o39" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3" data-oid="/#o40">{pathway.title}</h3>
                    <p className="text-surface-600 mb-6 leading-relaxed" data-oid="/#o41">{pathway.desc}</p>
                    <Link to={pathway.link} className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors" data-oid="/#o42">
                      {pathway.cta} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-oid="/#o43" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-surface-50 relative overflow-hidden" data-oid="/#o44">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" data-oid="/#o45" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-oid="/#o46">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24" data-oid="/#o47">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer} data-oid="/#o48">

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o49">Our Services</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o50">Education support, built around the individual</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-8 leading-relaxed" data-oid="/#o51">
                  Every learner, school and organisation is different. We take time to understand what is needed and shape our support accordingly, from private tuition and SEN support to education staffing and academic intervention.
                </motion.p>
                <motion.div variants={fadeUp} data-oid="/#o52">
                  <Link to="/tutoring" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all" data-oid="/#o53">
                    Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-oid="/#o54" />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative" data-oid="/#o55">

                <img src={tutoringImageUrl} alt="Personalised tutoring session" className="rounded-2xl shadow-2xl w-full" data-oid="/#o56" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" data-oid="/#o57" />
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8" data-oid="/#o58">

              {[
              { icon: Heart, title: "SEN Support", desc: "Support shaped around each learner's needs, strengths and educational goals.", link: "/sen-support", image: senImageUrl },
              { icon: BookOpen, title: "Private Tuition", desc: "One-to-one and small-group tuition across subjects and academic stages.", link: "/tutoring", image: studyImageUrl },
              { icon: Users, title: "Education Staffing", desc: "Teaching assistants, SEN support professionals, cover supervisors and tutors for education settings.", link: "/education-staffing", image: professionalImageUrl }].
              map((service) =>
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-100" data-oid="/#o59">

                  <div className="h-56 overflow-hidden" data-oid="/#o60">
                    <img src={service.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-oid="/#o61" />
                  </div>
                  <div className="p-8" data-oid="/#o62">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors" data-oid="/#o63">
                      <service.icon className="w-6 h-6 text-primary" data-oid="/#o64" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3" data-oid="/#o65">{service.title}</h3>
                    <p className="text-surface-600 mb-6 leading-relaxed" data-oid="/#o66">{service.desc}</p>
                    <Link to={service.link} className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors" data-oid="/#o67">
                      Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-oid="/#o68" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* SEN Specialist Spotlight */}
        <section className="py-24 bg-background relative overflow-hidden" data-oid="/#o69a">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/[0.03] to-transparent" data-oid="/#o69b" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-oid="/#o69c">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-oid="/#o69d">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2 lg:order-1" data-oid="/#o69e">

                <div className="relative rounded-2xl overflow-hidden shadow-2xl" data-oid="/#o69f">
                  <img src={senImageUrl} alt="Specialist SEN support session" className="w-full h-auto object-cover" data-oid="/#o69g" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" data-oid="/#o69h" />
                </div>
                <div className="absolute -bottom-5 -right-5 w-28 h-28 border-2 border-secondary rounded-2xl -z-10" data-oid="/#o69i" />
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary/10 rounded-full blur-2xl" data-oid="/#o69j" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-1 lg:order-2" data-oid="/#o69k">

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o69l">Specialist Support</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o69m">SEN support designed around the individual</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-6 leading-relaxed" data-oid="/#o69n">
                  We work with learners with a wide range of additional needs, including autism, ADHD, dyslexia, dyscalculia and SEMH. Every session is shaped around the individual, taking time to understand their strengths, preferences and goals.
                </motion.p>
                <motion.ul variants={fadeUp} className="space-y-3 mb-8" data-oid="/#o69o">
                  {[
                  "One-to-one and small-group SEN support",
                  "Support shaped around each learner's strengths and needs",
                  "Experienced specialists who take time to understand",
                  "Close partnership with families, schools and settings",
                  "Support for autism, ADHD, dyslexia, dyscalculia and SEMH",
                  "Confidence-building and engagement-focused sessions",
                  "Online and in-person SEN support options",
                  "Regular progress review and plan adjustment"].
                  map((point, index) =>
                  <li key={index} className="flex items-start gap-3 text-surface-700" data-oid="/pages/HomePage.tsx#o0">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" data-oid="/pages/HomePage.tsx#o1" />
                      <span data-oid="/pages/HomePage.tsx#o2">{point}</span>
                    </li>
                  )}
                </motion.ul>
                <motion.div variants={fadeUp} data-oid="/#o69s">
                  <Link to="/sen-support" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all" data-oid="/#o69t">
                    Discover SEN Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-oid="/#o69u" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background" data-oid="/#o69">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="/#o70">
            <div className="grid lg:grid-cols-2 gap-16 items-center" data-oid="/#o71">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2 lg:order-1" data-oid="/#o72">

                <img src={schoolImageUrl} alt="Professional school environment" className="rounded-2xl shadow-2xl w-full" data-oid="/#o73" />
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl -z-10" data-oid="/#o74" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-1 lg:order-2" data-oid="/#o75">

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o76">Why Royale Crown Academy</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o77">A thoughtful approach to education support</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed" data-oid="/#o78">
                  We combine educational expertise with a genuine commitment to the people we work with. Our approach is collaborative, transparent and tailored to the needs of each learner or organisation.
                </motion.p>
                <div className="space-y-6" data-oid="/#o79">
                  {[
                  { icon: Heart, title: "Learner-centred approach", desc: "Every plan starts with understanding the individual and what they need." },
                  { icon: Shield, title: "Safeguarding-first mindset", desc: "We take safeguarding, safer recruitment and online safety seriously." },
                  { icon: Award, title: "Professional quality", desc: "Clear communication, structured support and ongoing review." },
                  { icon: Users, title: "Partnership with families and settings", desc: "We work closely with parents, schools, colleges and councils." }].
                  map((item, index) =>
                  <motion.div key={item.title} variants={fadeUp} className="flex gap-5 group" data-oid="/#o80">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors" data-oid="/#o81">
                        <item.icon className="w-6 h-6 text-primary" data-oid="/#o82" />
                      </div>
                      <div data-oid="/#o83">
                        <h3 className="font-heading text-xl font-bold text-primary mb-1" data-oid="/#o84">{item.title}</h3>
                        <p className="text-surface-600" data-oid="/#o85">{item.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" data-oid="/#o86">
          <div className="absolute inset-0 opacity-10" data-oid="/#o87">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C6A15B 0%, transparent 50%), radial-gradient(circle at 80% 80%, #C6A15B 0%, transparent 40%)' }} data-oid="/#o88" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-oid="/#o89">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16" data-oid="/#o90">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o91">How It Works</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6" data-oid="/#o92">Four simple steps to personalised support</motion.h2>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-4 gap-8" data-oid="/#o93">

              {[
              { step: "01", title: "Tell us what you need", desc: "Share your learner, school or organisation's requirements with us." },
              { step: "02", title: "Let's talk", desc: "We'll discuss your circumstances and what support may be appropriate." },
              { step: "03", title: "Build the right plan", desc: "We'll identify an approach matched to your requirements." },
              { step: "04", title: "Begin learning", desc: "Once arrangements are confirmed, support can begin." }].
              map((item, index) =>
              <motion.div key={item.step} variants={fadeUp} className="relative text-center group" data-oid="/#o94">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border-2 border-secondary/50 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors" data-oid="/#o95">
                    <span className="font-heading text-2xl font-bold text-secondary" data-oid="/#o96">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3" data-oid="/#o97">{item.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed" data-oid="/#o98">{item.desc}</p>
                  {index < 3 &&
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" data-oid="/#o99" />
                }
                </motion.div>
              )}
            </motion.div>
            
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16" data-oid="/#o100">

              <Link to="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all" data-oid="/#o101">
                See Full Process <ArrowRight className="w-5 h-5" data-oid="/#o102" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Commitment to Quality */}
        <section className="py-24 bg-surface-50" data-oid="/#o103">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-oid="/#o104">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer} data-oid="/#o105">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o106">Our Commitment to Quality</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-8" data-oid="/#o107">How we approach every learner and organisation</motion.h2>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-10 md:p-16 shadow-sm border border-surface-100" data-oid="/#o108">
                <div className="grid sm:grid-cols-2 gap-8 text-left" data-oid="/#o111">
                  {[
                  { title: "Learner-centred support", desc: "Every plan starts with understanding the individual and what they need." },
                  { title: "Professional service", desc: "Clear communication, structured support and reliable follow-through." },
                  { title: "Clear communication", desc: "We keep parents, schools and settings informed at every stage." },
                  { title: "Individualised approach", desc: "No two learners are the same, so our support is tailored accordingly." }].
                  map((item, index) =>
                  <div key={index} className="flex gap-4" data-oid="/pages/HomePage.tsx#o3">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0" data-oid="/pages/HomePage.tsx#o4">
                        <Star className="w-5 h-5 text-secondary" data-oid="/pages/HomePage.tsx#o5" />
                      </div>
                      <div data-oid="/pages/HomePage.tsx#o6">
                        <h3 className="font-heading text-lg font-bold text-primary mb-1" data-oid="/pages/HomePage.tsx#o7">{item.title}</h3>
                        <p className="text-surface-600" data-oid="/pages/HomePage.tsx#o8">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-24 bg-background" data-oid="/#o114">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="/#o115">
            <div className="grid lg:grid-cols-2 gap-16 items-start" data-oid="/#o116">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer} data-oid="/#o117">

                <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o118">FAQ</motion.span>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o119">Questions we are often asked</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-8 leading-relaxed" data-oid="/#o120">
                  From tuition enquiries to SEN support and staffing requests, here are some of the questions families and schools ask us most often.
                </motion.p>
                <motion.div variants={fadeUp} data-oid="/#o121">
                  <Link to="/faq" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors" data-oid="/#o122">
                    View all FAQs <ArrowRight className="w-4 h-4" data-oid="/#o123" />
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4" data-oid="/#o124">

                {[
                { q: "How do I arrange tuition for my child?", a: "Complete our parent enquiry form or call us. We will arrange a consultation to discuss your child's needs and recommend a suitable approach." },
                { q: "Do you work directly with schools?", a: "Yes. We partner with schools and colleges to provide tuition, SEN support and education staffing solutions." },
                { q: "What areas of SEN support do you offer?", a: "We provide personalised learning support tailored to individual needs, including support for learners with autism, ADHD, dyslexia, dyscalculia, SEMH and additional learning needs." },
                { q: "How does education staffing work?", a: "We discuss your requirements, identify suitable professionals, complete appropriate verification processes and support the arrangement on an ongoing basis." }].
                map((faq, index) =>
                <motion.div key={index} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-sm border border-surface-100" data-oid="/#o125">
                    <h3 className="font-heading text-lg font-bold text-primary mb-2" data-oid="/#o126">{faq.q}</h3>
                    <p className="text-surface-600 leading-relaxed" data-oid="/#o127">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" data-oid="/#o128">
          <div className="absolute inset-0 opacity-20" data-oid="/#o129">
            <img src={heroImageUrl} alt="" className="w-full h-full object-cover" data-oid="/#o130" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" data-oid="/#o131" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative" data-oid="/#o132">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer} data-oid="/#o133">

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-oid="/#o134">Ready to discuss your requirements?</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-primary-foreground/80 mb-10 leading-relaxed" data-oid="/#o135">
                Whether you are a parent, school leader or education professional, we would be pleased to hear from you.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="/#o136">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20" data-oid="/#o137">
                  Make an Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-oid="/#o138" />
                </Link>
                <Link to="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-primary-foreground font-semibold rounded-lg hover:bg-white/10 transition-all" data-oid="/#o139">
                  Book a Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer data-oid="/#o140" />
      <CookieConsent data-oid="/#o141" />
    </div>);

}