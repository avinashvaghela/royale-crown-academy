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

export default function Tutoring() {
  const heroRef = useReveal();
  const levelsRef = useReveal();
  const subjectsRef = useReveal();
  const deliveryRef = useReveal();
  const ctaRef = useReveal();

  const levels = [
  { title: 'Primary Tuition', years: 'Key Stage 1 & 2', text: 'Building strong foundations in reading, writing, maths and confidence.' },
  { title: 'Secondary Tuition', years: 'Key Stage 3', text: 'Subject support and study habits to help learners thrive through Years 7–9.' },
  { title: 'GCSE Support', years: 'Key Stage 4', text: 'Focused support in English, maths, science and other GCSE subjects.' },
  { title: 'A-Level & Further', years: 'Key Stage 5', text: 'Advanced subject support where offered and arranged.' }];


  const subjects = [
  { name: 'English', desc: 'Reading, writing, comprehension, spelling, grammar and communication confidence.' },
  { name: 'Maths', desc: 'Number, calculation, algebra, geometry, statistics and problem-solving.' },
  { name: 'Science', desc: 'Biology, chemistry, physics and combined science support.' },
  { name: 'Study Skills', desc: 'Organisation, revision strategies, note-taking and independent learning.' },
  { name: 'Exam Preparation', desc: 'Structured preparation for tests and exams without unrealistic grade promises.' },
  { name: 'Catch-up Support', desc: 'Targeted help to close gaps and rebuild confidence after disruption.' }];


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
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-12 bg-[#C6A15B]" />
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Personalised Tuition</span>
                  </div>
                  <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                    Personalised tutoring for every learner.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FAF9F6]/85">
                    One-to-one and small-group tuition across primary, secondary and GCSE subjects. Support is tailored to the learner's level, confidence and goals.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/contact" className="inline-flex items-center rounded-md bg-[#C6A15B] px-6 py-3 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      Find a Tutor
                    </Link>
                    <Link to="/subjects" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 bg-transparent px-6 py-3 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      View Subjects
                    </Link>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="aspect-square overflow-hidden rounded-2xl border border-[#FAF9F6]/10 bg-gradient-to-br from-[#0B1D3A] to-[#102A56] shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logoUrl} alt="Royale Crown Academy crest" className="h-48 w-auto opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={levelsRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Tuition for every stage</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">Support is tailored to the learner's age, stage and confidence.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {levels.map((level, i) =>
                <div key={i} className="rounded-xl border border-[#E5EAF1] bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#102A56] text-[#C6A15B] font-heading text-xl font-bold">{i + 1}</div>
                    <h3 className="font-heading text-xl font-semibold text-[#102A56]">{level.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[#C6A15B]">{level.years}</p>
                    <p className="mt-3 text-sm text-[#243247]/70">{level.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={subjectsRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Subjects we support</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">Core subjects and learning skills delivered with patience, structure and encouragement.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 h-1 w-12 rounded-full bg-[#C6A15B] transition-all group-hover:w-20" />
                    <h3 className="font-heading text-xl font-semibold text-[#102A56]">{subject.name}</h3>
                    <p className="mt-3 text-[#243247]/75 leading-relaxed">{subject.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={deliveryRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#102A56] to-[#0B1D3A] shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logoUrl} alt="Royale Crown Academy crest" className="h-32 w-32 opacity-20" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A]/90 to-transparent p-8">
                      <p className="font-heading text-2xl font-bold text-[#FAF9F6]">Flexible support that fits your family.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">How tutoring is delivered</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    We offer flexible delivery options to suit the learner, family and circumstances. Each arrangement is agreed in advance and reviewed regularly.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                    'One-to-one tutoring for focused, individual support',
                    'Small-group tutoring for peer learning and collaboration',
                    'Online tutoring where appropriate and agreed',
                    'In-home or in-setting sessions where arranged',
                    'Regular progress updates for parents and carers'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/20 text-[#102A56]">✓</span>
                        <span className="text-[#243247]/80">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Find the right tutor</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">Tell us about your learner and we will help you explore whether one-to-one or small-group tutoring is the right fit.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                Find a Tutor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}