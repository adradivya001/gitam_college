import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import './MissionVisionLayout.css';

export function MissionVisionLayout({ sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'OUR PURPOSE';
  const title = sectionConfig?.title || 'MISSION & VISION';
  const mission = sectionConfig?.mission || {};
  const vision = sectionConfig?.vision || {};

  return (
    <section className="mission-vision-section visual-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
        />

        <div className="mv-container">
          {/* Mission Box */}
          <div className="mission-box-card">
            <div className="mv-header-row">
              <div className="mv-icon-badge">
                <Target size={22} />
              </div>
              <h3 className="mv-card-title">{mission.title || 'MISSION'}</h3>
            </div>

            <div className="mission-content">
              <p className="mission-official-statement">
                "{mission.officialStatement}"
              </p>

              {mission.interpretation && (
                <div className="mission-pillars-list">
                  {mission.interpretation.map((item, idx) => (
                    <div key={idx} className="mission-pill-item">
                      <CheckCircle2 size={16} color="var(--color-secondary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Vision Box & 8 Pillars Grid */}
          <div className="vision-box-card">
            <div className="mv-header-row">
              <div className="mv-icon-badge vision-badge">
                <Compass size={22} />
              </div>
              <h3 className="mv-card-title">{vision.title || 'VISION'}</h3>
            </div>

            <p className="vision-official-statement">
              "{vision.officialStatement}"
            </p>

            {vision.pillars && (
              <div className="vision-pillars-grid">
                {vision.pillars.map((pillar) => (
                  <div key={pillar.id} className="v-pillar-item">
                    <span className="v-pillar-id">{pillar.id}</span>
                    <div className="v-pillar-text">
                      <h4 className="v-pillar-title">{pillar.title}</h4>
                      <p className="v-pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
