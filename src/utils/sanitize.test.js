import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

// Provide a DOM for DOMPurify before importing the sanitizer
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;

import { sanitizeHtml } from './sanitize';

describe('sanitizeHtml', () => {
  it('removes script tags and inline handlers', () => {
    const unsafe = '<p>Hi</p><img src=x onerror=alert(1)><script>alert(1)</script>';
    const out = sanitizeHtml(unsafe);
    expect(out).not.toContain('<script');
    expect(out).not.toContain('onerror');
    expect(out).toContain('<p>Hi</p>');
  });

  it('keeps header tags and button, strips handlers and adds type to button', () => {
    const unsafe = '<h1>Title</h1><button onclick="evil()">Click</button>';
    const out = sanitizeHtml(unsafe);
    expect(out).toContain('<h1>Title</h1>');
    expect(out).toContain('<button');
    expect(out).not.toContain('onclick');
    expect(/type=("|')button("|')/.test(out)).toBe(true);
  });
});
