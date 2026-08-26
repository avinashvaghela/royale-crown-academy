import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import StepCard from '../components/StepCard';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const councilServices = [
  { icon: 'users', title: 'SEN tuition & support', text: 'Targeted SEN tuition, learning support and intervention for learners with identified or emerging needs.', href: '/sen-support', linkText: 'Explore SEN support' },
  { icon: 'bookOpen', title: 'Specialist tutoring', text: 'One-to-one and small-group tuition across core subjects, catch-up programmes and exam preparation.', href: '/tutoring', linkText: 'Explore tutoring' },
  { icon: 'briefcase', title: 'Education staffing', text: 'Teaching Assistants, SEN support staff, Cover Supervisors and other education professionals.', href: '/education-staffing', linkText: 'Explore staffing' },
  { icon: 'target', title: 'Bespoke programmes', text: 'Flexible provision designed around local requirements, cohort needs and commissioning frameworks.', href: '/contact', linkText: 'Discuss a requirement' },
];

const councilSteps = [
  { number: '1', icon: 'messageCircle', title: 'Tell us your requirements', description: 'Share the provision, cohort details, timescales and any specific safeguarding considerations.' },
  { number: '2', icon: 'users', title: 'Discuss the provision', description: 'We explore your local context, priorities and how best to align support with your objectives.' },
  { number: '3', icon: 'clipboardList', title: 'Identify appropriate support', description: 'We propose a tailored plan, matching the right professionals, tutors or programmes to your needs.' },
  { number: '4', icon: 'trendingUp', title: 'Arrange delivery & review', description: 'We support a smooth start, maintain communication and review progress as the provision develops.' },
];

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

export default function ForCouncilsPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Councils & Local Authorities | Education Services"
        description="Professional education services for UK councils and local authorities, including SEN support, specialist tuition, intervention and education staffing."
        path="/for-councils"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FA]/50 pt-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#102A56]/5 blur-3xl" />
        <LogoWatermark opacity={0.03} size={400} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FAF9F6] px-4 py-1.5 text-sm font-medium text-[#102A56] border border-[#102A56]/10">
                  <Icon name="globe" className="h-4 w-4 text-[#C6A15B]" />
                  For local authorities
                </span>
                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl lg:text-6xl">
                  Education services designed around local requirements
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#243247] sm:text-xl">
                  We work with councils and local authorities to provide flexible SEN support, specialist tuition, educational intervention and staffing solutions that respond to local need.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#102A56] px-6 py-3.5 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                    Discuss a Council Requirement <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                  <Link to="/education-staffing" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3.5 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                    Explore Staffing
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF4FA] via-[#FAF9F6] to-[#E8D7B2]/30 p-10 shadow-md">
                <img src={logoUrl} alt="Royale Crown Academy Ltd" className="mx-auto h-36 w-auto object-contain opacity-95 sm:h-44" />
                <p className="mt-6 text-center text-sm font-medium text-[#243247]">Professional, flexible education support for local authority teams across the UK.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Services</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">How we support local authorities</h2>
              <p className="mt-4 text-lg text-[#243247]">Provision that can be shaped around commissioning requirements, learner cohorts and local priorities.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {councilServices.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 75}>
                <ServiceCard icon={service.icon} title={service.title} description={service.text} href={service.href} linkText={service.linkText} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <LogoWatermark opacity={0.04} size={420} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our approach</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">A professional partnership</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {councilSteps.map((step, index) => (
              <SectionReveal key={step.title} delay={index * 75}>
                <StepCard number={step.number} icon={step.icon} title={step.title} description={step.description} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#FAF9F6] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-lg border-l-4 border-[#C6A15B] bg-[#E8D7B2]/10 p-6">
              <div className="flex items-start gap-4">
                <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-[#C6A15B]" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#102A56]">Transparent and accurate</h3>
                  <p className="mt-2 leading-relaxed text-[#243247]">We do not claim existing council contracts, framework memberships or approved-provider status unless explicitly verified. We are happy to discuss your requirements, procurement processes and how we might become a trusted partner.</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Discuss a local authority requirement</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#243247]">Tell us about the provision you are considering and we will arrange a confidential conversation with your team.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#102A56] px-8 py-4 text-lg font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                Submit an Enquiry <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-8 py-4 text-lg font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                How It Works
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
