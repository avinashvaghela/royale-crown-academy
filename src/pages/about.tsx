import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const values = [
{ icon: 'heart', title: 'Learner-centred', text: 'Every decision starts with the learner: their strengths, needs, aspirations and wellbeing.' },
{ icon: 'users', title: 'Inclusive', text: 'We believe every young person deserves the opportunity to learn, grow and feel valued.' },
{ icon: 'shield', title: 'Safe and accountable', text: 'Safeguarding, transparency and professional integrity guide everything we do.' },
{ icon: 'target', title: 'Purposeful', text: 'We focus on meaningful progress, not quick fixes, and celebrate steps forward of every size.' },
{ icon: 'messageCircle', title: 'Collaborative', text: 'We work closely with parents, carers, schools, colleges and other professionals.' },
{ icon: 'trendingUp', title: 'Ambitious', text: 'We set high expectations for ourselves and the support we provide, always looking to improve.' }];


const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

export default function AboutPage() {
  return (
    <PageLayout>
      <SEOHead
        title="About Us | Our Mission, Values & Approach"
        description="Learn about Royale Crown Academy Ltd's mission to provide personalised SEN support, tutoring and education staffing that builds confidence, inclusion and progress across the UK."
        path="/about" />


      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FA]/50 pt-20">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#E8D7B2]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#102A56]/5 blur-3xl" />
        <LogoWatermark opacity={0.03} size={400} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">About us</p>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#102A56] sm:text-5xl">About Royale Crown Academy Ltd</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#243247]">
                We are a UK education company dedicated to personalised SEN support, tutoring and education staffing. Our purpose is simple: to help children and young people build confidence, overcome barriers and make meaningful progress.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-8 shadow-sm sm:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E8D7B2]/20" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name="compass" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">Our mission</h2>
                  <p className="mt-4 leading-relaxed text-[#243247]">
                    To provide high-quality, personalised educational support that empowers learners, reassures families and strengthens schools and colleges. We exist to make sure that no learner is left behind because their needs do not fit a standard model.
                  </p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-8 shadow-sm sm:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#102A56]/5" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name="lightbulb" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">Our vision</h2>
                  <p className="mt-4 leading-relaxed text-[#243247]">
                    A UK education landscape where every learner, regardless of background or need, can access the right support at the right time, delivered by professionals who care deeply about their progress.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF4FA] via-[#FAF9F6] to-[#E8D7B2]/30 p-10 shadow-md">
                <img src={logoUrl} alt="Royale Crown Academy Ltd" className="mx-auto h-36 w-auto object-contain opacity-95 sm:h-44" />
                <p className="mt-6 text-center text-sm font-medium text-[#243247]">A trusted partner for families, schools and colleges across the UK.</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our story</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Why we exist</h2>
                <div className="mt-6 space-y-4 leading-relaxed text-[#243247]">
                  <p>Royale Crown Academy Ltd was founded on the belief that education support should be as individual as the learner. Having seen too many young people fall through the gaps of one-size-fits-all provision, we set out to build an organisation that puts personalisation, safeguarding and partnership at its core.</p>
                  <p>Today we work with families, schools, colleges and education professionals across the UK, offering SEN support, personalised tutoring and staffing services that are flexible enough to meet real-world needs.</p>
                  <p>[Additional company history, milestones or context to be inserted here.]</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our values</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">What guides us</h2>
              <p className="mt-4 text-lg text-[#243247]">These principles shape how we work with learners, families, schools and colleges.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) =>
            <SectionReveal key={value.title} delay={index * 75}>
                <div className="flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{value.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#243247]">{value.text}</p>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative bg-[#102A56] py-16 text-[#FAF9F6] sm:py-24">
        <LogoWatermark opacity={0.04} size={400} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Our approach</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">How we work</h2>
              <p className="mt-4 text-lg text-[#FAF9F6]/80">We do not believe in off-the-shelf solutions. Every learner, school and family is different, so our support is built from careful listening, professional judgement and ongoing reflection.</p>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="space-y-6">
                {[
                { title: 'Assess and understand', text: 'We gather information from families, settings and any relevant documentation to understand the learner\'s starting point.' },
                { title: 'Plan with purpose', text: 'We create a tailored plan focused on realistic goals, preferred learning styles and the learner\'s interests.' },
                { title: 'Deliver with care', text: 'Sessions are delivered by professionals who are matched to the learner\'s needs and supervised appropriately.' },
                { title: 'Review and adapt', text: 'Progress is reviewed regularly, and plans are adjusted as needs, confidence and circumstances change.' }].
                map((item) =>
                <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF9F6]/20">
                      <Icon name="check" className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-[#FAF9F6]/80">{item.text}</p>
                    </div>
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section className="relative bg-[#FAF9F6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Who we support</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">We work across the UK</h2>
              <p className="mt-4 text-lg text-[#243247]">We support a wide range of learners, families and education settings.</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
            { title: 'Children and young people', text: 'Learners who need extra support to thrive academically, socially or emotionally.', icon: 'smile' },
            { title: 'Parents and carers', text: 'Families looking for trusted, personalised support and clear communication.', icon: 'heart' },
            { title: 'Schools', text: 'Primary, secondary and specialist schools seeking SEN support, tutoring or staffing.', icon: 'school' },
            { title: 'Colleges', text: 'Post-16 settings needing targeted learner support or education professionals.', icon: 'users' }].
            map((item) =>
            <div key={item.title} className="rounded-lg border border-[#E2E8F0] bg-[#EEF4FA]/50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#243247]">{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#EEF4FA]/50 py-16 sm:py-24">
        <LogoWatermark opacity={0.03} size={360} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#102A56] sm:text-4xl">Want to know more?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#243247]">Whether you are exploring support for the first time or looking for a trusted partner for your school or college, we would be glad to hear from you.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#102A56] px-8 py-4 text-lg font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md">
                Talk to Us <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <Link to="/team" className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-[#FAF9F6] px-8 py-4 text-lg font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                Meet Our Team
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}