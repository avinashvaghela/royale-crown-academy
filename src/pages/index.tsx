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
  const heroImageUrl = serenities.files.url('e190c6f1c9842cb3e855b088035f48fc');
  const tutoringImageUrl = serenities.files.url('9d4afc54e4fe0660f8d55bba1f7f3634');
  const senImageUrl = serenities.files.url('45a479344c0996e95fef0084456de99a');
  const schoolImageUrl = serenities.files.url('d8a52ffe130477f20c51a632ffc8d950');
  const professionalImageUrl = serenities.files.url('b1508abe1eb6618ff8eb1f79ee65e27f');
  const parentImageUrl = serenities.files.url('f34fc1b81df48676874b63a662a22911');
  const studyImageUrl = serenities.files.url('a2078dfe9c07ced21d031bfe2ea9a313');

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
            <img src={heroImageUrl} alt="" className="w-full h-full object-cover opacity-40" data-oid="/#o6" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-[#0B1D3A]/90" data-oid="/#o7" />
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
                <span className="text-sm font-medium text-primary-foreground/90 tracking-wide" data-oid="/#o14">Premium UK Education Services</span>
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

              Specialist SEN support, personalised tutoring and education services designed around the individual needs of learners, families and educational settings.
            </motion.p>
            
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-oid="/#o19">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30" data-oid="/#o20">

                Talk to Us
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
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o31">Support designed around you</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600 max-w-2xl mx-auto" data-oid="/#o32">Whether you are a parent, school leader or education professional, we have a pathway for you.</motion.p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8" data-oid="/#o33">

              {[
              { icon: Heart, title: "For Families", desc: "Personalised tuition and SEN support for children and young people.", cta: "Find Support", link: "/for-parents", image: parentImageUrl },
              { icon: School, title: "For Schools & Colleges", desc: "Flexible education support and staffing solutions for your setting.", cta: "Work With Us", link: "/for-schools-colleges", image: schoolImageUrl },
              { icon: Briefcase, title: "For Education Professionals", desc: "Opportunities to work with a growing UK education organisation.", cta: "Get in Touch", link: "/join-us", image: professionalImageUrl }].
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
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o50">A complete education support ecosystem</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-8 leading-relaxed" data-oid="/#o51">
                  From specialist SEN support to premium private tuition and professional education staffing, we provide integrated services that put the learner first.
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
              { icon: Heart, title: "SEN Support", desc: "Individualised support designed around learning needs, confidence and educational goals.", link: "/sen-support", image: senImageUrl },
              { icon: BookOpen, title: "Personalised Tutoring", desc: "One-to-one and small-group tuition across key subjects and academic stages.", link: "/tutoring", image: studyImageUrl },
              { icon: Users, title: "Education Staffing", desc: "Teaching Assistants, SEN support professionals, Cover Supervisors and education professionals.", link: "/education-staffing", image: professionalImageUrl }].
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
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6" data-oid="/#o77">Built on trust, personalisation and professional standards</motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-surface-600 mb-10 leading-relaxed" data-oid="/#o78">
                  We combine educational expertise with a genuine commitment to every learner's progress. Our approach is collaborative, transparent and tailored to the people we support.
                </motion.p>
                <div className="space-y-6" data-oid="/#o79">
                  {[
                  { icon: Heart, title: "Learner-centred approach", desc: "Every plan starts with understanding the individual." },
                  { icon: Shield, title: "Safeguarding-first mindset", desc: "We take safeguarding, safer recruitment and online safety seriously." },
                  { icon: Award, title: "Professional quality", desc: "Clear communication, structured support and ongoing review." },
                  { icon: Users, title: "Partnership with families and settings", desc: "We work closely with parents, schools and colleges." }].
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
              { step: "01", title: "Tell us what you need", desc: "Share your requirements through our simple enquiry form or by phone." },
              { step: "02", title: "Consultation", desc: "We listen, ask questions and understand the learner or setting." },
              { step: "03", title: "Personalised plan", desc: "We propose a tailored approach matched to your goals." },
              { step: "04", title: "Ongoing support", desc: "Regular communication, review and adjustment as needed." }].
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

        {/* Testimonials Placeholder */}
        <section className="py-24 bg-surface-50" data-oid="/#o103">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-oid="/#o104">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer} data-oid="/#o105">

              <motion.span variants={fadeUp} className="text-secondary font-semibold tracking-wider uppercase text-sm" data-oid="/#o106">Testimonials</motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-8" data-oid="/#o107">What families and schools say</motion.h2>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-10 md:p-16 shadow-sm border border-surface-100" data-oid="/#o108">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-8" data-oid="/#o109">
                  <Star className="w-8 h-8 text-secondary" data-oid="/#o110" />
                </div>
                <p className="text-xl md:text-2xl text-surface-600 italic leading-relaxed mb-8" data-oid="/#o111">
                  "[Editable placeholder: A warm testimonial from a parent, school or education professional will appear here once verified feedback has been provided.]"
                </p>
                <div className="text-primary font-semibold" data-oid="/#o112">[Name placeholder]</div>
                <div className="text-surface-500 text-sm" data-oid="/#o113">[Role / Relationship placeholder]</div>
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
                  Talk to Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-oid="/#o138" />
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