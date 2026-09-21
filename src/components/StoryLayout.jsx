import React from 'react';
import { Container } from './common/Container';
import './StoryLayout.css';

export function StoryLayout({ sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'OUR STORY';
  const title = sectionConfig?.title || '';
  const paragraphs = sectionConfig?.paragraphs || [];
  const image = sectionConfig?.image || null;

  return (
    <section className="story-layout-section visual-section">
      <Container>
        <div className="story-editorial-grid">
          {image && (
            <div className="story-image-col">
              <div className="story-img-frame">
                <img src={image} alt={eyebrow} loading="lazy" />
              </div>
            </div>
          )}

          <div className="story-content-col">
            <span className="micro-label">{eyebrow}</span>
            <h2 className="story-heading">{title}</h2>
            <div className="story-paragraphs">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="story-paragraph">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
