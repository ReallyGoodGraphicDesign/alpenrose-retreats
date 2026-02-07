import React from 'react';
import CTAButton from './CTAButton';
import { sanitizeHtml } from '../utils/sanitize';

function decodeHTMLEntities(str) {
  if (!str) return str;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = str;
  return textarea.value;
}

export default function SectionBlock({
  sectionId,
  section,
  onCtaClick,
  panelClassName,
}) {
  if (!section?.enabled) return null;

  return (
    <div className={`text-panel ${panelClassName}`} id={sectionId}>
      <h2 className="section-title">{decodeHTMLEntities(section.title)}</h2>
      <div
        className="section-text"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.text) }}
      />
      <CTAButton
        label={section.cta_label || 'Learn More'}
        onClick={() => onCtaClick({ type: 'section', sectionId })}
      />
    </div>
  );
}
