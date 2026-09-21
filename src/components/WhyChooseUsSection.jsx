import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { BookOpen, ShieldCheck, Trophy, Sparkles, Laptop, Compass, CheckCircle2 } from 'lucide-react';
import './WhyChooseUsSection.css';

const ICON_MAP = {
  BookOpen,
  ShieldCheck,
  Trophy,
  Sparkles,
  Laptop,
  Compass
};

export function WhyChooseUsSection({ data, sectionConfig, theme }) {
  const eyebrow = sectionConfig?.eyebrow || 'FOUNDATIONS';
  const title = sectionConfig?.title || 'Why Choose Us?';
  const subtitle = sectionConfig?.subtitle || 'An institutional environment designed for student excellence.';
  const pillars = sectionConfig?.pillars || [];

  return (
    <section id="why-us" className="why-us-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon] || BookOpen;
            return (
              <Card
                key={idx}
                variant="glass"
                interactive
                className={`pillar-card pillar-card-${idx}`}
              >
                <div className="pillar-header">
                  <span className="pillar-index">{pillar.index || `0${idx + 1}`}</span>
                  <div className="pillar-icon-box">
                    <IconComponent size={22} />
                  </div>
                </div>

                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  {pillar.subtitle && <span className="pillar-sub">{pillar.subtitle}</span>}
                  <p className="pillar-desc">{pillar.description}</p>
                </div>

                {pillar.highlights && pillar.highlights.length > 0 && (
                  <ul className="pillar-highlights-list">
                    {pillar.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={14} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
