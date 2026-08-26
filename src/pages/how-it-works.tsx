import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

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

export default function HowItWorks() {
  const heroRef = useReveal();
  const parentRef = useReveal();
  const schoolRef = useReveal();
  const expectRef = useReveal();
  const ctaRef = useReveal();

  const parentSteps = [
  { number: '1', icon: 'messageCircle', title: 'Make an enquiry', desc: 'Tell us about your child, their needs and the support you are looking for.' },
  { number: '2', icon: 'users', title: 'Understand needs', desc: 'We listen, ask questions and build a clear picture of strengths, goals and preferences.' },
  { number: '3', icon: 'clipboardList', title: 'Create a support approach', desc: 'We propose a tailored plan and match the right tutor or SEN support professional.' },
  { number: '4', icon: 'play', title: 'Begin support', desc: 'Sessions begin with clear goals, regular communication and a focus on confidence.' },
  { number: '5', icon: 'trendingUp', title: 'Review progress', desc: 'We reflect on progress together and adjust the plan as your child develops.' }];


  const schoolSteps = [
  { number: '1', icon: 'messageCircle', title: 'Tell us your requirements', desc: 'Share your setting’s needs, whether staffing, tuition or a targeted intervention.' },
  { number: '2', icon: 'users', title: 'Discuss the provision', desc: 'We explore your learners, timetable, priorities and any SEN or safeguarding considerations.' },
  { number: '3', icon: 'clipboardList', title: 'Identify appropriate support', desc: 'We propose a plan and match the right professionals or tutors to your setting.' },
  { number: '4', icon: 'play', title: 'Arrange delivery', desc: 'We support a smooth start, clear agreements and appropriate induction.' },
  { number: '5', icon: 'trendingUp', title: 'Maintain communication', desc: 'Regular updates, feedback and review keep the provision aligned with your needs.' }];


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
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Our Process</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  How it works
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  Whether you are a parent, carer, school leader or college professional, our process is designed to be clear, supportive and focused on getting the right support in place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={parentRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For parents and carers</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Your journey to the right support</h2>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {parentSteps.map((step, i) =>
                <div key={i} className="relative rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102A56] text-[#C6A15B]">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                    <span className="absolute right-4 top-4 font-heading text-3xl font-bold text-[#C6A15B]/20">{step.number}</span>
                    <h3 className="mt-4 font-heading text-base font-semibold text-[#102A56]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/70 leading-relaxed">{step.desc}</p>
                  </div>
                )}
              </div>
              <div className="mt-12 text-center">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-[#102A56] px-6 py-3 text-base font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A]">
                  Start Your Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={schoolRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">For schools and colleges</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">A partnership approach to provision</h2>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {schoolSteps.map((step, i) =>
                <div key={i} className="relative rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102A56] text-[#C6A15B]">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                    <span className="absolute right-4 top-4 font-heading text-3xl font-bold text-[#C6A15B]/20">{step.number}</span>
                    <h3 className="mt-4 font-heading text-base font-semibold text-[#102A56]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/70 leading-relaxed">{step.desc}</p>
                  </div>
                )}
              </div>
              <div className="mt-12 text-center">
                <Link to="/for-schools-colleges" className="inline-flex items-center rounded-md border border-[#102A56] bg-[#FAF9F6] px-6 py-3 text-base font-semibold text-[#102A56] transition-all hover:bg-[#102A56] hover:text-[#FAF9F6]">
                  School & College Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={expectRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">What to expect from us</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    We aim to make every step feel straightforward and professional. You can expect clear communication, honest advice and support that is tailored to the situation.
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                  { title: 'A prompt response', text: 'We aim to acknowledge enquiries quickly and arrange an initial conversation at a convenient time.' },
                  { title: 'Honest conversations', text: 'We will be open about what we can offer, timescales and any limitations.' },
                  { title: 'Tailored plans', text: 'Support is designed around the learner or setting, not a fixed template.' },
                  { title: 'Regular review', text: 'We check in, gather feedback and adjust support as circumstances change.' }].
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
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Ready to start the conversation?</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">Whether you are a family or an educational setting, we are here to help you find the right way forward.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl">
                Talk to Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}