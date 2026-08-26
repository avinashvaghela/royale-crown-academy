import React from 'react';
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
    answer: 'We work with children and young people across primary, secondary and college settings. Support is tailored to the individual, regardless of age or key stage.',
  },
  {
    question: 'Do you only work with learners who have a diagnosis?',
    answer: 'No. We support learners with identified needs, those awaiting assessment, and learners who simply need a little extra help to make progress. A formal diagnosis is not required to begin a conversation.',
  },
  {
    question: 'Can you support learners in school or college?',
    answer: 'Yes. We provide in-setting support, one-to-one tuition, small-group programmes and staffing solutions for schools and colleges, depending on the arrangement agreed.',
  },
  {
    question: 'How quickly can support begin?',
    answer: 'Timescales depend on the type of support, location and availability. After an initial consultation, we aim to propose a plan promptly and keep you informed throughout.',
  },
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

export default function HomePage() {
  return (
    <PageLayout>
      <SEOHead
        title="Personalised Education & SEN Support Across the UK"
        description="Royale Crown Academy Ltd provides personalised SEN support, tutoring and education staffing services for learners, families, schools and colleges across the UK."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FAF9F6] pt-20">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#EEF4FA] via-[#FAF9F6] to-[#FAF9F6]" />
        <div className="absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#102A56]/5 blur-3xl" />
        <LogoWatermark opacity={0.03} size={480} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <SectionReveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FA] px-4 py-1.5 text-sm font-medium text-[#102A56] border border-[#102A56]/10">
                  <Icon name="shield" className="h-4 w-4 text-[#C6A15B]" />
                  Safeguarding-centred education support
                </span>
                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl lg:text-6xl">
                  Personalised Education. Meaningful Progress.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#243247] sm:text-xl">
                  Specialist SEN support, personalised tutoring and education services designed around the individual needs of learners, families and educational settings.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#102A56] px-6 py-3.5 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-offset-2"
                  >
                    Talk to Us
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3.5 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-offset-2"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF4FA] via-[#FAF9F6] to-[#E8D7B2]/30 shadow-xl">
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                    <img
                      src={logoUrl}
                      alt="Royale Crown Academy Ltd"
                      className="h-36 w-auto object-contain opacity-95 drop-shadow-sm sm:h-44"
                    />
                    <p className="mt-6 max-w-xs text-sm font-medium text-[#243247]">
                      Specialist SEN support, personalised tutoring and education staffing for families and schools across the UK.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-[#E8D7B2]/50 bg-[#FAF9F6] p-5 shadow-lg lg:block">
                  <p className="font-heading text-sm font-semibold text-[#102A56]">Support tailored around the learner</p>
                  <p className="mt-1 text-xs text-[#243247]">One-to-one, small-group and online options</p>
                </div>
                <div className="absolute -right-4 top-8 hidden rounded-lg border border-[#E8D7B2]/50 bg-[#FAF9F6] p-4 shadow-md lg:block">
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
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How can we support you?</h2>
              <p className="mt-4 text-lg text-[#243247]">Choose the pathway that best describes you.</p>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <SectionReveal delay={0}>
              <div className="group flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FA] text-[#102A56]">
                  <Icon name="heart" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-[#102A56]">For Families</h3>
                <p className="mt-2 flex-1 text-[#243247]">Personalised tuition and SEN support for children and young people.</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A15B] transition-colors hover:text-[#102A56]">
                  Find Support <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={75}>
              <div className="group flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FA] text-[#102A56]">
                  <Icon name="school" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-[#102A56]">For Schools & Colleges</h3>
                <p className="mt-2 flex-1 text-[#243247]">Flexible education support and staffing solutions.</p>
                <Link to="/for-schools-colleges" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A15B] transition-colors hover:text-[#102A56]">
                  Work With Us <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="group flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FA] text-[#102A56]">
                  <Icon name="briefcase" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-[#102A56]">For Education Professionals</h3>
                <p className="mt-2 flex-1 text-[#243247]">Opportunities to work with a growing education organisation.</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A15B] transition-colors hover:text-[#102A56]">
                  Get in Touch <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="relative border-y border-[#E8D7B2]/50 bg-[#102A56] py-12 text-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div className="rounded-lg bg-[#FAF9F6]/10 p-6">
                <p className="font-heading text-3xl font-bold">Learner-first</p>
                <p className="mt-1 text-sm text-[#FAF9F6]/80">Support built around individual strengths and goals</p>
              </div>
              <div className="rounded-lg bg-[#FAF9F6]/10 p-6">
                <p className="font-heading text-3xl font-bold">UK-wide</p>
                <p className="mt-1 text-sm text-[#FAF9F6]/80">Supporting families, schools and colleges across the UK</p>
              </div>
              <div className="rounded-lg bg-[#FAF9F6]/10 p-6">
                <p className="font-heading text-3xl font-bold">Safeguarding-led</p>
                <p className="mt-1 text-sm text-[#FAF9F6]/80">A culture of safety, transparency and accountability</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24" id="services">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our services</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How we can help</h2>
              <p className="mt-4 text-lg text-[#243247]">
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
                linkText="Explore SEN support"
              />
            </SectionReveal>
            <SectionReveal delay={75}>
              <ServiceCard
                icon="bookOpen"
                title="Personalised Tutoring"
                description="One-to-one and small-group tuition in English, maths, science, study skills and exam preparation."
                href="/tutoring"
                linkText="Explore tutoring"
              />
            </SectionReveal>
            <SectionReveal delay={150}>
              <ServiceCard
                icon="briefcase"
                title="Education Staffing"
                description="Teaching Assistants, SEN support staff, Cover Supervisors and education professionals for schools and colleges."
                href="/education-staffing"
                linkText="Explore staffing"
              />
            </SectionReveal>
            <SectionReveal delay={225}>
              <ServiceCard
                icon="school"
                title="For Schools & Colleges"
                description="Flexible SEN tuition, catch-up support, targeted tutoring and staffing solutions for educational settings."
                href="/for-schools-colleges"
                linkText="School support"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24" id="how-it-works">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our process</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How it works</h2>
              <p className="mt-4 text-lg text-[#243247]">A clear, four-step journey from first enquiry to ongoing support.</p>
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
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For families</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Why families choose us</h2>
                <p className="mt-4 text-lg text-[#243247]">
                  We understand that every learner is different. Our approach is built on listening, personalisation and a genuine commitment to progress.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Support tailored to the individual learner',
                    'Clear communication with parents and carers',
                    'Flexible one-to-one, small-group and online options',
                    'A focus on confidence, independence and wellbeing',
                    'Transparent processes and honest expectations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8D7B2]/30 text-[#102A56]">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-[#243247]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#102A56] px-6 py-3 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                    Find Support <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-8 shadow-sm">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#E8D7B2]/20" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name="heart" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-[#102A56]">Built around the learner</h3>
                  <p className="mt-3 leading-relaxed text-[#243247]">
                    We take time to understand each learner's strengths, interests and challenges. Sessions are planned with care, paced appropriately and reviewed regularly so that support remains relevant and effective.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why schools */}
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <LogoWatermark opacity={0.04} size={400} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For schools and colleges</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Why schools and colleges work with us</h2>
                <p className="mt-4 text-lg text-[#FAF9F6]/80">
                  We act as a reliable extension of your setting, providing specialist support and staffing that helps learners thrive and eases pressure on internal teams.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Flexible SEN tuition and targeted catch-up support',
                    'Professional Teaching Assistants and Cover Supervisors',
                    'Clear reporting and ongoing communication',
                    'Safeguarding-aware professionals and processes',
                    'Bespoke programmes aligned to your setting',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAF9F6]/20">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-[#FAF9F6]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/for-schools-colleges" className="inline-flex items-center gap-2 rounded-md bg-[#FAF9F6] px-6 py-3 text-base font-semibold text-[#102A56] shadow-sm transition-all hover:bg-white hover:shadow-md">
                    Discuss Your School's Needs <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="rounded-lg border border-[#FAF9F6]/20 bg-[#FAF9F6]/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FAF9F6]/20">
                  <Icon name="school" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold">A partnership approach</h3>
                <p className="mt-3 leading-relaxed text-[#FAF9F6]/80">
                  We work alongside SENCOs, DSLs, headteachers and college leaders to understand priorities, respect your culture and deliver support that complements your existing provision.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Safeguarding commitment */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <SectionReveal>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                  <Icon name="shield" className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Our safeguarding commitment</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#243247]">
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
                    { title: 'Online safety', text: 'Online sessions are delivered using secure arrangements and appropriate supervision.' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-5">
                      <h3 className="font-heading text-base font-semibold text-[#102A56]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#243247]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Testimonials</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">What families and schools say</h2>
              <p className="mt-4 text-[#243247]">The testimonials below are editable placeholders. Replace them with genuine feedback once collected.</p>
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
      <section className="bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">FAQ</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-[#243247]">Quick answers for parents, carers and education professionals.</p>
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
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <LogoWatermark opacity={0.05} size={420} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Ready to explore the right support?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAF9F6]/80">
              Whether you are a parent, carer, school leader or college professional, we are here to listen and help you find a way forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#FAF9F6] px-8 py-4 text-lg font-semibold text-[#102A56] shadow-sm transition-all hover:bg-white hover:shadow-md">
                Talk to Us <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-[#FAF9F6]/30 px-8 py-4 text-lg font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10">
                How It Works
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
