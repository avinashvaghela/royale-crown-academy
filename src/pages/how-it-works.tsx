import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import StepCard from '../components/StepCard';
import Icon from '../components/Icon';

const parentSteps = [
  { number: '1', icon: 'messageCircle', title: 'Tell us what you need', description: 'Share a little about your child, their needs and the support you are looking for.' },
  { number: '2', icon: 'users', title: 'Consultation and understanding', description: 'We listen, ask questions and build a clear picture of your child’s strengths, goals and preferences.' },
  { number: '3', icon: 'clipboardList', title: 'Personalised support plan', description: 'We propose a tailored plan, matching the right tutor or SEN support approach for your child.' },
  { number: '4', icon: 'trendingUp', title: 'Ongoing support and review', description: 'Regular updates, progress reflection and adjustments keep support relevant and effective.' },
];

const schoolSteps = [
  { number: '1', icon: 'messageCircle', title: 'Tell us what you need', description: 'Share your setting’s requirements, whether staffing, tuition or a targeted intervention.' },
  { number: '2', icon: 'users', title: 'Consultation and understanding', description: 'We discuss your learners, timetable, priorities and any specific SEN or safeguarding considerations.' },
  { number: '3', icon: 'clipboardList', title: 'Personalised support plan', description: 'We propose a plan and match the right professionals or tutors to your setting.' },
  { number: '4', icon: 'trendingUp', title: 'Ongoing support and review', description: 'We maintain regular communication, review progress and adapt as your needs evolve.' },
];

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <SEOHead
        title="How It Works | Royale Crown Academy Ltd"
        description="A simple four-step journey to personalised SEN support, tutoring and education staffing for parents, carers, schools and colleges."
        path="/how-it-works"
      />

      {/* Hero */}
      <section className="bg-surface-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                How it works
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-600">
                Whether you are a parent, carer, school leader or college professional, our process is designed to be clear, supportive and focused on getting the right support in place.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Parents journey */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">For parents and carers</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Your journey to the right support</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {parentSteps.map((step, index) => (
              <SectionReveal key={step.title} delay={index * 75}>
                <StepCard number={step.number} icon={step.icon} title={step.title} description={step.description} />
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={300}>
            <div className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                Start Your Enquiry
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Schools journey */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">For schools and colleges</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">A partnership approach to provision</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolSteps.map((step, index) => (
              <SectionReveal key={step.title} delay={index * 75}>
                <StepCard number={step.number} icon={step.icon} title={step.title} description={step.description} />
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={300}>
            <div className="mt-12 text-center">
              <Link to="/for-schools-colleges" className="inline-flex items-center gap-2 rounded-md border border-surface-300 px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-background">
                School & College Services
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What to expect from us</h2>
              <p className="mt-4 text-lg text-surface-600 leading-relaxed">
                We aim to make every step feel straightforward and professional. You can expect clear communication, honest advice and support that is tailored to the situation.
              </p>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="space-y-5">
                {[
                  { title: 'A prompt response', text: 'We aim to acknowledge enquiries quickly and arrange an initial conversation at a convenient time.' },
                  { title: 'Honest conversations', text: 'We will be open about what we can offer, timescales and any limitations.' },
                  { title: 'Tailored plans', text: 'Support is designed around the learner or setting, not a fixed template.' },
                  { title: 'Regular review', text: 'We check in, gather feedback and adjust support as circumstances change.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon name="check" className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-surface-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Ready to start the conversation?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Whether you are a family or an educational setting, we are here to help you find the right way forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary shadow-sm transition-colors hover:bg-white">
                Talk to Us
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/faq" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                Read our FAQ
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
}
