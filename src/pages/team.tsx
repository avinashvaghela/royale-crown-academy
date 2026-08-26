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

export default function Team() {
  const heroRef = useReveal();
  const teamRef = useReveal();
  const joinRef = useReveal();

  const teamMembers = [
    { name: '[Name to be inserted]', role: '[Role to be inserted]', specialisms: '[Specialisms to be inserted]', experience: '[Relevant experience to be inserted]', approach: '[Teaching or leadership approach to be inserted]' },
    { name: '[Name to be inserted]', role: '[Role to be inserted]', specialisms: '[Specialisms to be inserted]', experience: '[Relevant experience to be inserted]', approach: '[Teaching approach to be inserted]' },
    { name: '[Name to be inserted]', role: '[Role to be inserted]', specialisms: '[Specialisms to be inserted]', experience: '[Relevant experience to be inserted]', approach: '[Teaching approach to be inserted]' },
    { name: '[Name to be inserted]', role: '[Role to be inserted]', specialisms: '[Specialisms to be inserted]', experience: '[Relevant experience to be inserted]', approach: '[Approach to be inserted]' },
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
              <div className="mx-auto max-w-3xl text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="h-px w-12 bg-[#C6A15B]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Our Team</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  Meet the team
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  We are a team of education professionals committed to personalised support, safeguarding and meaningful progress. The profiles below are editable placeholders to be completed with verified information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={teamRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, i) => (
                  <div key={i} className="group rounded-2xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#EEF4FA] to-[#E8D7B2]/30">
                      <div className="flex h-full items-center justify-center">
                        <img src={logoUrl} alt="Royale Crown Academy crest" className="h-20 w-20 opacity-30" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-heading text-lg font-semibold text-[#102A56]">{member.name}</h3>
                      <p className="text-sm font-medium text-[#C6A15B]">{member.role}</p>
                      <div className="mt-4 space-y-2 text-sm text-[#243247]/75">
                        <p><span className="font-semibold text-[#102A56]">Specialisms:</span> {member.specialisms}</p>
                        <p><span className="font-semibold text-[#102A56]">Experience:</span> {member.experience}</p>
                        <p><span className="font-semibold text-[#102A56]">Approach:</span> {member.approach}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={joinRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Join our team</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">We are always interested in hearing from dedicated education professionals. If you would like to discuss opportunities with us, please get in touch.</p>
              <Link to="/join-us" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl">
                Apply to Join Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
