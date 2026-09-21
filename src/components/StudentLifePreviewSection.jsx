import React from 'react';
import { Container } from './common/Container';
import './StudentLifePreviewSection.css';

export function StudentLifePreviewSection({ data, sectionConfig, onAction }) {
  const statement = sectionConfig?.statement || 'LIFE BEYOND THE CLASSROOM.';
  const substatement = sectionConfig?.substatement || 'Cultural celebrations, debate forums, and creative student initiatives.';
  const cta = sectionConfig?.cta || { label: 'Explore Student Life →', action: 'open_detail_modal', target: 'student-life' };
  const categories = sectionConfig?.categories || ['CULTURE', 'EVENTS', 'COMPETITIONS', 'CREATIVE', 'STUDENT LIFE'];
  const dominantImage = sectionConfig?.dominantImage || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80';
  const supportingCollage = sectionConfig?.supportingCollage || [
    { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', tag: 'Debate Forum' },
    { src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=80', tag: 'Science Expo' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', tag: 'Leadership' }
  ];

  return (
    <section id="student-life-preview" className="student-life-preview-section visual-section">
      <Container>
        {/* Header & Categories Pills */}
        <div className="student-life-header">
          <div>
            <div className="category-pill-row">
              {categories.map((cat, idx) => (
                <span key={idx} className="category-micro-pill">{cat}</span>
              ))}
            </div>
            <h2 className="student-life-statement">{statement}</h2>
            <p className="student-life-sub">{substatement}</p>
          </div>

          <button
            className="explore-section-cta"
            onClick={() => onAction(cta.action, cta.target)}
          >
            {cta.label}
          </button>
        </div>

        {/* Dynamic Asymmetric Masonry Collage */}
        <div className="student-life-collage-grid">
          {/* Main Event Visual */}
          <div className="life-collage-main">
            <img src={dominantImage} alt="Campus cultural festival" loading="lazy" />
            <div className="life-main-overlay" />
            <div className="life-main-caption">
              <span className="life-tag">ANNUAL CELEBRATION</span>
              <h3>Vibrant Campus Traditions</h3>
            </div>
          </div>

          {/* Supporting Asymmetric Visuals */}
          <div className="life-collage-sub-grid">
            {supportingCollage.map((item, idx) => (
              <div key={idx} className={`life-sub-card sub-card-${idx + 1}`}>
                <img src={item.src} alt={item.tag} loading="lazy" />
                <span className="sub-card-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
