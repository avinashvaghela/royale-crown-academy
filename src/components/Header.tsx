import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

const LOGO_FILE_ID = '6600755f5142dd22b970862dd49fc10d';

const navGroups = [
{
  label: 'About',
  path: '/about',
  items: [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'How It Works', path: '/how-it-works' }]

},
{
  label: 'For Parents',
  path: '/for-parents',
  items: [
  { label: 'For Parents', path: '/for-parents' },
  { label: 'Private Tuition', path: '/tutoring' },
  { label: 'SEN Support', path: '/sen-support' },
  { label: 'Subjects', path: '/subjects' }]

},
{
  label: 'For Schools',
  path: '/for-schools-colleges',
  items: [
  { label: 'Schools & Colleges', path: '/for-schools-colleges' },
  { label: 'Education Staffing', path: '/education-staffing' }]

},
{
  label: 'For Councils',
  path: '/for-councils',
  items: []
},
{
  label: 'Safeguarding',
  path: '/safeguarding',
  items: []
},
{
  label: 'Resources',
  path: '/resources',
  items: [
  { label: 'Resources', path: '/resources' },
  { label: 'FAQ', path: '/faq' }]

},
{
  label: 'Contact',
  path: '/contact',
  items: []
}];


function useClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [logoUrl, setLogoUrl] = useState(`https://royalecrown.serenitiesai.com/api/files/public/${LOGO_FILE_ID}`);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.serenities) {
      setLogoUrl(window.serenities.files.url(LOGO_FILE_ID));
    }
  }, []);

  useClickOutside(dropdownRef, () => setOpenDropdown(null));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
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
  const isGroupActive = (group) =>
  location.pathname === group.path || group.items.some((i) => location.pathname === i.path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner" data-oid="/components/Header.tsx#o0">
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground pt-1.5" data-oid="/components/Header.tsx#o1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-oid="/components/Header.tsx#o2">
          <div className="flex h-10 items-center justify-between gap-8 text-sm" data-oid="/components/Header.tsx#o3">
            <div className="hidden sm:flex items-center gap-8 lg:gap-10" data-oid="/components/Header.tsx#o4">
              <a
                href="tel:07553539869"
                className="flex items-center gap-2 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                data-oid="/components/Header.tsx#o5">
                <Icon name="phone" className="h-4 w-4" data-oid="/components/Header.tsx#o6" />
                <span data-oid="/components/Header.tsx#o7">07553 539869</span>
              </a>
              <a
                href="mailto:info@royalecrownacademy.co.uk"
                className="hidden md:flex items-center gap-2 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                data-oid="/components/Header.tsx#o8">
                <Icon name="mail" className="h-4 w-4" data-oid="/components/Header.tsx#o9" />
                <span data-oid="/components/Header.tsx#o10">info@royalecrownacademy.co.uk</span>
              </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-5" data-oid="/components/Header.tsx#o11">
              <Link
                to="/book-consultation"
                className="hidden md:inline-flex items-center rounded-full border border-primary-foreground/30 px-4 py-1.5 font-medium transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                data-oid="/components/Header.tsx#o12">
                Book a Consultation
              </Link>
              <Link
                to="/join-us"
                className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-semibold text-primary transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                data-oid="/components/Header.tsx#o13">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 border-b ${
        scrolled ?
        'bg-background/95 backdrop-blur-md border-neutral shadow-sm' :
        'bg-background border-transparent'}`
        }
        data-oid="/components/Header.tsx#o14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-oid="/components/Header.tsx#o15">
          <div className="flex h-20 lg:h-24 items-center justify-between" data-oid="/components/Header.tsx#o16">
            <Link
              to="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
              aria-label="Royale Crown Academy home"
              data-oid="/components/Header.tsx#o17">
              <img
                src={logoUrl}
                alt="Royale Crown Academy logo"
                className="h-14 w-auto object-contain"
                width="80"
                height="80"
                data-oid="/components/Header.tsx#o18" />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary navigation"
              ref={dropdownRef}
              data-oid="/components/Header.tsx#o19">
              {navGroups.map((group) =>
              <div key={group.label} className="relative" data-oid="/components/Header.tsx#o20">
                  {group.items.length === 0 ?
                <Link
                  to={group.path}
                  className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive(group.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`
                  }
                  aria-current={isActive(group.path) ? 'page' : undefined}
                  data-oid="/components/Header.tsx#o21">
                      {group.label}
                      {isActive(group.path) &&
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-secondary" data-oid="/components/Header.tsx#o22" />
                  }
                    </Link> :

                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isGroupActive(group) ? 'text-primary' : 'text-foreground hover:text-primary'}`
                  }
                  aria-expanded={openDropdown === group.label}
                  aria-haspopup="true"
                  data-oid="/components/Header.tsx#o23">
                      {group.label}
                      <Icon
                    name="chevronDown"
                    className={`h-4 w-4 transition-transform ${openDropdown === group.label ? 'rotate-180' : ''}`}
                    data-oid="/components/Header.tsx#o24" />
                      {isGroupActive(group) &&
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-secondary" data-oid="/components/Header.tsx#o25" />
                  }
                    </button>
                }

                  {group.items.length > 0 && openDropdown === group.label &&
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-neutral bg-background shadow-lg py-2"
                  role="menu"
                  onMouseLeave={() => setOpenDropdown(null)}
                  data-oid="/components/Header.tsx#o26">
                      {group.items.map((item) =>
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                    isActive(item.path) ?
                    'bg-primary/5 text-primary font-semibold' :
                    'text-foreground hover:bg-surface-50 hover:text-primary'}`
                    }
                    role="menuitem"
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    data-oid="/components/Header.tsx#o27">
                          {item.label}
                        </Link>
                  )}
                    </div>
                }
                </div>
              )}
            </nav>

            {/* Mobile action bar */}
            <div className="flex items-center gap-2.5 lg:hidden" data-oid="/components/Header.tsx#o28">
              <Link
                to="/book-consultation"
                className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                data-oid="/components/Header.tsx#o29">Book Consultation

              </Link>
              <Link
                to="/join-us"
                className="hidden sm:inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                data-oid="/components/Header.tsx#o30">Join Us

              </Link>
              <a
                href="tel:07553539869"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Call us"
                data-oid="/components/Header.tsx#o31">
                <Icon name="phone" className="h-5 w-5" data-oid="/components/Header.tsx#o32" />
              </a>
              <button
                type="button"
                onClick={toggleMobile}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral text-primary transition-colors hover:bg-surface-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                data-oid="/components/Header.tsx#o33">
                <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" data-oid="/components/Header.tsx#o34" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div
        id="mobile-menu"
        className="fixed inset-x-0 top-[7rem] sm:top-[7.5rem] z-50 h-[calc(100vh-7rem)] sm:h-[calc(100vh-7.5rem)] overflow-y-auto border-t border-neutral bg-background px-4 pb-8 pt-4 shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        data-oid="/components/Header.tsx#o35">
          <nav className="flex flex-col" aria-label="Mobile navigation" data-oid="/components/Header.tsx#o36">
            {navGroups.map((group) =>
          <div key={group.label} className="border-b border-neutral last:border-0" data-oid="/components/Header.tsx#o37">
                {group.items.length === 0 ?
            <Link
              to={group.path}
              className={`flex items-center justify-between py-3.5 text-base font-semibold ${
              isActive(group.path) ? 'text-primary' : 'text-foreground'}`
              }
              aria-current={isActive(group.path) ? 'page' : undefined}
              data-oid="/components/Header.tsx#o38">
                    {group.label}
                    <Icon name="chevronRight" className="h-5 w-5 text-secondary" data-oid="/components/Header.tsx#o39" />
                  </Link> :

            <>
                    <button
                type="button"
                onClick={() => setOpenMobileGroup(openMobileGroup === group.label ? null : group.label)}
                className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-foreground"
                aria-expanded={openMobileGroup === group.label}
                data-oid="/components/Header.tsx#o40">
                      {group.label}
                      <Icon
                  name="chevronDown"
                  className={`h-5 w-5 text-secondary transition-transform ${
                  openMobileGroup === group.label ? 'rotate-180' : ''}`
                  }
                  data-oid="/components/Header.tsx#o41" />
                    </button>
                    {openMobileGroup === group.label &&
              <div className="pb-3 pl-4 flex flex-col gap-1" data-oid="/components/Header.tsx#o42">
                        {group.items.map((item) =>
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 text-sm ${
                  isActive(item.path) ?
                  'text-primary font-semibold' :
                  'text-foreground/80 hover:text-primary'}`
                  }
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  data-oid="/components/Header.tsx#o43">
                            {item.label}
                          </Link>
                )}
                      </div>
              }
                  </>
            }
              </div>
          )}
            <div className="mt-6 flex flex-col gap-3" data-oid="/components/Header.tsx#o44">
              <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              data-oid="/components/Header.tsx#o45">
                Book a Consultation
              </Link>
              <Link
              to="/join-us"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-accent/90"
              data-oid="/components/Header.tsx#o46">
                Join Our Team
              </Link>
            </div>
          </nav>
        </div>
      }
    </header>);

}