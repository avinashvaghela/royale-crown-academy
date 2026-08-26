import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import SchoolForm from '../components/SchoolForm';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const services = [
  { title: 'SEN tuition', description: 'Specialist tuition and support for learners with identified additional needs.', icon: 'brain' },
  { title: 'Targeted tutoring', description: 'Focused support in English, maths, science and study skills for individuals or small groups.', icon: 'bookOpen' },
  { title: 'Catch-up support', description: 'Programmes designed to help learners close gaps and rebuild confidence.', icon: 'trendingUp' },
  { title: 'One-to-one learner support', description: 'Dedicated support for learners who need individual attention to thrive.', icon: 'user' },
  { title: 'Small-group programmes', description: 'Structured group interventions for learners with similar needs or goals.', icon: 'users' },
  { title: 'Teaching Assistants', description: 'Classroom and learner support professionals matched to your setting.', icon: 'briefcase' },
  { title: 'Cover Supervisors', description: 'Reliable cover to maintain continuity in the absence of teaching staff.', icon: 'clipboardList' },
  { title: 'Flexible staffing support', description: 'Short-term, longer-term and ad-hoc staffing solutions.', icon: 'settings' },
];

const benefits = [
  'Responsive, partnership-focused service',
  'Support aligned to your school or college priorities',
  'Clear communication and regular updates',
  'Safeguarding-aware professionals and processes',
  'Flexible arrangements to suit your budget and timetable',
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('05671f06d089b1211807c8bfa3200a3c')
  : '';

export default function ForSchoolsCollegesPage() {
  return (
    <PageLayout>
      <SEOHead
        title="For Schools & Colleges | Royale Crown Academy Ltd"
        description="SEN tuition, targeted tutoring, catch-up support, staffing and flexible education support for schools and colleges across the UK."
        path="/for-schools-colleges"
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
                  Support for schools and colleges
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-surface-600">
                  We partner with headteachers, SENCOs, DSLs, school business managers and college leaders to deliver SEN tuition, targeted tutoring, catch-up support and flexible staffing that complements your existing provision.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="#request-support" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                    Request Support
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                  <Link to="/education-staffing" className="inline-flex items-center gap-2 rounded-md border border-surface-300 px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-background">
                    Explore Staffing
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
                  A trusted partner for schools and colleges seeking flexible, high-quality education support.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Services for educational settings</h2>
              <p className="mt-4 text-lg text-surface-600">A range of flexible support options designed around the needs of your learners and staff.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 60}>
                <div className="flex h-full flex-col rounded-md border border-surface-200 bg-surface-50 p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-surface-600 leading-relaxed">{service.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-primary py-16 text-primary-foreground sm:py-24">
        <LogoWatermark opacity={0.06} size={420} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Why partner with us?</h2>
              <p className="mt-4 text-lg opacity-90">
                We understand the pressures schools and colleges face. Our aim is to make it easier to access high-quality, reliable support when you need it.
              </p>
            </SectionReveal>
            <SectionReveal delay={150}>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="opacity-90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="request-support" className="relative bg-surface-50 py-16 sm:py-24">
        <LogoWatermark opacity={0.04} size={360} />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-8 shadow-sm sm:p-12">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Request support</h2>
                <p className="mt-4 text-lg text-surface-600">
                  Complete the form below and a member of our team will be in touch to discuss your school or college's requirements.
                </p>
              </div>
              <div className="mt-10">
                <SchoolForm />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
