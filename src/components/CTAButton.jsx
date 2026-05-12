import React from 'react';

export default function CTAButton({ label, onClick, className = 'cta', href }) {
  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          if (e.detail !== 0) {
            e.currentTarget.blur();
          }
        }}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={(e) => {
        if (e.detail !== 0) {
          e.currentTarget.blur();
        }
        onClick();
      }}
    >
      {label}
    </button>
  );
}
