import React from 'react';
import { Container } from './common/Container';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './AboutSection.css';

export function AboutSection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'MORE THAN A COLLEGE.';
  const title = sectionConfig?.title || 'A SYSTEM BUILT AROUND STUDENT GROWTH.';
  const description = sectionConfig?.description || 'Cognizant was founded in 2022 with a vision to provide focused educational services and competitive-exam-oriented preparation for students in Anantapur and the Rayalaseema region.';
  const points = sectionConfig?.points || [
    'Strong fundamentals & conceptual understanding',
    'Systematic problem solving & daily practice',
    'Continuous testing & comprehensive evaluation',
    'Detailed performance analysis & corrective feedback'
  ];
  const image = sectionConfig?.image || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80';

  return (
    <section id="about" className="visual-section about-cognizant-section">
      <Container>
        <div className="about-editorial-grid">
          {/* Left Column: Visual Campus Composition */}
          <div className="about-visual-col">
            <div className="about-img-frame">
              <img src={image} alt="Cognizant Learning Environment" loading="lazy" />
              <div className="about-img-badge">
                <span className="badge-yr">EST. 2022</span>
                <span className="badge-tag">Ramnagar, Anantapur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Feature Points */}
          <div className="about-content-col">
            <span className="micro-label">{eyebrow}</span>
            <h2 className="about-heading">{title}</h2>
            <p className="about-paragraph">{description}</p>

            <div className="about-points-list">
              {points.map((pt, idx) => (
                <div key={idx} className="about-point-item">
                  <div className="point-icon-wrap">
                    <CheckCircle2 size={18} color="var(--color-secondary)" />
                  </div>
                  <span className="point-text">{pt}</span>
                </div>
              ))}
            </div>

            <div className="about-action-wrap">
              <button
                className="about-detail-link"
                onClick={() => onAction('open_detail_modal', 'about')}
              >
                <span>Read Full Methodology</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
