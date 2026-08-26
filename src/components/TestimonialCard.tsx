import React from 'react';
import Icon from './Icon';

export default function TestimonialCard({ quote, name, role, context }) {
  return (
    <blockquote className="flex h-full flex-col rounded-md border border-surface-200 bg-background p-6 shadow-sm">
      <Icon name="quote" className="h-8 w-8 text-accent" />
      <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">“{quote}”</p>
      <footer className="mt-6 border-t border-surface-200 pt-4">
        <p className="font-heading text-sm font-semibold text-foreground">{name}</p>
        {role && <p className="text-xs text-surface-500">{role}</p>}
        {context && <p className="mt-1 text-xs text-surface-500">{context}</p>}
      </footer>
    </blockquote>
  );
}
