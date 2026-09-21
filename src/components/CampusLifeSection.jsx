import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';
import { Sparkles, Calendar } from 'lucide-react';
import './CampusLifeSection.css';

export function CampusLifeSection({ data, sectionConfig, theme }) {
  const clData = data?.campusLife || {};
  const activities = clData.activities || [];

  const eyebrow = sectionConfig?.eyebrow || 'CAMPUS CULTURE';
  const title = sectionConfig?.title || clData.heading || 'Life Beyond the Classroom.';
  const subtitle = sectionConfig?.subtitle || clData.subheading || "There's always an opportunity to explore, create, and lead.";

  if (!activities.length) return null;

  return (
    <section id="campus-life" className="campus-life-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Masonry / Magazine Composition */}
        <div className="campus-life-grid">
          {activities.map((act) => (
            <div
              key={act.id}
              className={`activity-card activity-card-${act.size || 'medium'}`}
            >
              <img
                src={act.image}
                alt={act.title}
                className="activity-image"
                loading="lazy"
              />
              <div className="activity-overlay" />

              <div className="activity-details">
                <div className="activity-top-badge">
                  <Badge variant="glow" size="sm">{act.badge || act.category}</Badge>
                </div>
                <div className="activity-bottom">
                  <span className="activity-category">{act.category}</span>
                  <h3 className="activity-title">{act.title}</h3>
                  <p className="activity-desc">{act.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
