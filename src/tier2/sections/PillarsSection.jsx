import React from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Card } from '../../tier1/components/Card';
import { Users, Lightbulb, FileText, BarChart, Target, Shield, BookOpen, Trophy, Compass, Sparkles } from 'lucide-react';
import './PillarsSection.css';

const ICON_MAP = {
  Users,
  Lightbulb,
  FileText,
  BarChart,
  Target,
  Shield,
  BookOpen,
  Trophy,
  Compass,
  Sparkles
};

const DEFAULT_ICONS = [Users, Lightbulb, FileText, BarChart, Target];

import { Button } from '../../tier1/components/Button';

export function PillarsSection({ data, sectionConfig, theme, onAction }) {
  const id = sectionConfig?.id || 'pillars';
  const eyebrow = sectionConfig?.eyebrow || '';
  const title = sectionConfig?.title || '';
  const subtitle = sectionConfig?.subtitle || '';
  const pillars = sectionConfig?.pillars || [];
  const sectionCta = sectionConfig?.sectionCta || sectionConfig?.cta;

  return (
    <section id={id} className="visual-section pillars-section">
      <Container>
        {(eyebrow || title || subtitle) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            theme={theme}
          />
        )}

        <div className="why-pillars-grid">
          {pillars.map((pillar, idx) => {
            const IconComponent = (pillar.icon && ICON_MAP[pillar.icon])
              ? ICON_MAP[pillar.icon]
              : DEFAULT_ICONS[idx % DEFAULT_ICONS.length];

            return (
              <Card
                key={idx}
                variant="glass"
                className={`why-pillar-card why-pillar-${idx}`}
              >
                <div className="pillar-header-row">
                  <span className="pillar-num">{pillar.index || `0${idx + 1}`}</span>
                  <div className="pillar-icon-box">
                    <IconComponent size={20} />
                  </div>
                </div>

                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </Card>
            );
          })}
        </div>

        {sectionCta && (
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Button
              variant="primary"
              size="md"
              onClick={() => onAction && onAction(sectionCta.action || 'navigate_to', sectionCta.target || 'why-teja')}
            >
              {sectionCta.label || 'Explore Why Teja →'}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
