import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import LogoWatermark from '../components/LogoWatermark';

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

export default function ForCouncils() {
  const heroRef = useReveal();
  const section1Ref = useReveal();
  const section2Ref = useReveal();
  const ctaRef = useReveal();

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
                <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">For Public Sector</span>
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl max-w-4xl">
                Education services designed around local authority requirements.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FAF9F6]/85">
                Royale Crown Academy works with councils and local authorities to provide flexible, personalised education support, tuition and staffing solutions that respond to local needs.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-[#C6A15B] px-6 py-3 text-base font-semibold text-[#0B1D3A] shadow-sm transition-all hover:bg-[#E8D7B2] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                  Discuss a Council Requirement
                </Link>
                <Link to="/contact" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 bg-transparent px-6 py-3 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                  Submit an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={section1Ref} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">How we support councils and local authorities</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                  We understand that local authority education provision must be flexible, accountable and responsive. Our services are designed to complement existing provision and support learners with a range of needs.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                { title: 'Tuition Provision', desc: 'One-to-one and small-group tuition across key subjects and stages, tailored to individual learner requirements.' },
                { title: 'SEN Support', desc: 'Specialist educational support for learners with additional needs, delivered with sensitivity and clear communication.' },
                { title: 'Alternative Education Support', desc: 'Flexible provision for learners who require alternative or supplementary education arrangements where appropriate.' },
                { title: 'Educational Intervention', desc: 'Targeted catch-up programmes and academic intervention designed to support progress and confidence.' },
                { title: 'Education Staffing', desc: 'Supply of tutors, teaching assistants, SEN support staff and other education professionals as required.' },
                { title: 'Bespoke Programmes', desc: 'Programmes shaped around local priorities, learner cohorts and commissioning requirements.' }].
                map((item, i) =>
                <div key={i} className="group rounded-xl border border-[#E5EAF1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 h-1 w-12 rounded-full bg-[#C6A15B] transition-all group-hover:w-20" />
                    <h3 className="font-heading text-xl font-semibold text-[#102A56]">{item.title}</h3>
                    <p className="mt-3 text-[#243247]/75 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={section2Ref} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h2 className="font-heading text-3xl font-bold text-[#102A56] sm:text-4xl">Professional, accountable partnership</h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#243247]/80">
                    We approach every local authority engagement with professionalism, transparency and a clear focus on learner outcomes. Our team is happy to discuss service-level arrangements, reporting requirements and safeguarding expectations.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                    'Clear communication with commissioning teams',
                    'Structured service agreements and reporting',
                    'Safeguarding and safer recruitment processes',
                    'Flexible delivery models to suit local needs'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/20 text-[#102A56]">✓</span>
                        <span className="text-[#243247]/80">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#102A56] to-[#0B1D3A] shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logoUrl} alt="Royale Crown Academy crest" className="h-32 w-32 opacity-20" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1D3A]/90 to-transparent p-8">
                      <p className="font-heading text-2xl font-bold text-[#FAF9F6]">Reliable education support for local communities.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border-2 border-[#C6A15B]/30 lg:block" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Discuss a council or local authority requirement</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">Our team is ready to explore how Royale Crown Academy can support your local education provision.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]">
                Discuss a Council Requirement
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}