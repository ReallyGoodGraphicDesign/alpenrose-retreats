import createDOMPurify from 'dompurify';

// Initialize DOMPurify with the current window/document (works in browser and tests)
const DOMPurify = createDOMPurify(typeof window !== 'undefined' ? window : global.window);

const config = {
  // Allow header tags and basic formatting, links and buttons
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'b', 'em', 'i', 'ul', 'ol', 'li', 'a',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button'
  ],
  ALLOWED_ATTR: [
    'href', 'title', 'target', 'rel',
    'type', 'disabled', 'role', 'tabindex', 'id', 'class',
    'aria-*', 'data-*'
  ]
};

export function sanitizeHtml(unsafeHtml) {
  if (!unsafeHtml) return '';
  const purifyFn =
    DOMPurify && typeof DOMPurify.sanitize === 'function'
      ? (s) => DOMPurify.sanitize(s, config)
      : // fallback basic sanitizer for environments where DOMPurify isn't available
        (s) =>
          s
            .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
            .replace(/\son\w+=("|')[^"']*("|')/gi, '')
            .replace(/\son\w+=[^\s>]+/gi, '');

  const clean = purifyFn(unsafeHtml);

  // Post-process sanitized HTML to enforce safe anchor/button attributes
  if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = clean;
    // anchors
    container.querySelectorAll('a').forEach((a) => {
      if (!a.getAttribute('rel')) a.setAttribute('rel', 'noopener noreferrer');
      if (!a.getAttribute('target')) a.setAttribute('target', '_blank');
    });
    // buttons
    container.querySelectorAll('button').forEach((b) => {
      if (!b.getAttribute('type')) b.setAttribute('type', 'button');
    });
    return container.innerHTML;
  }

  return clean;
}

export default sanitizeHtml;
