import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import Icon from '../components/Icon';

const subjectGroups = [
  {
    title: 'English',
    icon: 'penTool',
    items: ['Reading comprehension', 'Writing and grammar', 'Spelling and phonics', 'GCSE English Language', 'GCSE English Literature'],
  },
  {
    title: 'Maths',
    icon: 'target',
    items: ['Number and calculation', 'Algebra', 'Geometry and measures', 'Statistics and probability', 'GCSE maths'],
  },
  {
    title: 'Science',
    icon: 'lightbulb',
    items: ['Biology', 'Chemistry', 'Physics', 'Combined science', 'GCSE science'],
  },
  {
    title: 'Humanities & Business',
    icon: 'bookOpen',
    items: ['History', 'Geography', 'Religious studies', 'Business studies', 'Other subjects on request'],
  },
  {
    title: 'Computing & Technology',
    icon: 'monitor',
    items: ['Computing', 'ICT', 'Digital skills', 'Coding fundamentals'],
  },
  {
    title: 'Study Skills',
    icon: 'clipboardList',
    items: ['Revision strategies', 'Organisation', 'Note-taking', 'Exam technique', 'Independent learning'],
  },
];

const levels = [
  { title: 'Primary', text: 'Key Stage 1 and Key Stage 2 support in core subjects.' },
  { title: 'Key Stage 3', text: 'Subject support to build confidence through Years 7–9.' },
  { title: 'GCSE', text: 'Focused support in English, maths, science and other GCSE subjects.' },
  { title: 'A-Level & Further', text: 'Subject support where offered and arranged.' },
];

export default function SubjectsPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Subjects | Private Tuition Across the UK Curriculum"
        description="Explore the subjects offered by Royale Crown Academy Ltd, including English, maths, science and more for primary, secondary and GCSE learners."
        path="/subjects"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FAF9F6] pt-20">
        <div className="absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#102A56]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FA] px-4 py-1.5 text-sm font-medium text-[#102A56] border border-[#102A56]/10">
                <Icon name="bookOpen" className="h-4 w-4 text-[#C6A15B]" />
                Subject directory
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl lg:text-6xl">
                Subjects we support
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#243247] sm:text-xl">
                Personalised tuition across the UK curriculum. If you cannot see the subject you need, please ask — we may still be able to help or point you in the right direction.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#102A56] px-6 py-3.5 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                  Ask About a Subject <Icon name="arrowRight" className="h-5 w-5" />
                </Link>
                <Link to="/tutoring" className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3.5 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                  Tuition Overview
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Levels */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Tuition for every level</h2>
              <p className="mt-4 text-lg text-[#243247]">Support is tailored to the learner's stage, goals and current confidence.</p>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level, index) => (
              <SectionReveal key={level.title} delay={index * 75}>
                <div className="flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-6 shadow-sm text-center">
                  <h3 className="font-heading text-xl font-semibold text-[#102A56]">{level.title}</h3>
                  <p className="mt-2 flex-1 text-[#243247]">{level.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects grid */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Explore by subject</h2>
              <p className="mt-4 text-lg text-[#243247]">Our subject offering is designed to grow with your needs.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjectGroups.map((group, index) => (
              <SectionReveal key={group.title} delay={index * 75}>
                <div className="flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name={group.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#102A56]">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#243247]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A15B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Cannot see the subject you need?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAF9F6]/80">We are continually expanding our provision. Get in touch to discuss your learner's requirements.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#FAF9F6] px-8 py-4 text-lg font-semibold text-[#102A56] shadow-sm transition-all hover:bg-white hover:shadow-md">
                Ask Us <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/tutoring" className="inline-flex items-center gap-2 rounded-md border border-[#FAF9F6]/30 px-8 py-4 text-lg font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10">
                Tuition
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
