import React from 'react';

export default function CTAButton({ label, onClick, className = 'cta' }) {
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
