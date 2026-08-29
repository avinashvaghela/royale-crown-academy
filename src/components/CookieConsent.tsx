import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const STORAGE_KEY = 'rca_cookie_consent';

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setConsent(JSON.parse(stored));
    } catch {}

    const handleOpen = () => setShowPreferences(true);
    window.addEventListener('openCookiePreferences', handleOpen);
    return () => window.removeEventListener('openCookiePreferences', handleOpen);
  }, []);

  const saveConsent = (newConsent) => {
    setConsent(newConsent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    } catch {}
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() });
  const rejectNonEssential = () => saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() });
  const savePreferences = () => saveConsent({ ...prefs, timestamp: Date.now() });

  if (consent && !showPreferences) return null;

  return (
    <>
      {!consent &&
      <div
        className="fixed inset-x-0 bottom-0 z-[70] border-t border-surface-200 bg-background p-4 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent">

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Icon name="cookie" className="h-5 w-5 text-primary" />
                  <h2 className="font-heading text-base font-semibold text-foreground">Cookie preferences</h2>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-surface-600">
                  We use necessary cookies to make this website work. With your consent, we may also use analytics and marketing cookies to understand how visitors use our site. You can change your preferences at any time. Read our <Link to="/cookie-policy" className="font-medium text-primary underline">Cookie Policy</Link>.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-md border border-surface-300 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-100">

                  Manage preferences
                </button>
                <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-md border border-surface-300 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-100">

                  Reject non-essential
                </button>
                <button
                type="button"
                onClick={acceptAll}
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">

                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      {showPreferences &&
      <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-4 sm:items-center" role="dialog" aria-modal="true" aria-label="Cookie preferences centre">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Manage cookie preferences</h2>
                <p className="mt-1 text-sm text-surface-500">Choose which cookies you allow.</p>
              </div>
              <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="rounded-md p-1 text-surface-500 hover:bg-surface-100 hover:text-foreground"
              aria-label="Close preferences">

                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-md border border-surface-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Necessary</h3>
                  <span className="text-xs font-medium text-surface-500">Always on</span>
                </div>
                <p className="mt-1 text-sm text-surface-600">Essential for the website to function. Cannot be disabled.</p>
              </div>
              <div className="rounded-md border border-surface-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Analytics</h3>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })} />

                    <div className="h-6 w-11 rounded-full bg-surface-300 transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2" />
                    <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
                  </label>
                </div>
                <p className="mt-1 text-sm text-surface-600">Helps us understand how visitors use our website.</p>
              </div>
              <div className="rounded-md border border-surface-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Marketing</h3>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })} />

                    <div className="h-6 w-11 rounded-full bg-surface-300 transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2" />
                    <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
                  </label>
                </div>
                <p className="mt-1 text-sm text-surface-600">Used to deliver relevant marketing communications.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="rounded-md border border-surface-300 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-100">

                Cancel
              </button>
              <button
              type="button"
              onClick={savePreferences}
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">

                Save preferences
              </button>
            </div>
          </div>
        </div>
      }
    </>);

}