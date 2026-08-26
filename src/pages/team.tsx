import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import SectionReveal from '../components/SectionReveal';
import TeamMemberCard from '../components/TeamMemberCard';
import Icon from '../components/Icon';

const teamMembers = [
{
  name: '[Name to be inserted]',
  role: '[Role to be inserted, e.g. Director / SEN Lead]',
  specialisms: '[Specialisms to be inserted]',
  experience: '[Relevant experience to be inserted]',
  approach: '[Teaching or leadership approach to be inserted]'
},
{
  name: '[Name to be inserted]',
  role: '[Role to be inserted, e.g. SEN Specialist]',
  specialisms: '[Specialisms to be inserted]',
  experience: '[Relevant experience to be inserted]',
  approach: '[Teaching approach to be inserted]'
},
{
  name: '[Name to be inserted]',
  role: '[Role to be inserted, e.g. Lead Tutor]',
  specialisms: '[Subjects/specialisms to be inserted]',
  experience: '[Relevant experience to be inserted]',
  approach: '[Teaching approach to be inserted]'
},
{
  name: '[Name to be inserted]',
  role: '[Role to be inserted, e.g. Education Staffing Coordinator]',
  specialisms: '[Specialisms to be inserted]',
  experience: '[Relevant experience to be inserted]',
  approach: '[Approach to be inserted]'
}];


export default function TeamPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Our Team | Royale Crown Academy Ltd"
        description="Meet the team behind Royale Crown Academy Ltd. Editable team profiles for tutors, SEN specialists and education professionals."
        path="/team" />


      {/* Hero */}
      <section className="bg-surface-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our team
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-surface-600">
                We are a team of education professionals committed to personalised support, safeguarding and meaningful progress. The profiles below are editable placeholders to be completed with verified information.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) =>
            <SectionReveal key={index} delay={index * 75}>
                <TeamMemberCard
                name={member.name}
                role={member.role}
                specialisms={member.specialisms}
                experience={member.experience}
                approach={member.approach} />

              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Join our team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-600">
              We are always interested in hearing from dedicated education professionals. If you would like to discuss opportunities with us, please get in touch.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
              Get in Touch
              <Icon name="arrowRight" className="h-5 w-5" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>);

}