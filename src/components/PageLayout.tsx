import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import CookieConsent from './CookieConsent';

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`flex min-h-screen flex-col bg-background font-body text-foreground ${className}`}>
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>);

}