import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const senAreas = [
  { icon: 'puzzle', title: 'Autism / ASC', text: 'Structured, predictable support that respects sensory preferences, builds communication skills and reduces anxiety.' },
  { icon: 'zap', title: 'ADHD', text: 'Engaging, movement-friendly sessions that harness strengths, build focus and support self-regulation strategies.' },
  { icon: 'bookOpen', title: 'Dyslexia', text: 'Targeted literacy support that builds phonological awareness, reading fluency, spelling confidence and comprehension.' },
  { icon: 'target', title: 'Dyscalculia', text: 'Practical, visual maths support that strengthens number sense, reasoning and problem-solving confidence.' },
  { icon: 'heart', title: 'SEMH', text: 'Nurturing support for social, emotional and mental health needs, focusing on relationships, resilience and readiness to learn.' },
  { icon: 'lightbulb', title: 'Learning difficulties', text: 'Patient, multi-sensory approaches that break learning into manageable steps and celebrate progress.' },
  { icon: 'users', title: 'Additional learning needs', text: 'Support for learners who need a different pace, format or approach, with or without a formal diagnosis.' },
  { icon: 'home', title: 'School reintegration', text: 'Gentle, structured support for learners returning to education after absence, illness or placement change.' },
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

export default function SENSupportPage() {
  return (
    <PageLayout>
      <SEOHead
        title="SEN & SEND Support | Personalised Special Educational Needs Support"
        description="Personalised SEN and SEND support for learners with autism, ADHD, dyslexia, dyscalculia, SEMH and additional learning needs across the UK."
        path="/sen-support"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FA]/50 pt-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#102A56]/5 blur-3xl" />
        <LogoWatermark opacity={0.03} size={400} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">SEN & SEND</p>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl">SEN & SEND Support</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#243247]">Personalised special educational needs support designed around the learner. We work with children and young people with a wide range of needs, strengths and goals.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Support that fits</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Support that fits the learner</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#243247]">No two learners with SEN are the same. Our support is tailored around the individual, drawing on their interests, strengths and the strategies that help them learn best. We do not make medical or diagnostic claims; instead, we focus on understanding needs and delivering practical, person-centred support.</p>
              <p className="mt-4 leading-relaxed text-[#243247]">We work with learners who have Education, Health and Care Plans (EHCPs), those with identified SEN support needs, and those who are awaiting assessment or simply need a different approach.</p>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E8D7B2]/20" />
                <div className="relative">
                  <h3 className="font-heading text-xl font-semibold text-[#102A56]">How support is delivered</h3>
                  <ul className="mt-5 space-y-4">
                    {['One-to-one SEN support', 'Small-group sessions', 'In-home, in-school or college-based support', 'Online support where appropriate', 'Targeted intervention programmes', 'Transition and reintegration support'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8D7B2]/30 text-[#102A56]">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-[#243247]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* SEN areas */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Areas of support</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Support for a wide range of needs</h2>
              <p className="mt-4 text-lg text-[#243247]">We support learners across a wide range of special educational needs and additional learning needs.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {senAreas.map((area, index) => (
              <SectionReveal key={area.title} delay={index * 75}>
                <ServiceCard icon={area.icon} title={area.title} description={area.text} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF4FA] via-[#FAF9F6] to-[#E8D7B2]/30 p-10 shadow-md">
                <img src={logoUrl} alt="Royale Crown Academy Ltd" className="mx-auto h-36 w-auto object-contain opacity-95 sm:h-44" />
                <p className="mt-6 text-center text-sm font-medium text-[#243247]">Personalised SEN support built around the learner's strengths, needs and goals.</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our approach</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Our SEN approach</h2>
              <div className="mt-6 space-y-5 leading-relaxed text-[#243247]">
                <p>We begin by listening. Before any support is put in place, we seek to understand the learner's profile, preferences, history and goals. Where appropriate, we work alongside families, schools, SENCOs and other professionals to ensure a joined-up approach.</p>
                <p>Support plans are flexible. We review progress regularly, adapt strategies as needs change, and keep communication open so that families and settings always know how things are going.</p>
                <p>We respect each learner's dignity and individuality. Our aim is to build confidence, independence and a positive relationship with learning.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="bg-[#FAF9F6] py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-lg border-l-4 border-[#C6A15B] bg-[#E8D7B2]/10 p-6">
              <div className="flex items-start gap-4">
                <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-[#C6A15B]" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#102A56]">Important note</h3>
                  <p className="mt-2 leading-relaxed text-[#243247]">Royale Crown Academy Ltd provides educational support. We do not diagnose medical or neurodevelopmental conditions, and we do not provide therapy, mental health treatment or legal advice. Where a learner has additional health or therapeutic needs, we work alongside appropriate professionals and encourage families to seek specialist guidance.</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <LogoWatermark opacity={0.04} size={420} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Discuss your child's support needs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAF9F6]/80">Every learner deserves support that understands them. Tell us a little about your situation and we will be in touch to talk through how we might help.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#FAF9F6] px-8 py-4 text-lg font-semibold text-[#102A56] shadow-sm transition-all hover:bg-white hover:shadow-md">
                Make an Enquiry <Icon name="arrowRight" className="h-5 w-5" />
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
