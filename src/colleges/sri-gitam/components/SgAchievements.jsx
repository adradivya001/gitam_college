import React from 'react';
import { Container } from '../../../components/common/Container';
import { Trophy, Percent, Award, GraduationCap } from 'lucide-react';
import './SgAchievements.css';

const ICONS = { Trophy, Percent, Award, GraduationCap };

export function SgAchievements({ sectionConfig, onAction }) {
  return (
    <section className="sg-achievements-section">
      <Container maxWidth="1280px">
        <div className="sg-achievements-grid-split">
          <div className="sg-achievements-img-card">
            <img 
              src="/sri-gitam/faculty_students_group.png" 
              alt="Sri GITAM Faculty and Students Group" 
              className="sg-achievements-group-img"
            />
            <div className="sg-achievements-badge">
              <span>Our Mentors & Achievers</span>
            </div>
          </div>
          <div className="sg-achievements-right">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
            <p className="sg-why-subtitle">{sectionConfig.subtitle}</p>
            <div className="sg-achievements-stats">
              {sectionConfig.stats.map((stat, i) => {
                const IconComponent = ICONS[stat.icon] || Trophy;
                return (
                  <div key={i} className="sg-stat-card">
                    <IconComponent size={28} color="var(--color-brand-crimson, #8A1C14)" className="sg-stat-icon" />
                    <span className="sg-stat-label">{stat.label}</span>
                    <span className="sg-stat-value">{stat.value}</span>
                  </div>
                );
              })}
            </div>
            <button className="sg-btn-primary" style={{ marginTop: '24px' }} onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

