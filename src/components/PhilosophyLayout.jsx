import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Lightbulb, Target, Users, RefreshCw } from 'lucide-react';
import './PhilosophyLayout.css';

const PHILOSOPHY_ICONS = [
  Lightbulb,
  Target,
  Users,
  RefreshCw
];

export function PhilosophyLayout({ sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'ACADEMIC PHILOSOPHY';
  const title = sectionConfig?.title || 'MORE THAN EXAM PREPARATION.';
  const subtitle = sectionConfig?.subtitle || 'DEVELOPING THE STUDENT BEHIND THE SCORE.';
  const items = sectionConfig?.items || [];

  return (
    <section className="philosophy-layout-section visual-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="philosophy-grid">
          {items.map((item, idx) => {
            const IconComponent = PHILOSOPHY_ICONS[idx % PHILOSOPHY_ICONS.length];
            return (
              <Card key={idx} variant="glass" className="philosophy-card">
                <div className="phil-header">
                  <span className="phil-index">{item.index || `0${idx + 1}`}</span>
                  <div className="phil-icon-box">
                    <IconComponent size={20} />
                  </div>
                </div>

                <h3 className="phil-title">{item.title}</h3>
                <p className="phil-desc">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
