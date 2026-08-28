import React from 'react';
import Icon from './Icon';

export default function TestimonialCard({ quote, name, role, context }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-6 shadow-sm">
      <Icon name="quote" className="h-8 w-8 text-[#C6A15B]/60" />
      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-[#243247]">"{quote}"</blockquote>
      <div className="mt-6 border-t border-[#E2E8F0] pt-4">
        <p className="font-heading text-sm font-semibold text-[#102A56]">{name}</p>
        <p className="text-xs text-[#243247]">{role}</p>
        {context && <p className="mt-1 text-xs text-[#243247]/70">{context}</p>}
      </div>
    </div>
  );
}
