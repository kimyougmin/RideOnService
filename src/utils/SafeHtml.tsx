import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import React from 'react';

interface SafeHtmlProps {
  html: string;
  style?: string;
}

export default function SafeHtml({ html, style }: SafeHtmlProps) {
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);

  const sanitizedHtml = DOMPurify.sanitize(html);

  return (
    <div
      className={`${style}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
