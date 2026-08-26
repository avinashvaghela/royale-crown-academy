import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ResourceCard({ title, excerpt, category, date, href }) {
  return (
    <article className="group flex h-full flex-col rounded-md border border-surface-200 bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[16/9] rounded-t-md bg-gradient-to-br from-primary/10 to-surface-200" />
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-primary">
          {category}
        </span>
        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          <Link to={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-600">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <time className="text-xs text-surface-500">{date}</time>
          <Link to={href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Read more
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
