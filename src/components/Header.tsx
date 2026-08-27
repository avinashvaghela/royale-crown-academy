import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

const LOGO_FILE_ID = '6600755f5142dd22b970862dd49fc10d';

const navLinks = [
{ label: 'About', path: '/about' },
{ label: 'Parents', path: '/for-parents' },
{ label: 'Councils', path: '/for-councils' },
{ label: 'Schools', path: '/for-schools-colleges' },
{ label: 'Tutoring', path: '/tutoring' },
{ label: 'Special Needs', path: '/sen-support' },
{ label: 'Safeguarding', path: '/safeguarding' },
{ label: 'Resources', path: '/resources' },
{ label: 'FAQs', path: '/faq' },
{ label: 'Contact', path: '/contact' }];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoUrl, setLogoUrl] = useState(`https://royalecrown.serenitiesai.com/api/files/public/${LOGO_FILE_ID}`);
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.serenities) {
      setLogoUrl(window.serenities.files.url(LOGO_FILE_ID));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (typeof document !== 'undefined') document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between gap-4 text-sm">
            {/* Logo + tagline */}
            <Link
              to="/"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Royale Crown Academy home">

              <img
                src={logoUrl}
                alt="Royale Crown Academy logo"
                className="h-9 w-auto object-contain" />

              <div className="hidden sm:block leading-tight">
                <div className="font-heading text-base font-bold text-primary-foreground">Royale Crown Academy</div>
                <div className="text-xs text-primary-foreground/70">Premium UK Education Services</div>
              </div>
            </Link>

            {/* Phone */}
            <a
              href="tel:07553539869"
              className="hidden md:flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">

              <Icon name="phone" className="h-4 w-4" />
              <span className="font-medium">07553 539869</span>
            </a>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/tutoring"
                className="hidden sm:inline-flex items-center rounded-full border border-primary-foreground/40 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">

                Get a Tutor
              </Link>
              <Link
                to="/join-us"
                className="hidden sm:inline-flex items-center rounded-full border border-primary-foreground/40 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">

                Tutor for Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/40 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">

                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 border-b ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-neutral shadow-sm' : 'bg-background border-transparent'}`
        }>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
              aria-label="Royale Crown Academy home">

              <img
                src={logoUrl}
                alt="Royale Crown Academy logo"
                className="h-12 w-auto object-contain" />

            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`
                }
                aria-current={isActive(link.path) ? 'page' : undefined}>

                  {link.label}
                  {isActive(link.path) &&
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-secondary" />
                }
                </Link>
              )}
            </nav>

            {/* Mobile action bar */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href="tel:07553539869"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Call us">

                <Icon name="phone" className="h-5 w-5" />
              </a>
              <button
                type="button"
                onClick={toggleMobile}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral text-primary transition-colors hover:bg-surface-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>

                <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div
        id="mobile-menu"
        className="fixed inset-x-0 top-[7rem] z-50 h-[calc(100vh-7rem)] overflow-y-auto border-t border-neutral bg-background px-4 pb-8 pt-4 shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation">

          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center justify-between border-b border-neutral py-3.5 text-base font-semibold ${
            isActive(link.path) ? 'text-primary' : 'text-foreground'}`
            }
            aria-current={isActive(link.path) ? 'page' : undefined}>

                {link.label}
                <Icon name="chevronRight" className="h-5 w-5 text-secondary" />
              </Link>
          )}
            <div className="mt-6 flex flex-col gap-3">
              <Link
              to="/tutoring"
              className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">

                Get a Tutor
              </Link>
              <Link
              to="/join-us"
              className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">

                Tutor for Us
              </Link>
              <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">

                Login
              </Link>
            </div>
          </nav>
        </div>
      }
    </header>);

}