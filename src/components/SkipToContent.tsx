import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">

      Skip to main content
    </a>);

}