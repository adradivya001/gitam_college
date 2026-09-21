import React from 'react';
import { Container } from './common/Container';
import './AboutHeroLayout.css';

export function AboutHeroLayout({ sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'ABOUT US';
  const title = sectionConfig?.title || 'BUILT WITH A VISION.';
  const description = sectionConfig?.description || '';
  const image = sectionConfig?.image || null;

  return (
    <section className="about-hero-section visual-section">
      <Container>
        <div className="about-hero-grid">
          <div className="about-hero-text">
            <span className="micro-label">{eyebrow}</span>
            <h1 className="about-hero-title">
              {title.split('\n').map((line, idx) => (
                <span key={idx} className="about-hero-line">{line}</span>
              ))}
            </h1>
            <p className="about-hero-desc">{description}</p>
          </div>

          {image && (
            <div className="about-hero-visual">
              <div className="about-hero-img-frame">
                <img src={image} alt={eyebrow} loading="eager" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
