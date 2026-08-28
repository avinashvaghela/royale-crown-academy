import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const footerLinks = {
  parents: [
  { label: 'For Parents', path: '/for-parents' },
  { label: 'SEN Support', path: '/sen-support' },
  { label: 'Personalised Tuition', path: '/tutoring' },
  { label: 'Subjects', path: '/subjects' },
  { label: 'How It Works', path: '/how-it-works' }],

  institutions: [
  { label: 'For Schools & Colleges', path: '/for-schools-colleges' },
  { label: 'For Councils', path: '/for-councils' },
  { label: 'Education Staffing', path: '/education-staffing' },
  { label: 'Safeguarding', path: '/safeguarding' }],

  company: [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Resources', path: '/resources' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Join Our Team', path: '/join-us' }],

  trust: [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  { label: 'Tutoring Terms', path: '/tutoring-terms' },
  { label: 'School & College Terms', path: '/school-college-terms' },
  { label: 'Safeguarding Policy', path: '/safeguarding-policy' },
  { label: 'Complaints Policy', path: '/complaints-policy' },
  { label: 'Accessibility', path: '/accessibility-statement' }]

};

const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('0f03a5beecd57526c67cdeb73a3ebf3d') :
'';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8D7B2]/50 bg-[#102A56] text-[#FAF9F6]" role="contentinfo" data-oid="/components/Footer.tsx#o0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" data-oid="/components/Footer.tsx#o1">
        <div className="grid gap-12 lg:grid-cols-12" data-oid="/components/Footer.tsx#o2">
          <div className="lg:col-span-4" data-oid="/components/Footer.tsx#o3">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-md" style={{ fontSize: '21px', lineHeight: '24.3px', width: '130px', height: '40px' }} data-oid="/components/Footer.tsx#o4"><img src={logoUrl} alt="Royale Crown Academy" className="h-14 w-auto object-contain" data-oid="/components/Footer.tsx#o5" />













            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#FAF9F6]/80" data-oid="/components/Footer.tsx#o9">
              Personalised SEN support, private tuition and education staffing for children, young people, families, schools, colleges and local authorities across the UK.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#FAF9F6]/80" data-oid="/components/Footer.tsx#o10">
              <p className="flex items-center gap-3" data-oid="/components/Footer.tsx#o11">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-[#C6A15B]" data-oid="/components/Footer.tsx#o12" />
                <a href="tel:07553539869" className="transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o13">07553 539869</a>
              </p>
              <p className="flex items-center gap-3" data-oid="/components/Footer.tsx#o14">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-[#C6A15B]" data-oid="/components/Footer.tsx#o15" />
                <a href="mailto:info@royalecrownacademy.co.uk" className="transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o16">info@royalecrownacademy.co.uk</a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4" data-oid="/components/Footer.tsx#o17">
            <div data-oid="/components/Footer.tsx#o18">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]" data-oid="/components/Footer.tsx#o19">For Parents</h3>
              <ul className="mt-4 space-y-2.5" data-oid="/components/Footer.tsx#o20">
                {footerLinks.parents.map((link) =>
                <li key={link.path} data-oid="/components/Footer.tsx#o21">
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o22">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div data-oid="/components/Footer.tsx#o23">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]" data-oid="/components/Footer.tsx#o24">Schools & Councils</h3>
              <ul className="mt-4 space-y-2.5" data-oid="/components/Footer.tsx#o25">
                {footerLinks.institutions.map((link) =>
                <li key={link.path} data-oid="/components/Footer.tsx#o26">
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o27">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div data-oid="/components/Footer.tsx#o28">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]" data-oid="/components/Footer.tsx#o29">Company</h3>
              <ul className="mt-4 space-y-2.5" data-oid="/components/Footer.tsx#o30">
                {footerLinks.company.map((link) =>
                <li key={link.path} data-oid="/components/Footer.tsx#o31">
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o32">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div data-oid="/components/Footer.tsx#o33">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#C6A15B]" data-oid="/components/Footer.tsx#o34">Trust & Policies</h3>
              <ul className="mt-4 space-y-2.5" data-oid="/components/Footer.tsx#o35">
                {footerLinks.trust.map((link) =>
                <li key={link.path} data-oid="/components/Footer.tsx#o36">
                    <Link to={link.path} className="text-sm text-[#FAF9F6]/80 transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o37">{link.label}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#FAF9F6]/10 pt-8 sm:flex-row" data-oid="/components/Footer.tsx#o38">
          <p className="text-xs text-[#FAF9F6]/60 text-center sm:text-left" data-oid="/components/Footer.tsx#o39">
            © {currentYear} Royale Crown Academy Ltd. All rights reserved. Company registration number: 17387038.
          </p>
          <div className="flex items-center gap-5" data-oid="/components/Footer.tsx#o40">
            <a href="#" className="text-[#FAF9F6]/60 transition-colors hover:text-[#C6A15B]" aria-label="LinkedIn" data-oid="/components/Footer.tsx#o41">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-oid="/components/Footer.tsx#o42"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-oid="/components/Footer.tsx#o43" /></svg>
            </a>
            <a href="#" className="text-[#FAF9F6]/60 transition-colors hover:text-[#C6A15B]" aria-label="Facebook" data-oid="/components/Footer.tsx#o44">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-oid="/components/Footer.tsx#o45"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z" data-oid="/components/Footer.tsx#o46" /></svg>
            </a>
            <a href="#" className="text-[#FAF9F6]/60 transition-colors hover:text-[#C6A15B]" aria-label="Instagram" data-oid="/components/Footer.tsx#o47">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-oid="/components/Footer.tsx#o48"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-oid="/components/Footer.tsx#o49" /></svg>
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
              className="text-xs text-[#FAF9F6]/60 underline transition-colors hover:text-[#C6A15B]" data-oid="/components/Footer.tsx#o50">

              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>);

}