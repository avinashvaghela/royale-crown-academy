import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import FAQAccordion from '../components/FAQAccordion';
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

export default function FAQ() {
  const heroRef = useReveal();
  const parentRef = useReveal();
  const schoolRef = useReveal();
  const generalRef = useReveal();
  const ctaRef = useReveal();

  const parentFAQs = [
    { question: 'What age groups do you support?', answer: 'We work with children and young people across primary, secondary and college settings. Please contact us to discuss the specific age group and needs you have in mind.' },
    { question: 'Do you only work with learners who have SEN?', answer: 'No. While SEN support is a core part of our work, we also provide personalised tutoring, catch-up support and other services for a wide range of learners.' },
    { question: 'Can sessions take place online?', answer: 'Yes, where appropriate and agreed, we offer online tutoring and support. We also provide face-to-face sessions depending on location, availability and the learner\'s needs.' },
    { question: 'How do I know if my child needs extra support?', answer: 'Signs can include struggling to keep up, losing confidence, finding certain subjects difficult, or needing a different approach. We are happy to discuss your concerns in a confidential consultation.' },
    { question: 'What information do I need to provide?', answer: 'It helps to know your child\'s age or year group, the areas they find difficult, any relevant reports or diagnoses, and your goals for support. You do not need a formal diagnosis to start a conversation.' },
    { question: 'How are tutors and specialists matched to my child?', answer: 'We match based on the learner\'s needs, personality, goals and the specialist\'s experience. We aim for a good fit from the start and review regularly.' },
  ];

  const schoolFAQs = [
    { question: 'How do schools request support?', answer: 'Schools and colleges can complete our request form, email or call us. We will arrange a consultation to understand your requirements and propose a suitable plan.' },
    { question: 'What types of staffing do you provide?', answer: 'We provide Teaching Assistants, SEN Teaching Assistants, Cover Supervisors, tutors and other education support professionals, depending on your needs.' },
    { question: 'Can you support learners in our school or college?', answer: 'Yes. We provide in-setting support, one-to-one tuition, small-group programmes and staffing solutions, depending on the arrangement agreed.' },
    { question: 'What areas do you cover?', answer: 'We support families, schools and colleges across the UK. Coverage for specific services may vary by location; please contact us to confirm availability in your area.' },
    { question: 'How quickly can support begin?', answer: 'Timescales depend on the type of support, location and availability. After an initial consultation, we aim to propose a plan promptly and keep you informed throughout.' },
  ];

  const generalFAQs = [
    { question: 'How much does support cost?', answer: 'Costs depend on the type of support, frequency, location and specialist required. We provide clear information after understanding your needs, with no hidden fees.' },
    { question: 'What is your cancellation policy?', answer: 'Our cancellation and refund policy is available on our Refund & Cancellation Policy page. We ask for reasonable notice where possible.' },
    { question: 'How do you keep learners safe?', answer: 'Safeguarding is central to our work. We follow safer recruitment, safeguarding training, clear reporting procedures and online safety measures. Read more on our Safeguarding page.' },
    { question: 'How is my data used?', answer: 'We process personal data in line with UK GDPR and the Data Protection Act 2018. You can read more in our Privacy Policy.' },
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
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#E8D7B2]">FAQ</span>
                  <span className="h-px w-12 bg-[#C6A15B]" />
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                  Questions we are often asked
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#FAF9F6]/85">
                  If you cannot find the answer you are looking for, please <Link to="/contact" className="font-semibold text-[#C6A15B] underline hover:text-[#E8D7B2]">contact us</Link> and we will be happy to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div ref={parentRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">For parents and carers</h2>
              <div className="mt-8">
                <FAQAccordion items={parentFAQs} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF4FA] py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div ref={schoolRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">For schools and colleges</h2>
              <div className="mt-8">
                <FAQAccordion items={schoolFAQs} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div ref={generalRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-2xl font-bold text-[#102A56] sm:text-3xl">General questions</h2>
              <div className="mt-8">
                <FAQAccordion items={generalFAQs} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#102A56] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="font-heading text-3xl font-bold text-[#FAF9F6] sm:text-4xl">Still have questions?</h2>
              <p className="mt-5 text-lg text-[#FAF9F6]/80">We would be glad to hear from you. Choose the pathway that best describes you.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-[#C6A15B] px-8 py-4 text-base font-semibold text-[#0B1D3A] shadow-lg transition-all hover:bg-[#E8D7B2] hover:shadow-xl">
                  I am a Parent/Carer
                </Link>
                <Link to="/for-schools-colleges" className="inline-flex items-center rounded-md border border-[#FAF9F6]/30 px-8 py-4 text-base font-semibold text-[#FAF9F6] transition-all hover:bg-[#FAF9F6]/10">
                  I am a School/College
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
