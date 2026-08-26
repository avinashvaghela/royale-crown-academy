import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const footerLinks = {
  services: [
  { label: 'SEN Support', path: '/sen-support' },
  { label: 'Personalised Tutoring', path: '/tutoring' },
  { label: 'Education Staffing', path: '/education-staffing' },
  { label: 'For Schools & Colleges', path: '/for-schools-colleges' },
  { label: 'How It Works', path: '/how-it-works' }],

  company: [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Resources', path: '/resources' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' }],

  trust: [
  { label: 'Safeguarding', path: '/safeguarding' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  { label: 'Complaints Policy', path: '/complaints-policy' },
  { label: 'Accessibility', path: '/accessibility-statement' }]

};

const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8D7B2]/50 bg-[#102A56] text-[#FAF9F6]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-md">
              <img
                src={logoUrl}
                alt="Royale Crown Academy Ltd logo"
                className="h-16 w-auto object-contain"
                width="64"
                height="64" />

              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-[#FAF9F6]">
                  Royale Crown Academy
                </span>
                <span className="text-xs tracking-widest text-[#C6A15B] uppercase">Ltd</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#FAF9F6]/80">
              Personalised SEN support, tutoring and education staffing for children, young people, families, schools and colleges across the UK.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#FAF9F6]/80">
              <p className="flex items-start gap-3">
                <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A15B]" />
                <span>[Registered office address to be inserted]</span>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-[#C6A15B]" />
                <a href="mailto:info@royalecrownacademy.co.uk" className="transition-colors hover:text-[#C6A15B]">info@royalecrownacademy.co.uk</a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-[#C6A15B]" />
                <a href="tel:+440000000000" className="transition-colors hover:text-[#C6A15B]">[Phone number to be inserted]</a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Services</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.services.map((link) =>
                <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((link) =>
                <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">Trust & Policies</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.trust.map((link) =>
                <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#FAF9F6]/10 pt-8 sm:flex-row">
          <p className="text-xs text-[#FAF9F6]/60 text-center sm:text-left">
            © {currentYear} Royale Crown Academy Ltd. All rights reserved. Company registration number: [To be inserted]. Registered office: [To be inserted].
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#FAF9F6]/60 transition-colors hover:text-[#C6A15B]" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" className="text-[#FAF9F6]/60 transition-colors hover:text-[#C6A15B]" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z" /></svg>
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
              className="text-xs text-[#FAF9F6]/60 underline transition-colors hover:text-[#C6A15B]">

              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>);

}