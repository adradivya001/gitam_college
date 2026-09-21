import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Target, Map, Compass, Briefcase, Users } from 'lucide-react';
import './SgWhyUs.css';

const ICONS = { BookOpen, Target, Map, Compass, Briefcase, Users };

export function SgWhyUs({ sectionConfig, onAction }) {
  return (
    <section className="sg-why-section">
      <Container maxWidth="1280px">
        <div className="sg-why-wrapper">
          <div className="sg-why-content-side">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
            <p className="sg-why-subtitle">{sectionConfig.subtitle}</p>
            <button className="btn-primary sg-mt-4" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
          <div className="sg-why-grid-side">
            <div className="sg-why-grid">
              {sectionConfig.pillars.map(pillar => {
                const IconComponent = ICONS[pillar.icon] || BookOpen;
                return (
                  <div key={pillar.id} className="sg-why-card">
                    <div className="sg-why-icon">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="sg-why-card-title">{pillar.title}</h4>
                      <p className="sg-why-card-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

