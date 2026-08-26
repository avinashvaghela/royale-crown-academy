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

export default function Safeguarding() {
  const heroRef = useReveal();
  const commitmentsRef = useReveal();
  const dslRef = useReveal();
  const reportingRef = useReveal();

  const commitments = [
    { icon: 'shield', title: 'Safeguarding-first culture', desc: 'The welfare of children and young people is central to every decision we make, from recruitment to delivery.' },
    { icon: 'users', title: 'Safer recruitment', desc: 'We follow robust recruitment and verification procedures for all education professionals.' },
    { icon: 'bookOpen', title: 'Safeguarding training', desc: 'Relevant staff and professionals receive safeguarding training appropriate to their role.' },
    { icon: 'alertTriangle', title: 'Clear reporting', desc: 'Concerns are escalated promptly through the appropriate channels, including the Designated Safeguarding Lead.' },
    { icon: 'monitor', title: 'Online safety', desc: 'Online sessions are delivered using secure arrangements and appropriate supervision.' },
    { icon: 'messageCircle', title: 'Open communication', desc: 'We encourage parents, carers, schools and learners to raise questions or concerns at any time.' },
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
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Safeguarding</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  Keeping children and young people safe
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  Safeguarding is at the heart of everything we do. We are committed to creating a safe, respectful environment where every learner can thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={commitmentsRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">What safeguarding means to us</h2>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {commitments.map((item, i) => (
                  <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/75 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div ref={dslRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm sm:p-10">
                <div className="flex items-start gap-4">
                  <Icon name="user" className="mt-0.5 h-8 w-8 shrink-0 text-[#C6A15B]" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">Designated Safeguarding Lead</h2>
                    <p className="mt-4 leading-relaxed text-[#243247]/80">[Name, role and contact details of the Designated Safeguarding Lead to be inserted here.]</p>
                    <p className="mt-4 leading-relaxed text-[#243247]/80">If you have a safeguarding concern, please contact our Designated Safeguarding Lead using the details above. If the matter is urgent or someone is at immediate risk, please contact the police or your local authority children's services team without delay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={reportingRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Reporting a concern</h2>
                  <div className="mt-6 space-y-5 leading-relaxed text-[#243247]/80">
                    <p>We take every safeguarding concern seriously. Concerns can be raised by parents, carers, learners, schools, colleges or members of the public.</p>
                    <p>All concerns are recorded, reviewed and escalated appropriately. Where a child is at immediate risk, we will always advise contacting the emergency services or local authority directly.</p>
                    <p>For non-urgent concerns, please email or call us using the contact details on our <Link to="/contact" className="font-semibold text-[#102A56] underline hover:text-[#C6A15B]">Contact page</Link> and ask to speak to the Designated Safeguarding Lead.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-[#102A56]">Useful contacts</h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      { icon: 'phone', text: 'In an emergency, always dial 999.' },
                      { icon: 'phone', text: 'NSPCC Helpline: 0808 800 5000' },
                      { icon: 'externalLink', text: 'Contact your local authority children\'s services team for advice and guidance.' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A15B]" />
                        <span className="text-[#243247]/80">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[#FAF9F6]/10 bg-[#FAF9F6]/10 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold text-[#FAF9F6]">Related policies</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Safeguarding Policy', path: '/safeguarding-policy' },
                  { label: 'Privacy Policy', path: '/privacy-policy' },
                  { label: 'Complaints Policy', path: '/complaints-policy' },
                  { label: 'Data Protection', path: '/data-protection' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="inline-flex items-center gap-2 text-sm font-medium text-[#FAF9F6]/80 hover:text-[#C6A15B]">
                      <Icon name="fileText" className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
