import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import StepCard from '../components/StepCard';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const roles = [
{ icon: 'users', title: 'Teaching Assistants', text: 'General classroom and learning support professionals for primary, secondary and specialist settings.' },
{ icon: 'heart', title: 'SEN Teaching Assistants', text: 'Support staff with experience and understanding of autism, ADHD, dyslexia, SEMH and additional needs.' },
{ icon: 'briefcase', title: 'Cover Supervisors', text: 'Reliable cover professionals to maintain continuity and behaviour expectations in the classroom.' },
{ icon: 'bookOpen', title: 'Tutors', text: 'Subject specialists and intervention tutors for one-to-one and small-group support.' },
{ icon: 'school', title: 'Education support professionals', text: 'A range of professionals to complement your existing team and provision.' },
{ icon: 'clipboardList', title: 'Flexible arrangements', text: 'Day-to-day cover, short-term contracts and longer-term placements to suit your needs.' }];


const process = [
{ number: '1', icon: 'messageCircle', title: 'Understand requirement', text: 'We listen to your needs, culture, timescales and any specific learner or safeguarding considerations.' },
{ number: '2', icon: 'search', title: 'Identify suitable professionals', text: 'We search our network and recruitment processes for candidates whose skills and values align with your setting.' },
{ number: '3', icon: 'shield', title: 'Checks and verification', text: 'We follow our safer recruitment and verification procedures before any introduction or placement.' },
{ number: '4', icon: 'users', title: 'Introduce and arrange placement', text: 'We facilitate introductions, agree terms and support a smooth start in your setting.' },
{ number: '5', icon: 'messageCircle', title: 'Ongoing communication and support', text: 'We stay in touch, gather feedback and address any questions throughout the placement.' }];


const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('05671f06d089b1211807c8bfa3200a3c') :
'';

export default function EducationStaffingPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Education Staffing | Teaching Assistants, SEN Support & Cover"
        description="Professional education staffing services for UK schools and colleges, including Teaching Assistants, SEN support staff, Cover Supervisors and tutors."
        path="/education-staffing" />


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
                  Education Staffing
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-surface-600">
                  Reliable education professionals for schools and colleges across the UK. From Teaching Assistants to Cover Supervisors, we help you find the right people for your setting.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                    Request Staff
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                  <Link to="/safeguarding" className="inline-flex items-center gap-2 rounded-md border border-surface-300 bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-surface-100">
                    Safeguarding
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-primary/10 via-surface-100 to-accent/10 p-10 shadow-md">
                <img
                  src={logoUrl}
                  alt="Royale Crown Academy Ltd"
                  className="mx-auto h-32 w-auto object-contain opacity-90 sm:h-40" />

                <p className="mt-6 text-center text-sm font-medium text-surface-600">
                  Professional staffing solutions for schools and colleges across the UK.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Professionals we provide</h2>
              <p className="mt-4 text-lg text-surface-600">
                Staffing solutions to support classrooms, learners with SEN and day-to-day cover requirements.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) =>
            <SectionReveal key={role.title} delay={index * 75}>
                <ServiceCard icon={role.icon} title={role.title} description={role.text} />
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-surface-50 py-16 sm:py-24">
        <LogoWatermark opacity={0.04} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our staffing process</h2>
              <p className="mt-4 text-lg text-surface-600">
                A careful, five-step process designed to match the right professional to your setting.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) =>
            <SectionReveal key={step.title} delay={index * 75}>
                <StepCard number={step.number} icon={step.icon} title={step.title} description={step.text} />
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Safer recruitment */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Safer recruitment and verification
              </h2>
              <p className="mt-4 text-lg text-surface-600 leading-relaxed">
                We take recruitment seriously. Our procedures are designed to help ensure that professionals introduced to your setting are suitable for their role and aligned with your safeguarding expectations.
              </p>
              <p className="mt-4 text-surface-600 leading-relaxed">
                [Specific checks, references, training requirements and verification procedures to be inserted here in line with the organisation's actual practice.]
              </p>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-md border border-surface-200 bg-surface-50 p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5" />
                <div className="relative">
                  <h3 className="font-heading text-xl font-semibold text-foreground">What we consider</h3>
                  <ul className="mt-5 space-y-4">
                    {[
                    'Relevant experience and qualifications where required',
                    'Identity and right-to-work verification',
                    'Reference checks',
                    'Disclosure and barring checks in line with role requirements',
                    'Safeguarding awareness and training',
                    'Suitability for the specific setting and learners'].
                    map((item) =>
                    <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-surface-700">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-16 text-primary-foreground sm:py-24">
        <LogoWatermark opacity={0.06} size={420} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Discuss your staffing needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Tell us about the role, your setting and your timescales. We will listen and propose a way forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary shadow-sm transition-colors hover:bg-white">

                Request Staff
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link
                to="/safeguarding"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">

                Safeguarding
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}