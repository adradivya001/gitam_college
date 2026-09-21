import React from 'react';
import { Container } from '../../../components/common/Container';
import './SgAdmissionsCTA.css';

export function SgAdmissionsCTA({ sectionConfig, onAction }) {
  return (
    <section className="sg-cta-section" style={{backgroundImage: `linear-gradient(rgba(16, 34, 56, 0.9), rgba(16, 34, 56, 0.9)), url(${sectionConfig.image})`}}>
      <Container maxWidth="1280px">
        <div className="sg-cta-content">
          <span className="eyebrow sg-cta-eyebrow">{sectionConfig.eyebrow}</span>
          <h2 className="sg-cta-title">
            {sectionConfig.title.split('\n').map((line, i) => <span key={i} style={{display:'block'}}>{line}</span>)}
          </h2>
          <p className="sg-cta-subtitle">{sectionConfig.subtitle}</p>
          <div className="sg-cta-actions">
            <button className="btn-primary" onClick={() => onAction('open_admissions_modal')}>
              {sectionConfig.primaryCta.label}
            </button>
            <button className="btn-secondary sg-cta-outline-btn" onClick={() => onAction('navigate_to', sectionConfig.secondaryCta.target)}>
              {sectionConfig.secondaryCta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

