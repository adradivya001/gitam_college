import React from 'react';
import { Container } from '../../../components/common/Container';
import { Trophy, Percent, Award, GraduationCap } from 'lucide-react';
import './SgAchievements.css';

const ICONS = { Trophy, Percent, Award, GraduationCap };

export function SgAchievements({ sectionConfig, onAction }) {
  return (
    <section className="sg-achievements-section">
      <Container maxWidth="1280px">
        <div className="sg-achievements-wrapper">
          <div className="sg-achievements-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
            <p className="sg-why-subtitle">{sectionConfig.subtitle}</p>
          </div>
          <div className="sg-achievements-stats">
            {sectionConfig.stats.map((stat, i) => {
              const IconComponent = ICONS[stat.icon] || Trophy;
              return (
                <div key={i} className="sg-stat-card">
                  <IconComponent size={32} color="var(--color-secondary)" className="sg-stat-icon" />
                  <span className="sg-stat-label">{stat.label}</span>
                  <span className="sg-stat-value">{stat.value}</span>
                </div>
              );
            })}
            <button className="sg-text-btn sg-stat-cta" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

