import React from 'react';
import Icon from './Icon';

export default function StepCard({ number, title, description, icon }) {
  return (
    <div className="relative flex flex-col rounded-md border border-surface-200 bg-background p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {number}
      </div>
      {icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-surface-100 text-primary">
          <Icon name={icon} className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-surface-600">{description}</p>
    </div>
  );
}
