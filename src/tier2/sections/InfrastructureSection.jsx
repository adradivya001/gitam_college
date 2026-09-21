import React, { useState } from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Card } from '../../tier1/components/Card';
import { Badge } from '../../tier1/components/Badge';
import { Button } from '../../tier1/components/Button';
import { Check, ArrowUpRight, Eye } from 'lucide-react';
import './InfrastructureSection.css';

export function InfrastructureSection({ data, sectionConfig, theme, onAction }) {
  const facData = data?.facilities || {};
  const items = (facData.facilities || facData.items || sectionConfig?.facilities || []).filter((f) => f.enabled !== false);
  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);

  const eyebrow = sectionConfig?.eyebrow || 'CAMPUS & SPACES';
  const title = sectionConfig?.title || facData.heading || 'Built for Learning. Designed for Growth.';
  const subtitle = sectionConfig?.subtitle || facData.subheading || 'Modern educational facilities supporting academic focus and student wellness.';

  if (!items.length) return null;

  const currentItem = items[activeFacilityIdx] || items[0];

  return (
    <section id="campus" className="infra-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Infrastructure Interactive Layout */}
        <div className="infra-composition-grid">
          {/* Left: Interactive Facility List */}
          <div className="infra-facility-list">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={`infra-item-card ${idx === activeFacilityIdx ? 'active' : ''}`}
                onClick={() => setActiveFacilityIdx(idx)}
              >
                <div className="infra-item-header">
                  <span className="infra-cat-tag">{item.category || 'Facility'}</span>
                  <span className="infra-index-num">0{idx + 1}</span>
                </div>
                <h4 className="infra-item-title">{item.title}</h4>
                <p className="infra-item-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Active Image Showcase */}
          <div className="infra-showcase-panel">
            <div className="infra-image-container">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="infra-featured-image"
                loading="lazy"
              />
              <div className="infra-image-gradient" />

              <div className="infra-caption-card">
                <Badge variant="glow">{currentItem.category || 'Facility'}</Badge>
                <h3 className="infra-caption-title">{currentItem.title}</h3>
                
                {currentItem.features && (
                  <div className="infra-features-list">
                    {currentItem.features.map((feat, idx) => (
                      <span key={idx} className="infra-feat-pill">
                        <Check size={12} /> {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="infra-tour-cta">
              <Button
                variant="primary"
                icon={ArrowUpRight}
                onClick={() => onAction('open_admissions_modal', 'campus_visit')}
              >
                Schedule a Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
