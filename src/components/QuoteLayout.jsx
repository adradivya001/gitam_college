import React from 'react';
import { Container } from './common/Container';
import { Quote } from 'lucide-react';
import './QuoteLayout.css';

export function QuoteLayout({ sectionConfig }) {
  const quote = sectionConfig?.quote || '';
  const author = sectionConfig?.author || '';

  return (
    <section className="quote-layout-section visual-section">
      <Container>
        <div className="quote-layout-content">
          <Quote size={36} className="quote-layout-icon" />
          <blockquote className="quote-layout-text">
            "{quote}"
          </blockquote>
          <cite className="quote-layout-author">— {author}</cite>
        </div>
      </Container>
    </section>
  );
}
