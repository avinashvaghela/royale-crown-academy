import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import StepCard from '../components/StepCard';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const subjects = [
  { icon: 'penTool', title: 'English', text: 'Reading, writing, comprehension, spelling, grammar and confidence in communication.' },
  { icon: 'target', title: 'Maths', text: 'Number, calculation, problem-solving, reasoning and exam technique.' },
  { icon: 'lightbulb', title: 'Science', text: 'Biology, chemistry and physics support for Key Stage 3 and GCSE.' },
  { icon: 'clipboardList', title: 'Study skills', text: 'Organisation, revision strategies, note-taking and independent learning habits.' },
  { icon: 'calendar', title: 'Exam preparation', text: 'Structured preparation for tests, mocks and GCSEs without unrealistic grade promises.' },
  { icon: 'bookOpen', title: 'Catch-up support', text: 'Targeted help to close gaps and rebuild confidence after disruption or absence.' },
];

const levels = [
  { title: 'Primary tuition', text: 'Support in core subjects for Key Stage 1 and Key Stage 2, building strong foundations and a love of learning.', icon: 'smile' },
  { title: 'Secondary tuition', text: 'Subject support across Key Stage 3, helping learners adjust to new demands and stay on track.', icon: 'bookOpen' },
  { title: 'GCSE support', text: 'Focused support in English, maths and science as learners prepare for GCSE examinations.', icon: 'award' },
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('05671f06d089b1211807c8bfa3200a3c')
  : '';

export default function TutoringPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Personalised Tutoring | Primary, Secondary & GCSE Support"
        description="One-to-one and small-group tutoring in English, maths, science, study skills and GCSE preparation for learners across the UK."
        path="/tutoring"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-50 pt-16 sm:pt-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <LogoWatermark opacity={0.04} size={400} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Personalised Tutoring
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-surface-600">
                  One-to-one and small-group tuition designed around the learner. We support primary, secondary and GCSE learners in English, maths, science and study skills.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                    Find a Tutor
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                  <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-surface-300 bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-surface-100">
                    How tutoring works
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-primary/10 via-surface-100 to-accent/10 p-10 shadow-md">
                <img
                  src={logoUrl}
                  alt="Royale Crown Academy Ltd"
                  className="mx-auto h-32 w-auto object-contain opacity-90 sm:h-40"
                />
                <p className="mt-6 text-center text-sm font-medium text-surface-600">
                  Personalised tutoring in English, maths, science and study skills for learners across the UK.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Tuition for every stage</h2>
              <p className="mt-4 text-lg text-surface-600">
                Support is tailored to the learner's age, stage and goals.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {levels.map((level, index) => (
              <SectionReveal key={level.title} delay={index * 75}>
                <div className="flex h-full flex-col rounded-md border border-surface-200 bg-surface-50 p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon name={level.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{level.title}</h3>
                  <p className="mt-3 flex-1 text-surface-600 leading-relaxed">{level.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="relative bg-surface-50 py-16 sm:py-24">
        <LogoWatermark opacity={0.04} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Subjects we support</h2>
              <p className="mt-4 text-lg text-surface-600">
                Core subjects and learning skills delivered with patience, structure and encouragement.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <SectionReveal key={subject.title} delay={index * 75}>
                <ServiceCard icon={subject.icon} title={subject.title} description={subject.text} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How tutoring is delivered
              </h2>
              <p className="mt-4 text-lg text-surface-600 leading-relaxed">
                We offer flexible delivery options to suit the learner, family and circumstances. Each arrangement is agreed in advance and reviewed regularly.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'One-to-one tutoring for focused, individual support',
                  'Small-group tutoring for peer learning and collaboration',
                  'Online tutoring where appropriate and agreed',
                  'In-home or in-setting sessions where arranged',
                  'Regular progress updates for parents and carers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-surface-700">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-md border border-surface-200 bg-surface-50 p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
                <div className="relative">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Our tutoring philosophy</h3>
                  <div className="mt-5 space-y-4 text-surface-600 leading-relaxed">
                    <p>
                      We believe tutoring is most effective when it builds confidence as well as knowledge. Our tutors take time to understand how each learner thinks, where their gaps are and what motivates them.
                    </p>
                    <p>
                      We do not promise specific grades or outcomes. Instead, we focus on clear goals, consistent effort and measurable progress over time.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-primary py-16 text-primary-foreground sm:py-24">
        <LogoWatermark opacity={0.06} size={420} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">The tutoring journey</h2>
              <p className="mt-4 text-lg opacity-90">
                A simple, structured path from enquiry to ongoing support.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SectionReveal delay={0}>
              <StepCard number="1" icon="messageCircle" title="Enquiry" description="Tell us about the learner, their subjects and what you hope to achieve." />
            </SectionReveal>
            <SectionReveal delay={75}>
              <StepCard number="2" icon="users" title="Assessment" description="We discuss strengths, gaps and learning preferences to plan the right approach." />
            </SectionReveal>
            <SectionReveal delay={150}>
              <StepCard number="3" icon="clipboardList" title="Tutor match" description="We match a tutor whose skills and approach fit the learner's needs." />
            </SectionReveal>
            <SectionReveal delay={225}>
              <StepCard number="4" icon="trendingUp" title="Review" description="Progress is tracked, shared and used to adjust the plan as needed." />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find the right tutor
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-600">
              Tell us about your learner and we will help you explore whether one-to-one or small-group tutoring is the right fit.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Find a Tutor
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-surface-300 bg-background px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-surface-100"
              >
                How It Works
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
