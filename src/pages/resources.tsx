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

export default function Resources() {
  const heroRef = useReveal();
  const categoriesRef = useReveal();
  const resourcesRef = useReveal();

  const categories = ['SEN Support', 'Tutoring', 'Parent Guides', 'School Resources', 'Learning Strategies', 'Exam Preparation', 'Education Insights'];

  const resources = [
  { title: '[Article title placeholder: SEN support topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'SEN Support', date: '[Date to be inserted]' },
  { title: '[Article title placeholder: Tutoring topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'Tutoring', date: '[Date to be inserted]' },
  { title: '[Article title placeholder: Parent guide topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'Parent Guides', date: '[Date to be inserted]' },
  { title: '[Article title placeholder: School resource topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'School Resources', date: '[Date to be inserted]' },
  { title: '[Article title placeholder: Learning strategy topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'Learning Strategies', date: '[Date to be inserted]' },
  { title: '[Article title placeholder: Exam preparation topic]', excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]', category: 'Exam Preparation', date: '[Date to be inserted]' }];


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
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">Resource Centre</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  Resources
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  A growing collection of articles, guides and insights for parents, carers, schools and colleges. The articles below are SEO-friendly templates ready to be replaced with original content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={categoriesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) =>
                <button
                  key={category}
                  type="button"
                  className="rounded-full border border-[#E5EAF1] bg-white px-5 py-2.5 text-sm font-medium text-[#102A56] transition-all hover:border-[#C6A15B]/40 hover:bg-[#FAF9F6]">

                    {category}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={resourcesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource, i) =>
                <div key={i} className="group flex h-full flex-col rounded-2xl border border-[#E5EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-6 bg-[#C6A15B]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">{resource.category}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-[#102A56]">{resource.title}</h3>
                    <p className="mt-3 flex-1 text-[#243247]/75 leading-relaxed">{resource.excerpt}</p>
                    <p className="mt-4 text-xs text-[#243247]/50">{resource.date}</p>
                    <Link to="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#102A56] hover:text-[#C6A15B]">
                      Read more <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#E5EAF1] bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-[#C6A15B]" />
                <div>
                  <h2 className="font-heading text-xl font-semibold text-[#102A56]">Article template structure</h2>
                  <p className="mt-3 text-[#243247]/80 leading-relaxed">Each article should include: a clear title, author name, publication date, updated date, category tags, an introduction, structured headings, practical guidance, a conclusion and links to related articles. Replace the placeholders above with original, accurate content.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}