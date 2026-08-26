import React, { useState } from 'react';
import Icon from './Icon';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] overflow-hidden">
            <h3>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-heading text-base font-semibold text-[#102A56] transition-colors hover:bg-[#EEF4FA]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-inset">

                {item.question}
                <span className={`ml-4 shrink-0 rounded-full bg-[#EEF4FA] p-1 text-[#102A56] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <Icon name="chevronDown" className="h-5 w-5" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              hidden={!isOpen}
              className={`px-5 transition-all duration-300 ease-in-out ${isOpen ? 'pb-5 pt-0' : 'h-0 py-0'}`}>

              {isOpen &&
              <div className="text-sm leading-relaxed text-[#243247]">
                  {item.answer}
                </div>
              }
            </div>
          </div>);

      })}
    </div>);

}