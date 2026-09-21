import React from 'react';
import { Container } from './common/Container';
import { BookOpen } from 'lucide-react';
import './AcademicsPreviewSection.css';

export function AcademicsPreviewSection({ data, sectionConfig, onAction }) {
  const statement = sectionConfig?.statement || 'LEARN WITH PURPOSE.';
  const substatement = sectionConfig?.substatement || 'Structured academic rigor across science and commerce streams.';
  const primaryImage = sectionConfig?.primaryImage || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80';
  const supportingImage = sectionConfig?.supportingImage || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80';
  const cta = sectionConfig?.cta || { label: 'Explore Academics →', action: 'open_detail_modal', target: 'academics' };

  // Dynamically pull stream codes from Tier 3 courses data
  const streams = data?.courses?.streams || [];

  return (
    <section id="academics-preview" className="academics-preview-section visual-section">
      <Container>
        <div className="academics-preview-grid">
          {/* Left Visual Composition */}
          <div className="academics-visual-stack">
            <div className="academics-main-image-frame">
              <img
                src={primaryImage}
                alt="Academic focus and learning"
                className="academics-main-img"
                loading="lazy"
              />
              <div className="academics-img-overlay" />
            </div>

            <div className="academics-sub-image-frame">
              <img
                src={supportingImage}
                alt="Laboratory research and study"
                className="academics-sub-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Visual Editorial Narrative */}
          <div className="academics-editorial-block">
            <span className="micro-label">ACADEMIC FOUNDATION</span>
            
            <h2 className="academics-statement-heading">
              {statement}
            </h2>

            <p className="academics-statement-sub">
              {substatement}
            </p>

            {/* Dynamic Stream Preview Pills from Tier 3 */}
            {streams.length > 0 && (
              <div className="academics-streams-preview">
                <span className="streams-list-title">CURRICULUM STREAMS:</span>
                <div className="stream-badge-row">
                  {streams.map((st) => (
                    <div key={st.id} className="stream-pill-item">
                      <span className="stream-code-text">{st.code}</span>
                      <span className="stream-pill-name">{st.name.split(',')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="academics-action-wrap">
              <button
                className="explore-section-cta"
                onClick={() => onAction(cta.action, cta.target)}
              >
                {cta.label}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
