import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SectionReveal from '../components/SectionReveal';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import SchoolContactForm from '../components/SchoolContactForm';
import Icon from '../components/Icon';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('school') === 'true' ? 'school' : 'parent');

  return (
    <PageLayout>
      <SEOHead
        title="Contact Us | Parents, Carers, Schools & Colleges"
        description="Contact Royale Crown Academy Ltd for personalised SEN support, tutoring or education staffing. Separate enquiry pathways for parents/carers and schools/colleges."
        path="/contact" />


      {/* Hero */}
      <section className="bg-surface-50 pt-20" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
              <h1 id="contact-heading" className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Talk to us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-600">
                Whether you are a parent, carer, school leader or college professional, we would be glad to hear from you. Choose the pathway that best describes you.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-background py-12" aria-labelledby="contact-details-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-md border border-surface-200 bg-surface-50 p-6 text-center shadow-sm">
                <Icon name="mail" className="mx-auto h-6 w-6 text-primary" />
                <h2 id="contact-details-heading" className="sr-only">Contact details</h2>
                <p className="mt-3 text-sm font-semibold text-foreground">Email</p>
                <a href="mailto:info@royalecrownacademy.co.uk" className="mt-1 text-sm text-surface-600 hover:text-foreground">
                  info@royalecrownacademy.co.uk
                </a>
              </div>
              <div className="rounded-md border border-surface-200 bg-surface-50 p-6 text-center shadow-sm">
                <Icon name="phone" className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Phone</p>
                <a href="tel:+440000000000" className="mt-1 text-sm text-surface-600 hover:text-foreground">
                  [Phone number to be inserted]
                </a>
              </div>
              <div className="rounded-md border border-surface-200 bg-surface-50 p-6 text-center shadow-sm">
                <Icon name="mapPin" className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Address</p>
                <p className="mt-1 text-sm text-surface-600">[Registered office to be inserted]</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Forms */}
      <section className="bg-background py-16 sm:py-20" aria-labelledby="form-tabs-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-surface-50 p-6 shadow-sm sm:p-10">
              <h2 id="form-tabs-heading" className="sr-only">Enquiry form</h2>
              <div className="flex flex-col gap-3 sm:flex-row" role="tablist" aria-label="Choose enquiry pathway">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'parent'}
                  aria-controls="parent-panel"
                  id="parent-tab"
                  onClick={() => setActiveTab('parent')}
                  className={`flex-1 rounded-md px-5 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeTab === 'parent' ?
                  'bg-primary text-primary-foreground' :
                  'border border-surface-300 bg-background text-foreground hover:bg-surface-100'}`
                  }>

                  I am a Parent/Carer
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'school'}
                  aria-controls="school-panel"
                  id="school-tab"
                  onClick={() => setActiveTab('school')}
                  className={`flex-1 rounded-md px-5 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeTab === 'school' ?
                  'bg-primary text-primary-foreground' :
                  'border border-surface-300 bg-background text-foreground hover:bg-surface-100'}`
                  }>

                  I am a School/College
                </button>
              </div>

              <div className="mt-8">
                <div
                  id="parent-panel"
                  role="tabpanel"
                  aria-labelledby="parent-tab"
                  hidden={activeTab !== 'parent'}>

                  {activeTab === 'parent' && <ContactForm audience="parent" />}
                </div>
                <div
                  id="school-panel"
                  role="tabpanel"
                  aria-labelledby="school-tab"
                  hidden={activeTab !== 'school'}>

                  {activeTab === 'school' && <SchoolContactForm />}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Privacy note */}
      <section className="bg-surface-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-6">
              <div className="flex items-start gap-4">
                <Icon name="lock" className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Your data</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600">
                    We only collect the information we need to respond to your enquiry. Your data is processed in line with UK GDPR and the Data Protection Act 2018. Read our <a href="/privacy-policy" className="font-medium text-primary underline">Privacy Policy</a> for more information. You can withdraw consent at any time by contacting us.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}