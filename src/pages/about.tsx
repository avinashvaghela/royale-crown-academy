import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const heroRef = useReveal();
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const approachRef = useReveal();
  const whoRef = useReveal();
  const ctaRef = useReveal();

  const values = [
  { icon: 'heart', title: 'Learner-centred', text: 'Every decision starts with the learner: their strengths, needs, aspirations and wellbeing.' },
  { icon: 'users', title: 'Inclusive', text: 'We believe every young person deserves the opportunity to learn, grow and feel valued.' },
  { icon: 'shield', title: 'Safe and accountable', text: 'Safeguarding, transparency and professional integrity guide everything we do.' },
  { icon: 'target', title: 'Purposeful', text: 'We focus on meaningful progress, not quick fixes, and celebrate steps forward of every size.' },
  { icon: 'messageCircle', title: 'Collaborative', text: 'We work closely with parents, carers, schools, colleges and other professionals.' },
  { icon: 'trendingUp', title: 'Ambitious', text: 'We set high expectations for ourselves and the support we provide, always looking to improve.' }];


  return (
    <div className="min-h-screen bg-[#FAF9F6] font-body text-[#243247]">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#102A56] pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 opacity-10">
            <LogoWatermark className="h-[140%] w-[140%] -translate-x-1/4 -translate-y-1/4 text-[#FAF9F6]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#102A56] via-[#102A56]/95 to-[#0B1D3A]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={heroRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="h-px w-12 bg-[#C6A15B]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">About Us</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  About Royale Crown Academy Ltd
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  We are a UK education company dedicated to personalised SEN support, tutoring and education staffing. Our purpose is simple: to help children and young people build confidence, overcome barriers and make meaningful progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={missionRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name="compass" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">Our mission</h2>
                  <p className="mt-4 leading-relaxed text-[#243247]/80">
                    To provide high-quality, personalised educational support that empowers learners, reassures families and strengthens schools and colleges. We exist to make sure that no learner is left behind because their needs do not fit a standard model.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56]">
                    <Icon name="lightbulb" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">Our vision</h2>
                  <p className="mt-4 leading-relaxed text-[#243247]/80">
                    A UK education landscape where every learner, regardless of background or need, can access the right support at the right time, delivered by professionals who care deeply about their progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={valuesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">What guides us</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">These principles shape how we work with learners, families, schools and colleges.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
                      <Icon name={value.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{value.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/75 leading-relaxed">{value.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={approachRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#102A56] to-[#0B1D3A] shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logoUrl} alt="Royale Crown Academy crest" className="h-32 w-32 opacity-20" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A]/90 to-transparent p-8">
                      <p className="font-heading text-2xl font-bold text-[#FAF9F6]">Personalised support, professional standards.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Our approach</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    We do not believe in off-the-shelf solutions. Every learner, school and family is different, so our support is built from careful listening, professional judgement and ongoing reflection.
                  </p>
                  <div className="mt-8 space-y-5">
                    {[
                    { title: 'Assess and understand', text: 'We gather information from families, settings and any relevant documentation to understand the learner\'s starting point.' },
                    { title: 'Plan with purpose', text: 'We create a tailored plan focused on realistic goals, preferred learning styles and the learner\'s interests.' },
                    { title: 'Deliver with care', text: 'Sessions are delivered by professionals who are matched to the learner\'s needs and supervised appropriately.' },
                    { title: 'Review and adapt', text: 'Progress is reviewed regularly, and plans are adjusted as needs, confidence and circumstances change.' }].
                    map((item, i) =>
                    <div key={i} className="flex gap-4">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/20 text-[#102A56]">
                          <Icon name="check" className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-semibold text-[#102A56]">{item.title}</h3>
                          <p className="mt-1 text-sm text-[#243247]/75">{item.text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 text-[#FAF9F6] lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={whoRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">Who we support</h2>
                <p className="mt-5 text-lg text-[#FAF9F6]/80">We work across the UK with a wide range of learners, families and education settings.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                { title: 'Children and young people', text: 'Learners who need extra support to thrive academically, socially or emotionally.', icon: 'smile' },
                { title: 'Parents and carers', text: 'Families looking for trusted, personalised support and clear communication.', icon: 'heart' },
                { title: 'Schools', text: 'Primary, secondary and specialist schools seeking SEN support, tutoring or staffing.', icon: 'school' },
                { title: 'Colleges', text: 'Post-16 settings needing targeted learner support or education professionals.', icon: 'users' }].
                map((item, i) =>
                <div key={i} className="rounded-xl border border-[#FAF9F6]/10 bg-[#FAF9F6]/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-[#FAF9F6]/15">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#FAF9F6]/20">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#FAF9F6]/80">{item.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Want to know more?</h2>
              <p className="mt-5 text-lg text-[#243247]/80">Whether you are exploring support for the first time or looking for a trusted partner for your school or college, we would be glad to hear from you.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-[#102A56] px-8 py-4 text-base font-semibold text-[#FAF9F6] shadow-lg transition-all hover:bg-[#0B1D3A] hover:shadow-xl">
                  Talk to Us
                </Link>
                <Link to="/team" className="inline-flex items-center rounded-md border border-[#102A56] bg-[#FAF9F6] px-8 py-4 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}