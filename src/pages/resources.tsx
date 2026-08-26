import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import ResourceCard from '../components/ResourceCard';
import Icon from '../components/Icon';

const categories = [
'SEN Support',
'Tutoring',
'Parent Guides',
'School Resources',
'Learning Strategies',
'Exam Preparation',
'Education Insights'];


const resources = [
{
  title: '[Article title placeholder: SEN support topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'SEN Support',
  date: '[Date to be inserted]',
  href: '#'
},
{
  title: '[Article title placeholder: Tutoring topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'Tutoring',
  date: '[Date to be inserted]',
  href: '#'
},
{
  title: '[Article title placeholder: Parent guide topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'Parent Guides',
  date: '[Date to be inserted]',
  href: '#'
},
{
  title: '[Article title placeholder: School resource topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'School Resources',
  date: '[Date to be inserted]',
  href: '#'
},
{
  title: '[Article title placeholder: Learning strategy topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'Learning Strategies',
  date: '[Date to be inserted]',
  href: '#'
},
{
  title: '[Article title placeholder: Exam preparation topic]',
  excerpt: '[Short excerpt placeholder. Replace with a summary of the article content.]',
  category: 'Exam Preparation',
  date: '[Date to be inserted]',
  href: '#'
}];


export default function ResourcesPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Resources | Royale Crown Academy Ltd"
        description="Explore our education resource hub: SEN support, tutoring, parent guides, school resources, learning strategies, exam preparation and education insights."
        path="/resources" />


      {/* Hero */}
      <section className="bg-surface-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Resources
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-600">
                A growing collection of articles, guides and insights for parents, carers, schools and colleges. The articles below are SEO-friendly templates ready to be replaced with original content.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) =>
              <button
                key={category}
                type="button"
                className="rounded-full border border-surface-300 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-100">

                  {category}
                </button>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Resources grid */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) =>
            <SectionReveal key={index} delay={index * 75}>
                <ResourceCard
                title={resource.title}
                excerpt={resource.excerpt}
                category={resource.category}
                date={resource.date}
                href={resource.href} />

              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Article template note */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-md border border-surface-200 bg-background p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">Article template structure</h2>
                  <p className="mt-3 text-surface-600 leading-relaxed">
                    Each article should include: a clear title, author name, publication date, updated date, category tags, an introduction, structured headings, practical guidance, a conclusion and links to related articles. Replace the placeholders above with original, accurate content.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}