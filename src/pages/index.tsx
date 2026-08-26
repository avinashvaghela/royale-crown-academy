import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import StepCard from '../components/StepCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const homeFAQs = [
{
  question: 'What age groups do you support?',
  answer: 'We work with children and young people across primary, secondary and college settings. Support is tailored to the individual, regardless of age or key stage.'
},
{
  question: 'Do you only work with learners who have a diagnosis?',
  answer: 'No. We support learners with identified needs, those awaiting assessment, and learners who simply need a little extra help to make progress. A formal diagnosis is not required to begin a conversation.'
},
{
  question: 'Can you support learners in school or college?',
  answer: 'Yes. We provide in-setting support, one-to-one tuition, small-group programmes and staffing solutions for schools and colleges, depending on the arrangement agreed.'
},
{
  question: 'How quickly can support begin?',
  answer: 'Timescales depend on the type of support, location and availability. After an initial consultation, we aim to propose a plan promptly and keep you informed throughout.'
}];


const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

function useCinematicReveal() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return visible;
}

export default function HomePage() {
  const heroVisible = useCinematicReveal();

  return (
    <PageLayout>
      <SEOHead
        title="Personalised Education & SEN Support Across the UK"
        description="Royale Crown Academy Ltd provides personalised SEN support, tutoring and education staffing services for learners, families, schools and colleges across the UK."
        path="/" />


      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#102A56]">
        <div className="absolute inset-0 opacity-10">
          <LogoWatermark className="h-[160%] w-[160%] -translate-x-1/4 -translate-y-1/4 text-[#FAF9F6]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#102A56] via-[#102A56]/95 to-[#0B1D3A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C6A15B]/10 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 py-24 lg:grid-cols-2 lg:py-0">
            <div className={`transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A15B]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">UK Education Specialists</span>
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-[#FAF9F6] sm:text-5xl lg:text-6xl xl:text-7xl">
                Personalised Education. Meaningful Progress.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FAF9F6]/85 sm:text-xl">
                Specialist SEN support, personalised tutoring and education services designed around the individual needs of learners, families and educational settings.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">

                  Talk to Us
                  <Icon name="arrowRight" className="h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#FAF9F6]/30 bg-transparent px-8 py-4 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">

                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative mx-auto max-w-md">
                <div className="aspect-square overflow-hidden rounded-2xl border border-[#FAF9F6]/10 bg-gradient-to-br from-[#0B1D3A] to-[#102A56] shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={logoUrl}
                      alt="Royale Crown Academy Ltd"
                      className="h-48 w-auto object-contain opacity-90 drop-shadow-2xl sm:h-56 lg:h-64" />

                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/80 to-transparent p-8">
                    <p className="text-center font-heading text-lg font-semibold text-[#FAF9F6]">Support tailored around every learner</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#C6A15B]/30 bg-[#FAF9F6] p-5 shadow-xl lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D7B2]/30 text-[#102A56]">
                      <Icon name="heart" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#102A56]">Learner-first approach</p>
                      <p className="text-xs text-[#243247]">Personalised plans</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 top-12 hidden rounded-2xl border border-[#C6A15B]/30 bg-[#FAF9F6] p-4 shadow-lg lg:block">
                  <p className="text-xs font-semibold text-[#102A56]">UK-wide support</p>
                  <p className="text-xs text-[#243247]">Online & in-person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="relative bg-[#FAF9F6] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Choose your pathway</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How can we support you?</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
            { icon: 'heart', title: 'For Families', desc: 'Personalised tuition and SEN support for children and young people.', cta: 'Find Support', href: '/for-parents' },
            { icon: 'school', title: 'For Schools & Colleges', desc: 'Flexible education support and staffing solutions.', cta: 'Work With Us', href: '/for-schools-colleges' },
            { icon: 'briefcase', title: 'For Education Professionals', desc: 'Opportunities to work with a growing education organisation.', cta: 'Get in Touch', href: '/join-us' }].
            map((item, index) =>
            <SectionReveal key={item.title} delay={index * 100}>
                <div className="group flex h-full flex-col rounded-xl border border-[#E5EAF1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-[#102A56]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[#243247]/80 leading-relaxed">{item.desc}</p>
                  <Link to={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A15B] transition-colors hover:text-[#102A56]">
                    {item.cta} <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="relative border-y border-[#E8D7B2]/30 bg-[#102A56] py-16 text-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div className="rounded-xl bg-[#FAF9F6]/10 p-6 backdrop-blur-sm">
                <p className="font-heading text-3xl font-bold">Learner-first</p>
                <p className="mt-2 text-sm text-[#FAF9F6]/80">Support built around individual strengths and goals</p>
              </div>
              <div className="rounded-xl bg-[#FAF9F6]/10 p-6 backdrop-blur-sm">
                <p className="font-heading text-3xl font-bold">UK-wide</p>
                <p className="mt-2 text-sm text-[#FAF9F6]/80">Supporting families, schools and colleges across the UK</p>
              </div>
              <div className="rounded-xl bg-[#FAF9F6]/10 p-6 backdrop-blur-sm">
                <p className="font-heading text-3xl font-bold">Safeguarding-led</p>
                <p className="mt-2 text-sm text-[#FAF9F6]/80">A culture of safety, transparency and accountability</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-[#FAF9F6] py-20 lg:py-28" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our services</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How we can help</h2>
              <p className="mt-4 text-lg text-[#243247]/80">
                We bring together specialist SEN support, personalised tutoring and professional education staffing under one trusted organisation.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SectionReveal delay={0}>
              <ServiceCard
                icon="brain"
                title="SEN Support"
                description="Personalised support for learners with autism, ADHD, dyslexia, dyscalculia, SEMH and additional learning needs."
                href="/sen-support"
                linkText="Explore SEN support" />

            </SectionReveal>
            <SectionReveal delay={75}>
              <ServiceCard
                icon="bookOpen"
                title="Personalised Tutoring"
                description="One-to-one and small-group tuition in English, maths, science, study skills and exam preparation."
                href="/tutoring"
                linkText="Explore tutoring" />

            </SectionReveal>
            <SectionReveal delay={150}>
              <ServiceCard
                icon="briefcase"
                title="Education Staffing"
                description="Teaching Assistants, SEN support staff, Cover Supervisors and education professionals for schools and colleges."
                href="/education-staffing"
                linkText="Explore staffing" />

            </SectionReveal>
            <SectionReveal delay={225}>
              <ServiceCard
                icon="school"
                title="For Schools & Colleges"
                description="Flexible SEN tuition, catch-up support, targeted tutoring and staffing solutions for educational settings."
                href="/for-schools-colleges"
                linkText="School support" />

            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-[#EEF4FA]/50 py-20 lg:py-28" id="how-it-works">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our process</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How it works</h2>
              <p className="mt-4 text-lg text-[#243247]/80">A clear, four-step journey from first enquiry to ongoing support.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SectionReveal delay={0}>
              <StepCard number="1" icon="messageCircle" title="Tell us what you need" description="Share a little about the learner, your school or your staffing requirement." />
            </SectionReveal>
            <SectionReveal delay={75}>
              <StepCard number="2" icon="users" title="Consultation and understanding" description="We listen, ask questions and build a clear picture of needs, goals and context." />
            </SectionReveal>
            <SectionReveal delay={150}>
              <StepCard number="3" icon="clipboardList" title="Personalised support plan" description="We propose a tailored plan, matching the right support, tutor or professional." />
            </SectionReveal>
            <SectionReveal delay={225}>
              <StepCard number="4" icon="trendingUp" title="Ongoing support and review" description="Regular communication, progress reflection and adjustments as needs evolve." />
            </SectionReveal>
          </div>
          <SectionReveal delay={300}>
            <div className="mt-12 text-center">
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                See the full journey <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why families */}
      <section className="relative bg-[#FAF9F6] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For families</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Why families choose us</h2>
                <p className="mt-5 text-lg text-[#243247]/80 leading-relaxed">
                  We understand that every learner is different. Our approach is built on listening, personalisation and a genuine commitment to progress.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                  'Support tailored to the individual learner',
                  'Clear communication with parents and carers',
                  'Flexible one-to-one, small-group and online options',
                  'A focus on confidence, independence and wellbeing',
                  'Transparent processes and honest expectations'].
                  map((item) =>
                  <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8D7B2]/30 text-[#102A56]">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-[#243247]/80">{item}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-10">
                  <Link to="/for-parents" className="inline-flex items-center gap-2 rounded-md bg-[#102A56] px-6 py-3 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                    Find Support <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#102A56] to-[#0B1D3A] shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={logoUrl} alt="Royale Crown Academy crest" className="h-32 w-32 opacity-20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A]/90 to-transparent p-8">
                    <p className="font-heading text-2xl font-bold text-[#FAF9F6]">Every learner deserves to feel understood.</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why schools */}
      <section className="relative bg-[#102A56] py-20 text-[#FAF9F6] lg:py-28">
        <LogoWatermark opacity={0.04} size={400} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For schools and colleges</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Why schools and colleges work with us</h2>
                <p className="mt-5 text-lg text-[#FAF9F6]/80 leading-relaxed">
                  We act as a reliable extension of your setting, providing specialist support and staffing that helps learners thrive and eases pressure on internal teams.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                  'Flexible SEN tuition and targeted catch-up support',
                  'Professional Teaching Assistants and Cover Supervisors',
                  'Clear reporting and ongoing communication',
                  'Safeguarding-aware professionals and processes',
                  'Bespoke programmes aligned to your setting'].
                  map((item) =>
                  <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAF9F6]/20">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-[#FAF9F6]/80">{item}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-10">
                  <Link to="/for-schools-colleges" className="inline-flex items-center gap-2 rounded-md bg-[#FAF9F6] px-6 py-3 text-base font-semibold text-[#102A56] shadow-sm transition-all hover:bg-white hover:shadow-md">
                    Discuss Your School's Needs <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1D3A] to-[#102A56] shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={logoUrl} alt="Royale Crown Academy crest" className="h-32 w-32 opacity-20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A]/90 to-transparent p-8">
                    <p className="font-heading text-2xl font-bold text-[#FAF9F6]">A partnership built on trust.</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Safeguarding commitment */}
      <section className="relative bg-[#FAF9F6] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm sm:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <SectionReveal>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#102A56]/10 text-[#102A56]">
                  <Icon name="shield" className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Our safeguarding commitment</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#243247]/80">
                  Safeguarding is not an afterthought. It is woven into how we recruit, train, communicate and deliver support. Every concern is taken seriously and handled with care.
                </p>
                <div className="mt-8">
                  <Link to="/safeguarding" className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                    Read our safeguarding approach <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </SectionReveal>
              <SectionReveal delay={150}>
                <div className="space-y-5">
                  {[
                  { title: 'Safer recruitment', text: 'We follow robust recruitment and verification procedures for all education professionals.' },
                  { title: 'Safeguarding training', text: 'Relevant staff and professionals receive safeguarding training appropriate to their role.' },
                  { title: 'Clear reporting', text: 'Concerns are escalated promptly through the appropriate channels, including the Designated Safeguarding Lead.' },
                  { title: 'Online safety', text: 'Online sessions are delivered using secure arrangements and appropriate supervision.' }].
                  map((item) =>
                  <div key={item.title} className="rounded-xl border border-[#E5EAF1] bg-[#FAF9F6] p-5 transition-all hover:border-[#C6A15B]/40">
                      <h3 className="font-heading text-base font-semibold text-[#102A56]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#243247]/75">{item.text}</p>
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-[#EEF4FA]/50 py-20 lg:py-28">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Testimonials</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">What families and schools say</h2>
              <p className="mt-4 text-[#243247]/80">The testimonials below are editable placeholders. Replace them with genuine feedback once collected.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <SectionReveal delay={0}>
              <TestimonialCard quote="[Placeholder testimonial: a parent or carer shares how personalised support helped their child grow in confidence and make progress.]" name="[Name to be inserted]" role="Parent/Carer" context="[Location or context to be inserted]" />
            </SectionReveal>
            <SectionReveal delay={75}>
              <TestimonialCard quote="[Placeholder testimonial: a school leader describes how staffing or tuition support complemented their provision and helped learners.]" name="[Name to be inserted]" role="[Role to be inserted]" context="[School or college name to be inserted]" />
            </SectionReveal>
            <SectionReveal delay={150}>
              <TestimonialCard quote="[Placeholder testimonial: a young person, carer or professional reflects on a positive experience with the organisation.]" name="[Name to be inserted]" role="[Role to be inserted]" context="[Context to be inserted]" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF9F6] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">FAQ</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-[#243247]/80">Quick answers for parents, carers and education professionals.</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="mt-10">
              <FAQAccordion items={homeFAQs} />
            </div>
          </SectionReveal>
          <SectionReveal delay={200}>
            <div className="mt-10 text-center">
              <Link to="/faq" className="inline-flex items-center gap-2 text-base font-semibold text-[#102A56] hover:text-[#C6A15B] transition-colors">
                View all FAQs <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#102A56] py-20 text-[#FAF9F6] lg:py-28">
        <LogoWatermark opacity={0.05} size={420} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Ready to explore the right support?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAF9F6]/80">
              Whether you are a parent, carer, school leader or college professional, we are here to listen and help you find a way forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#C6A15B] px-8 py-4 text-lg font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl">
                Talk to Us <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-[#FAF9F6]/30 px-8 py-4 text-lg font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10">
                How It Works
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}