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

export default function SENSupport() {
  const heroRef = useReveal();
  const introRef = useReveal();
  const areasRef = useReveal();
  const approachRef = useReveal();
  const ctaRef = useReveal();

  const senAreas = [
  { icon: 'puzzle', title: 'Autism / ASC', text: 'Structured, predictable support that respects sensory preferences, builds communication skills and reduces anxiety.' },
  { icon: 'zap', title: 'ADHD', text: 'Engaging, movement-friendly sessions that harness strengths, build focus and support self-regulation strategies.' },
  { icon: 'bookOpen', title: 'Dyslexia', text: 'Targeted literacy support that builds phonological awareness, reading fluency, spelling confidence and comprehension.' },
  { icon: 'target', title: 'Dyscalculia', text: 'Practical, visual maths support that strengthens number sense, reasoning and problem-solving confidence.' },
  { icon: 'heart', title: 'SEMH', text: 'Nurturing support for social, emotional and mental health needs, focusing on relationships, resilience and readiness to learn.' },
  { icon: 'lightbulb', title: 'Learning difficulties', text: 'Patient, multi-sensory approaches that break learning into manageable steps and celebrate progress.' },
  { icon: 'users', title: 'Additional learning needs', text: 'Support for learners who need a different pace, format or approach, with or without a formal diagnosis.' },
  { icon: 'home', title: 'School reintegration', text: 'Gentle, structured support for learners returning to education after absence, illness or placement change.' }];


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
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">SEN & SEND</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  SEN & SEND Support
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  Personalised special educational needs support designed around the learner. We work with children and young people with a wide range of needs, strengths and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={introRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Support that fits the learner</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    No two learners with SEN are the same. Our support is tailored around the individual, drawing on their interests, strengths and the strategies that help them learn best. We do not make medical or diagnostic claims; instead, we focus on understanding needs and delivering practical, person-centred support.
                  </p>
                  <p className="mt-4 leading-relaxed text-[#243247]/75">
                    We work with learners who have Education, Health and Care Plans (EHCPs), those with identified SEN support needs, and those who are awaiting assessment or simply need a different approach.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-[#102A56]">How support is delivered</h3>
                  <ul className="mt-5 space-y-4">
                    {['One-to-one SEN support', 'Small-group sessions', 'In-home, in-school or college-based support', 'Online support where appropriate', 'Targeted intervention programmes', 'Transition and reintegration support'].map((item) =>
                    <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8D7B2]/30 text-[#102A56]">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-[#243247]/80">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={areasRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Support for a wide range of needs</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">We support learners across a wide range of special educational needs and additional learning needs.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {senAreas.map((area, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
                      <Icon name={area.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{area.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/75 leading-relaxed">{area.text}</p>
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
                      <p className="font-heading text-2xl font-bold text-[#FAF9F6]">Personalised SEN support built around the learner.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Our SEN approach</h2>
                  <div className="mt-6 space-y-5 leading-relaxed text-[#243247]/80">
                    <p>We begin by listening. Before any support is put in place, we seek to understand the learner's profile, preferences, history and goals. Where appropriate, we work alongside families, schools, SENCOs and other professionals to ensure a joined-up approach.</p>
                    <p>Support plans are flexible. We review progress regularly, adapt strategies as needs change, and keep communication open so that families and settings always know how things are going.</p>
                    <p>We respect each learner's dignity and individuality. Our aim is to build confidence, independence and a positive relationship with learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border-l-4 border-[#C6A15B] bg-[#E8D7B2]/10 p-6">
              <div className="flex items-start gap-4">
                <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-[#C6A15B]" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#102A56]">Important note</h3>
                  <p className="mt-2 leading-relaxed text-[#243247]/80">Royale Crown Academy Ltd provides educational support. We do not diagnose medical or neurodevelopmental conditions, and we do not provide therapy, mental health treatment or legal advice. Where a learner has additional health or therapeutic needs, we work alongside appropriate professionals and encourage families to seek specialist guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Discuss your child's support needs</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">Every learner deserves support that understands them. Tell us a little about your situation and we will be in touch to talk through how we might help.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl">
                Make an Enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}