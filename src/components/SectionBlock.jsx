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
  href,
}) {
  if (!section?.enabled) return null;

  return (
    <div className={`text-panel ${panelClassName}`} id={sectionId}>
      <h2 className="section-title">{decodeHTMLEntities(section.title)}</h2>
      <p
        className="section-text"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.text) }}
      />
      {(section.cta_enabled || (section.cta2_enabled && section.cta2_url)) && (
        <div className="cta-row">
          {section.cta_enabled && (
            <CTAButton
              label={section.cta_label || 'Learn More'}
              onClick={() => onCtaClick({ type: 'section', sectionId })}
              href={href}
            />
          )}
          {section.cta2_enabled && section.cta2_url && (
            <CTAButton
              label={section.cta2_label || 'Learn More'}
              href={section.cta2_url}
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </div>
      )}
    </div>
  );
}
