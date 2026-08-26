import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SectionReveal from '../components/SectionReveal';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const parentFAQs = [
{
  question: 'What age groups do you support?',
  answer: 'We work with children and young people across primary, secondary and college settings. Please contact us to discuss the specific age group and needs you have in mind.'
},
{
  question: 'Do you only work with learners who have SEN?',
  answer: 'No. While SEN support is a core part of our work, we also provide personalised tutoring, catch-up support and other services for a wide range of learners.'
},
{
  question: 'Can sessions take place online?',
  answer: 'Yes, where appropriate and agreed, we offer online tutoring and support. We also provide face-to-face sessions depending on location, availability and the learner\'s needs.'
},
{
  question: 'How do I know if my child needs extra support?',
  answer: 'Signs can include struggling to keep up, losing confidence, finding certain subjects difficult, or needing a different approach. We are happy to discuss your concerns in a confidential consultation.'
},
{
  question: 'What information do I need to provide?',
  answer: 'It helps to know your child\'s age or year group, the areas they find difficult, any relevant reports or diagnoses, and your goals for support. You do not need a formal diagnosis to start a conversation.'
},
{
  question: 'How are tutors and specialists matched to my child?',
  answer: 'We match based on the learner\'s needs, personality, goals and the specialist\'s experience. We aim for a good fit from the start and review regularly.'
}];


const schoolFAQs = [
{
  question: 'How do schools request support?',
  answer: 'Schools and colleges can complete our request form, email or call us. We will arrange a consultation to understand your requirements and propose a suitable plan.'
},
{
  question: 'What types of staffing do you provide?',
  answer: 'We provide Teaching Assistants, SEN Teaching Assistants, Cover Supervisors, tutors and other education support professionals, depending on your needs.'
},
{
  question: 'Can you support learners in our school or college?',
  answer: 'Yes. We provide in-setting support, one-to-one tuition, small-group programmes and staffing solutions, depending on the arrangement agreed.'
},
{
  question: 'What areas do you cover?',
  answer: 'We support families, schools and colleges across the UK. Coverage for specific services may vary by location; please contact us to confirm availability in your area.'
},
{
  question: 'How quickly can support begin?',
  answer: 'Timescales depend on the type of support, location and availability. After an initial consultation, we aim to propose a plan promptly and keep you informed throughout.'
}];


const generalFAQs = [
{
  question: 'How much does support cost?',
  answer: 'Costs depend on the type of support, frequency, location and specialist required. We provide clear information after understanding your needs, with no hidden fees.'
},
{
  question: 'What is your cancellation policy?',
  answer: 'Our cancellation and refund policy is available on our <a href="/refund-cancellation-policy" class="font-medium text-primary underline">Refund & Cancellation Policy</a> page. We ask for reasonable notice where possible.'
},
{
  question: 'How do you keep learners safe?',
  answer: 'Safeguarding is central to our work. We follow safer recruitment, safeguarding training, clear reporting procedures and online safety measures. Read more on our <a href="/safeguarding" class="font-medium text-primary underline">Safeguarding page</a>.'
},
{
  question: 'How is my data used?',
  answer: 'We process personal data in line with UK GDPR and the Data Protection Act 2018. You can read more in our <a href="/privacy-policy" class="font-medium text-primary underline">Privacy Policy</a>.'
}];


export default function FAQPage() {
  return (
    <PageLayout>
      <SEOHead
        title="FAQ | Frequently Asked Questions"
        description="Find answers to frequently asked questions about SEN support, tutoring, staffing, consultations, safeguarding and more from Royale Crown Academy Ltd."
        path="/faq" />


      {/* Hero */}
      <section className="bg-surface-50 pt-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
              <h1 id="faq-heading" className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Questions we are often asked
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-600">
                If you cannot find the answer you are looking for, please <Link to="/contact" className="font-medium text-primary underline">contact us</Link> and we will be happy to help.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Parent FAQs */}
      <section className="bg-background py-16 sm:py-20" aria-labelledby="parent-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 id="parent-faq-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              For parents and carers
            </h2>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="mt-8">
              <FAQAccordion items={parentFAQs} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* School FAQs */}
      <section className="bg-surface-50 py-16 sm:py-20" aria-labelledby="school-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 id="school-faq-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              For schools and colleges
            </h2>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="mt-8">
              <FAQAccordion items={schoolFAQs} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* General FAQs */}
      <section className="bg-background py-16 sm:py-20" aria-labelledby="general-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 id="general-faq-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              General questions
            </h2>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="mt-8">
              <FAQAccordion items={generalFAQs} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20" aria-labelledby="faq-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 id="faq-cta-heading" className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We would be glad to hear from you. Choose the pathway that best describes you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-white/90">

                I am a Parent/Carer
              </Link>
              <Link
                to="/for-schools-colleges"
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">

                I am a School/College
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}