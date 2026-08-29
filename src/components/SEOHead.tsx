import React, { useEffect } from 'react';

export default function SEOHead({ title, description, path, type = 'website', noindex = false }) {
  const siteName = 'Royale Crown Academy Ltd';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${path || window.location.pathname}` : '';

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description || '');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description || '', 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:site_name', siteName, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description || '');
    if (noindex) setMeta('robots', 'noindex, nofollow');
  }, [fullTitle, description, canonical, type, noindex]);

  return null;
}