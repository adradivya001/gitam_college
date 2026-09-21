import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { Mic, Sun, Crown, Users, Clock, FileText, Cpu, Compass } from 'lucide-react';
import './PersonalityDevelopmentSection.css';

const ICON_MAP = {
  Mic,
  Sun,
  Crown,
  Users,
  Clock,
  FileText,
  Cpu,
  Compass
};

export function PersonalityDevelopmentSection({ data, sectionConfig, theme }) {
  const devData = data?.studentDevelopment || {};
  const facets = devData.facets || [];

  const eyebrow = sectionConfig?.eyebrow || 'CHARACTER & POISE';
  const title = sectionConfig?.title || devData.heading || 'Build More Than Marks.';
  const subtitle = sectionConfig?.subtitle || devData.subheading || 'Confidence. Communication. Leadership. Character.';

  if (!facets.length) return null;

  return (
    <section id="personality" className="dev-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {devData.philosophy && (
          <div className="dev-philosophy-banner">
            <p className="philosophy-text">
              "{devData.philosophy}"
            </p>
          </div>
        )}

        {/* Facets Grid */}
        <div className="dev-facets-grid">
          {facets.map((facet, idx) => {
            const IconComp = ICON_MAP[facet.icon] || Compass;
            return (
              <Card
                key={facet.id || idx}
                variant="glass"
                interactive
                className="dev-facet-card"
              >
                <div className="facet-header">
                  <div className="facet-icon-bubble">
                    <IconComp size={22} />
                  </div>
                  {facet.tag && <Badge variant="subtle" size="sm">{facet.tag}</Badge>}
                </div>

                <h3 className="facet-title">{facet.title}</h3>
                <p className="facet-desc">{facet.desc}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
