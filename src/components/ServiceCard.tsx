import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ServiceCard({ icon, title, description, href, linkText }) {
  const content =
  <>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-[#FAF9F6]">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-[#102A56]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#243247]">{description}</p>
      {linkText &&
    <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#C6A15B] transition-colors group-hover:text-[#102A56]">
          {linkText}
          <Icon name="arrowRight" className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
    }
    </>;


  if (href) {
    return (
      <Link
        to={href}
        className="group flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C6A15B]/30 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56]">

        {content}
      </Link>);

  }

  return (
    <div className="group flex h-full flex-col rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] p-6 shadow-sm">
      {content}
    </div>);

}