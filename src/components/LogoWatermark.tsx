import React from 'react';

const logoUrl = typeof window !== 'undefined' && window.serenities
  ? window.serenities.files.url('6bc96ae7cd439802480ecbdbdc283e0b')
  : '';

export default function LogoWatermark({ className = '', opacity = 0.04, size = 320 }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <img
        src={logoUrl}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        style={{ width: size, height: 'auto', opacity }}
      />
    </div>
  );
}
