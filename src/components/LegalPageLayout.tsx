import React from 'react';
import PageLayout from './PageLayout';
import SectionReveal from './SectionReveal';
import SEOHead from './SEOHead';

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <PageLayout>
      <SEOHead title={title} description={`${title} for Royale Crown Academy Ltd.`} />
      <div className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-8 shadow-sm sm:p-12">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
              {lastUpdated &&
              <p className="mt-2 text-sm text-surface-500">Last updated: {lastUpdated}</p>
              }
              <div className="mt-8 space-y-5 text-surface-700 leading-relaxed">
                {children}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </PageLayout>);

}