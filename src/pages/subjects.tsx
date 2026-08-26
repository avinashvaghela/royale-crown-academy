import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';

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

export default function Subjects() {
  const heroRef = useReveal();
  const sectionRef = useReveal();
  const ctaRef = useReveal();

  const subjectGroups = [
  {
    category: 'Core Subjects',
    subjects: [
    { name: 'English', levels: 'Primary, GCSE, A-Level where offered' },
    { name: 'Maths', levels: 'Primary, GCSE, A-Level where offered' },
    { name: 'Science', levels: 'Primary, GCSE, A-Level where offered' }]

  },
  {
    category: 'Sciences',
    subjects: [
    { name: 'Biology', levels: 'GCSE, A-Level where offered' },
    { name: 'Chemistry', levels: 'GCSE, A-Level where offered' },
    { name: 'Physics', levels: 'GCSE, A-Level where offered' }]

  },
  {
    category: 'Humanities & Social Sciences',
    subjects: [
    { name: 'History', levels: 'Primary, GCSE, A-Level where offered' },
    { name: 'Geography', levels: 'Primary, GCSE, A-Level where offered' },
    { name: 'Religious Studies', levels: 'GCSE, A-Level where offered' }]

  },
  {
    category: 'Languages & Business',
    subjects: [
    { name: 'Modern Languages', levels: 'GCSE, A-Level where offered' },
    { name: 'Business Studies', levels: 'GCSE, A-Level where offered' },
    { name: 'Computing / IT', levels: 'Primary, GCSE, A-Level where offered' }]

  }];


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
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Academic Subjects</span>
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl max-w-4xl">
                Subject support across the curriculum.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FAF9F6]/85">
                We offer personalised tuition and academic support in a wide range of subjects. If you cannot see what you need, please ask — our subject offering continues to grow.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={sectionRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-12 lg:grid-cols-2">
                {subjectGroups.map((group, groupIndex) =>
                <div key={groupIndex} className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#C6A15B]" />
                      <h2 className="font-heading text-2xl font-bold text-[#102A56]">{group.category}</h2>
                    </div>
                    <div className="space-y-4">
                      {group.subjects.map((subject, i) =>
                    <div key={i} className="flex items-center justify-between rounded-lg border border-[#E5EAF1] bg-[#FAF9F6] p-4 transition-all hover:border-[#C6A15B]/40 hover:shadow-sm">
                          <div>
                            <h3 className="font-heading text-lg font-semibold text-[#102A56]">{subject.name}</h3>
                            <p className="text-sm text-[#243247]/65">{subject.levels}</p>
                          </div>
                          <Link to="/contact" className="shrink-0 rounded-md bg-[#102A56] px-4 py-2 text-sm font-semibold text-[#FAF9F6] transition-colors hover:bg-[#0B1D3A]">
                            Enquire
                          </Link>
                        </div>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Cannot see the subject you need?</h2>
              <p className="mt-5 text-lg text-[#243247]/80">Our subject network is expanding. Contact us to discuss your requirements and we will let you know how we can help.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                Ask Us About a Subject
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}