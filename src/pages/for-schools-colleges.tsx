import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import SchoolForm from '../components/SchoolForm';
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

export default function ForSchoolsColleges() {
  const heroRef = useReveal();
  const servicesRef = useReveal();
  const benefitsRef = useReveal();
  const formRef = useReveal();

  const services = [
  { title: 'SEN Tuition', desc: 'Specialist tuition and support for learners with identified additional needs.', icon: 'brain' },
  { title: 'Targeted Tutoring', desc: 'Focused support in English, maths, science and study skills for individuals or small groups.', icon: 'bookOpen' },
  { title: 'Catch-up Support', desc: 'Programmes designed to help learners close gaps and rebuild confidence.', icon: 'trendingUp' },
  { title: 'One-to-one Learner Support', desc: 'Dedicated support for learners who need individual attention to thrive.', icon: 'user' },
  { title: 'Small-group Programmes', desc: 'Structured group interventions for learners with similar needs or goals.', icon: 'users' },
  { title: 'Teaching Assistants', desc: 'Classroom and learner support professionals matched to your setting.', icon: 'briefcase' },
  { title: 'Cover Supervisors', desc: 'Reliable cover to maintain continuity in the absence of teaching staff.', icon: 'clipboardList' },
  { title: 'Flexible Staffing Support', desc: 'Short-term, longer-term and ad-hoc staffing solutions.', icon: 'settings' }];


  const benefits = [
  'Responsive, partnership-focused service',
  'Support aligned to your school or college priorities',
  'Clear communication and regular updates',
  'Safeguarding-aware professionals and processes',
  'Flexible arrangements to suit your budget and timetable'];


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
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">For Schools & Colleges</span>
                  </div>
                  <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                    Education support that works around your setting.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FAF9F6]/85">
                    We partner with headteachers, SENCOs, DSLs, school business managers and college leaders to deliver SEN tuition, targeted tutoring, catch-up support and flexible staffing.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#request-support" className="inline-flex items-center rounded-md bg-[#C6A15B] px-6 py-3 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      Request Support
                    </a>
                    <Link to="/education-staffing" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 bg-transparent px-6 py-3 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                      Explore Staffing
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
            <div ref={servicesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Services for educational settings</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">A range of flexible support options designed around the needs of your learners and staff.</p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#102A56]">{service.title}</h3>
                    <p className="mt-2 text-sm text-[#243247]/75 leading-relaxed">{service.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 text-[#FAF9F6] lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={benefitsRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl font-bold sm:text-4xl">Why partner with us?</h2>
                  <p className="mt-5 text-lg text-[#FAF9F6]/80 leading-relaxed">
                    We understand the pressures schools and colleges face. Our aim is to make it easier to access high-quality, reliable support when you need it.
                  </p>
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) =>
                  <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAF9F6]/20 text-[#FAF9F6]">✓</span>
                      <span className="text-[#FAF9F6]/80">{benefit}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="request-support" className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div ref={formRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="overflow-hidden rounded-2xl border border-[#E5EAF1] bg-white shadow-xl">
                <div className="bg-[#102A56] px-8 py-8">
                  <h2 className="font-heading text-2xl font-bold text-[#FAF9F6] sm:text-3xl">Request support</h2>
                  <p className="mt-2 text-[#FAF9F6]/80">Complete the form below and a member of our team will be in touch to discuss your school or college's requirements.</p>
                </div>
                <div className="p-8 sm:p-12">
                  <SchoolForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}