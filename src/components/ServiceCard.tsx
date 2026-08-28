import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ServiceCard({ icon, title, description, href, linkText = 'Learn more' }) {
  const CardWrapper = href ? Link : 'div';
  return (
    <CardWrapper
      to={href || undefined}
      className={`group flex h-full flex-col rounded-md border border-surface-200 bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
      href ? 'cursor-pointer' : ''}`
      }>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-600">{description}</p>
      {href &&
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {linkText}
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      }
    </CardWrapper>);

}