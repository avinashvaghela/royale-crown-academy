import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

const navLinks = [
{ label: 'Home', path: '/' },
{ label: 'About', path: '/about' },
{ label: 'SEN Support', path: '/sen-support' },
{ label: 'Tutoring', path: '/tutoring' },
{ label: 'Education Staffing', path: '/education-staffing' },
{ label: 'For Schools', path: '/for-schools-colleges' },
{ label: 'How It Works', path: '/how-it-works' },
{ label: 'Resources', path: '/resources' }];


const logoUrl = typeof window !== 'undefined' && window.serenities ?
window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b') :
'';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = next ? 'hidden' : '';
      }
      return next;
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ?
      'bg-[#FAF9F6]/95 backdrop-blur-md border-[#E8D7B2]/50 shadow-sm' :
      'bg-[#FAF9F6] border-transparent'}`
      }
      role="banner">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-offset-2 rounded-md"
            aria-label="Royale Crown Academy Ltd home">

            <img
              src={logoUrl}
              alt="Royale Crown Academy Ltd logo"
              className="h-14 w-auto object-contain"
              width="56"
              height="56" />

            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-lg font-bold leading-tight text-[#102A56]">
                Royale Crown Academy
              </span>
              <span className="text-xs tracking-widest text-[#C6A15B] uppercase">Ltd</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-offset-2 ${
              location.pathname === link.path ?
              'text-[#102A56]' :
              'text-[#243247] hover:text-[#102A56]'}`
              }
              aria-current={location.pathname === link.path ? 'page' : undefined}>

                {link.label}
                {location.pathname === link.path &&
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#C6A15B]" />
              }
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-md bg-[#102A56] px-5 py-2.5 text-sm font-semibold text-[#FAF9F6] shadow-sm transition-all hover:bg-[#0B1D3A] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] focus-visible:ring-offset-2">

              Talk to Us
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E8F0] text-[#102A56] transition-colors hover:bg-[#EEF4FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] xl:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}>

              <Icon name={isOpen ? 'close' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen &&
      <div
        id="mobile-menu"
        className="fixed inset-x-0 top-20 z-50 h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#E2E8F0] bg-[#FAF9F6] px-4 pb-8 pt-6 shadow-2xl xl:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation">

          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center justify-between rounded-md px-4 py-3.5 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102A56] ${
            location.pathname === link.path ?
            'bg-[#102A56]/5 text-[#102A56]' :
            'text-[#243247] hover:bg-[#EEF4FA] hover:text-[#102A56]'}`
            }
            aria-current={location.pathname === link.path ? 'page' : undefined}>

                {link.label}
                <Icon name="chevronRight" className="h-5 w-5 text-[#C6A15B]" />
              </Link>
          )}
            <div className="mt-6 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6">
              <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#102A56] px-5 py-3 text-base font-semibold text-[#FAF9F6] shadow-sm transition-colors hover:bg-[#0B1D3A]">

                Talk to Us
              </Link>
              <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-[#102A56] px-5 py-3 text-base font-medium text-[#102A56] transition-colors hover:bg-[#102A56] hover:text-[#FAF9F6]">

                Find Support
              </Link>
            </div>
          </nav>
        </div>
      }
    </header>);

}