import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';
import Icon from '../components/Icon';

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

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

export default function EducationStaffing() {
  const heroRef = useReveal();
  const rolesRef = useReveal();
  const processRef = useReveal();
  const saferRef = useReveal();
  const ctaRef = useReveal();

  const roles = [
    { title: 'Teaching Assistants', desc: 'General classroom and learning support professionals for primary, secondary and specialist settings.' },
    { title: 'SEN Teaching Assistants', desc: 'Support staff with experience and understanding of autism, ADHD, dyslexia, SEMH and additional needs.' },
    { title: 'Cover Supervisors', desc: 'Reliable cover professionals to maintain continuity and behaviour expectations in the classroom.' },
    { title: 'Tutors', desc: 'Subject specialists and intervention tutors for one-to-one and small-group support.' },
    { title: 'Education Support Professionals', desc: 'A range of professionals to complement your existing team and provision.' },
    { title: 'Flexible Arrangements', desc: 'Day-to-day cover, short-term contracts and longer-term placements to suit your needs.' },
  ];

  const process = [
    { number: '01', title: 'Understand requirement', desc: 'We listen to your needs, culture, timescales and any specific learner or safeguarding considerations.' },
    { number: '02', title: 'Identify suitable professionals', desc: 'We search our network and recruitment processes for candidates whose skills and values align with your setting.' },
    { number: '03', title: 'Checks and verification', desc: 'We follow our safer recruitment and verification procedures before any introduction or placement.' },
    { number: '04', title: 'Introduce and arrange placement', desc: 'We facilitate introductions, agree terms and support a smooth start in your setting.' },
    { number: '05', title: 'Ongoing communication', desc: 'We stay in touch, gather feedback and address any questions throughout the placement.' },
  ];

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
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Education Staffing</span>
                  </div>
                  <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                    Reliable education professionals for your setting.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FAF9F6]/85">
                    From Teaching Assistants to Cover Supervisors, we help schools and colleges find the right people to support learners and maintain continuity.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/contact" className="inline-flex items-center rounded-md bg-[#C6A15B] px-6 py-3 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      Request Staff
                    </Link>
                    <Link to="/safeguarding" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 bg-transparent px-6 py-3 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      Safeguarding
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
            <div ref={rolesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Professionals we provide</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">Staffing solutions to support classrooms, learners with SEN and day-to-day cover requirements.</p>
              </div>
              <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {roles.map((role, i) => (
                  <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 h-1 w-12 rounded-full bg-[#C6A15B] transition-all group-hover:w-20" />
                    <h3 className="font-heading text-xl font-semibold text-[#102A56]">{role.title}</h3>
                    <p className="mt-3 text-[#243247]/75 leading-relaxed">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={processRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Our staffing process</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">A careful, five-step process designed to match the right professional to your setting.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {process.map((step, i) => (
                  <div key={i} className="relative rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <span className="font-heading text-3xl font-bold text-[#C6A15B]/40">{step.number}</span>
                    <h3 className="mt-3 font-heading text-base font-semibold text-[#102A56]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/70 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={saferRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Safer recruitment and verification</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    We take recruitment seriously. Our procedures are designed to help ensure that professionals introduced to your setting are suitable for their role and aligned with your safeguarding expectations.
                  </p>
                  <p className="mt-4 text-[#243247]/70 leading-relaxed">
                    Specific checks, references, training requirements and verification procedures are applied in line with the organisation's actual practice and the requirements of each role.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-[#102A56]">What we consider</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      'Relevant experience and qualifications where required',
                      'Identity and right-to-work verification',
                      'Reference checks',
                      'Disclosure and barring checks in line with role requirements',
                      'Safeguarding awareness and training',
                      'Suitability for the specific setting and learners',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/20 text-[#102A56]">✓</span>
                        <span className="text-[#243247]/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Discuss your staffing needs</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">Tell us about the role, your setting and your timescales. We will listen and propose a way forward.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                Request Staff
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
