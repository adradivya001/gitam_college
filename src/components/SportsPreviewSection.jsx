import React, { useState } from 'react';
import { Container } from './common/Container';
import './SportsPreviewSection.css';

export function SportsPreviewSection({ data, sectionConfig, onAction }) {
  const statement = sectionConfig?.statement || 'PLAY. COMPETE. GROW.';
  const substatement = sectionConfig?.substatement || 'Physical endurance, teamwork, and mental stamina through active sporting disciplines.';
  const cta = sectionConfig?.cta || { label: 'Explore Student Life →', action: 'open_detail_modal', target: 'student-life' };

  const sportsItems = data?.sports?.items || [
    { id: 'cricket', name: 'Cricket', tag: 'Teamwork & Precision', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80' },
    { id: 'volleyball', name: 'Volleyball', tag: 'Reflexes & Agility', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80' },
    { id: 'basketball', name: 'Basketball', tag: 'Pace & Coordination', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80' },
    { id: 'badminton', name: 'Badminton', tag: 'Stamina & Hand-Eye Focus', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80' },
    { id: 'athletics', name: 'Athletics & Track', tag: 'Speed & Endurance', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSportId, setHoveredSportId] = useState(null);

  // Duplicate items array for seamless marquee loop
  const marqueeItems = [...sportsItems, ...sportsItems];

  return (
    <section id="sports-preview" className="sports-preview-section visual-section">
      <Container>
        {/* Header Statement */}
        <div className="sports-preview-header">
          <div>
            <span className="micro-label">ATHLETICS & VITALITY</span>
            <h2 className="sports-statement-heading">{statement}</h2>
            <p className="sports-statement-sub">{substatement}</p>
          </div>

          <button
            className="explore-section-cta"
            onClick={() => onAction(cta.action, cta.target)}
          >
            {cta.label}
          </button>
        </div>
      </Container>

      {/* Horizontal Marquee Motion Strip */}
      <div
        className="sports-marquee-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredSportId(null);
        }}
      >
        <div className={`sports-marquee-track ${isPaused ? 'marquee-paused' : ''}`}>
          {marqueeItems.map((item, idx) => {
            const isHovered = hoveredSportId === `${item.id}-${idx}`;
            const isAnyHovered = hoveredSportId !== null;

            return (
              <div
                key={`${item.id}-${idx}`}
                className={`sports-strip-card ${isHovered ? 'card-hovered' : ''} ${isAnyHovered && !isHovered ? 'card-dimmed' : ''}`}
                onMouseEnter={() => setHoveredSportId(`${item.id}-${idx}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="sports-card-img"
                  loading="lazy"
                />
                <div className="sports-card-overlay" />

                <div className="sports-card-info">
                  <span className="sports-tag-badge">{item.tag || item.category || 'Discipline'}</span>
                  <h3 className="sports-card-title">{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
