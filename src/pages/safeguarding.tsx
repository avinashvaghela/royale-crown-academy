import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SectionReveal from '../components/SectionReveal';
import SEOHead from '../components/SEOHead';
import Icon from '../components/Icon';

const commitments = [
  {
    icon: 'shield',
    title: 'Safeguarding-first culture',
    description: 'The welfare of children and young people is central to every decision we make, from recruitment to delivery.',
  },
  {
    icon: 'users',
    title: 'Safer recruitment',
    description: 'We follow robust recruitment and verification procedures for all education professionals.',
  },
  {
    icon: 'bookOpen',
    title: 'Safeguarding training',
    description: 'Relevant staff and professionals receive safeguarding training appropriate to their role.',
  },
  {
    icon: 'alertTriangle',
    title: 'Clear reporting',
    description: 'Concerns are escalated promptly through the appropriate channels, including the Designated Safeguarding Lead.',
  },
  {
    icon: 'monitor',
    title: 'Online safety',
    description: 'Online sessions are delivered using secure arrangements and appropriate supervision.',
  },
  {
    icon: 'messageCircle',
    title: 'Open communication',
    description: 'We encourage parents, carers, schools and learners to raise questions or concerns at any time.',
  },
];

export default function SafeguardingPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Safeguarding | Our Commitment to Children & Young People"
        description="Royale Crown Academy Ltd's safeguarding commitment, safer recruitment principles, reporting concerns, online safety and contact information for schools, families and professionals."
        path="/safeguarding"
      />

      {/* Hero */}
      <section className="bg-primary pt-20 text-primary-foreground" aria-labelledby="safeguarding-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Safeguarding</p>
              <h1 id="safeguarding-heading" className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Keeping children and young people safe
              </h1>
              <p className="mt-6 text-lg leading-relaxed opacity-90">
                Safeguarding is at the heart of everything we do. We are committed to creating a safe, respectful environment where every learner can thrive.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-background py-20 sm:py-24" aria-labelledby="commitments-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our approach</p>
              <h2 id="commitments-heading" className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What safeguarding means to us
              </h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-md border border-surface-200 bg-surface-50 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DSL */}
      <section className="bg-surface-50 py-20 sm:py-24" aria-labelledby="dsl-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4">
                <Icon name="user" className="mt-0.5 h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h2 id="dsl-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Designated Safeguarding Lead</h2>
                  <p className="mt-4 text-surface-600 leading-relaxed">
                    [Name, role and contact details of the Designated Safeguarding Lead to be inserted here.]
                  </p>
                  <p className="mt-4 text-surface-600 leading-relaxed">
                    If you have a safeguarding concern, please contact our Designated Safeguarding Lead using the details above. If the matter is urgent or someone is at immediate risk, please contact the police or your local authority children's services team without delay.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Reporting */}
      <section className="bg-background py-20 sm:py-24" aria-labelledby="reporting-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <h2 id="reporting-heading" className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Reporting a concern
                </h2>
                <div className="mt-6 space-y-5 text-surface-700 leading-relaxed">
                  <p>
                    We take every safeguarding concern seriously. Concerns can be raised by parents, carers, learners, schools, colleges or members of the public.
                  </p>
                  <p>
                    All concerns are recorded, reviewed and escalated appropriately. Where a child is at immediate risk, we will always advise contacting the emergency services or local authority directly.
                  </p>
                  <p>
                    For non-urgent concerns, please email or call us using the contact details on our <Link to="/contact" className="font-medium text-primary underline">Contact page</Link> and ask to speak to the Designated Safeguarding Lead.
                  </p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="rounded-md border border-surface-200 bg-surface-50 p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground">Useful contacts</h3>
                <ul className="mt-5 space-y-4 text-surface-600">
                  <li className="flex items-start gap-3">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>In an emergency, always dial 999.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>NSPCC Helpline: 0808 800 5000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="externalLink" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Contact your local authority children's services team for advice and guidance.</span>
                  </li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Policy links */}
      <section className="bg-surface-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Related policies</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Safeguarding Policy', path: '/safeguarding-policy' },
                  { label: 'Privacy Policy', path: '/privacy-policy' },
                  { label: 'Complaints Policy', path: '/complaints-policy' },
                  { label: 'Data Protection', path: '/data-protection' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                      <Icon name="fileText" className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
