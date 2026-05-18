import React from 'react';

export default function CTAButton({
  label,
  onClick,
  className = 'cta',
  href,
  target,
  rel,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
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
