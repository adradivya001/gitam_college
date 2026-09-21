import React from 'react';
import { Container } from './common/Container';
import './HostelPreviewSection.css';

export function HostelPreviewSection({ data, sectionConfig, onAction }) {
  const microLabel = sectionConfig?.microLabel || 'LIVE. LEARN. GROW.';
  const statement = sectionConfig?.statement || 'ACCOMMODATION DESIGNED TO SUPPORT FOCUSED STUDENT LIFE.';
  const cta = sectionConfig?.cta || { label: 'Explore Hostel →', action: 'open_detail_modal', target: 'hostel' };

  const boysBlock = sectionConfig?.boysBlock || {
    title: 'Boys Accommodation',
    tag: 'Supervised & Structured',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    desc: 'Comfortable living quarters with supervised study routines and nutritious dining.'
  };

  const girlsBlock = sectionConfig?.girlsBlock || {
    title: 'Girls Accommodation',
    tag: 'Safe, Caring & Focused',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80',
    desc: 'Secure block with dedicated female wardens, structured schedules, and quiet study areas.'
  };

  return (
    <section id="hostel-preview" className="hostel-preview-section visual-section">
      <Container>
        {/* Header Statement */}
        <div className="hostel-preview-header">
          <div>
            <span className="micro-label">{microLabel}</span>
            <h2 className="hostel-statement-heading">{statement}</h2>
          </div>

          <button
            className="explore-section-cta"
            onClick={() => onAction(cta.action, cta.target)}
          >
            {cta.label}
          </button>
        </div>

        {/* Visually Strong Split-Screen Presentation */}
        <div className="hostel-split-grid">
          {/* Boys Block */}
          <div className="hostel-split-wing">
            <div className="split-wing-image-wrap">
              <img
                src={boysBlock.image}
                alt={boysBlock.title}
                className="split-wing-img"
                loading="lazy"
              />
              <div className="split-wing-gradient" />
              
              <div className="split-wing-content">
                <span className="split-wing-tag">{boysBlock.tag}</span>
                <h3 className="split-wing-title">{boysBlock.title}</h3>
                <p className="split-wing-desc">{boysBlock.desc}</p>
              </div>
            </div>
          </div>

          {/* Girls Block */}
          <div className="hostel-split-wing">
            <div className="split-wing-image-wrap">
              <img
                src={girlsBlock.image}
                alt={girlsBlock.title}
                className="split-wing-img"
                loading="lazy"
              />
              <div className="split-wing-gradient" />

              <div className="split-wing-content">
                <span className="split-wing-tag">{girlsBlock.tag}</span>
                <h3 className="split-wing-title">{girlsBlock.title}</h3>
                <p className="split-wing-desc">{girlsBlock.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
