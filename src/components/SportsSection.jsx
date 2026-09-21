import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { Trophy, ArrowRight, Shield } from 'lucide-react';
import './SportsSection.css';

export function SportsSection({ data, sectionConfig, theme }) {
  const sportsData = data?.sports || {};

  if (sportsData.enabled === false || sectionConfig?.enabled === false) {
    return null;
  }

  const items = (sportsData.items || []).filter((s) => s.enabled !== false);
  const [hoveredSportId, setHoveredSportId] = useState(null);

  const eyebrow = sectionConfig?.eyebrow || 'ATHLETICS & SPORTS';
  const title = sectionConfig?.title || sportsData.heading || 'Play. Compete. Grow.';
  const subtitle = sectionConfig?.subtitle || sportsData.subheading || 'Encouraging athletic vigor, sportsmanship, and physical wellness.';

  if (!items.length) return null;

  return (
    <section id="sports" className="sports-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Sports Cards Grid */}
        <div className="sports-cards-grid">
          {items.map((sport) => (
            <div
              key={sport.id}
              className={`sport-card ${hoveredSportId === sport.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSportId(sport.id)}
              onMouseLeave={() => setHoveredSportId(null)}
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="sport-bg-image"
                loading="lazy"
              />
              <div className="sport-overlay-gradient" />

              <div className="sport-content">
                <div className="sport-tag-box">
                  <Badge variant="glow" size="sm">{sport.tag}</Badge>
                </div>

                <div className="sport-bottom-info">
                  <span className="sport-category-label">{sport.category}</span>
                  <h3 className="sport-name">{sport.name}</h3>
                  <p className="sport-desc">{sport.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
