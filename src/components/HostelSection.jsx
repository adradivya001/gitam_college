import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { Button } from './common/Button';
import { Bed, Clock, Utensils, ShieldCheck, HeartHandshake, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import './HostelSection.css';

const ICON_MAP = {
  Bed,
  Clock,
  Utensils,
  ShieldCheck,
  HeartHandshake,
  Activity
};

export function HostelSection({ data, sectionConfig, theme, onAction }) {
  const hostelData = data?.hostel || {};
  
  // Conditional rendering check: if hostel is not enabled in college data or sectionConfig
  if (hostelData.enabled === false || sectionConfig?.enabled === false) {
    return null;
  }

  const wings = hostelData.wings || [];
  const [selectedWingIdx, setSelectedWingIdx] = useState(0);

  const eyebrow = sectionConfig?.eyebrow || 'RESIDENTIAL LIFE';
  const title = sectionConfig?.title || hostelData.heading || 'A Place to Live. A Space to Focus.';
  const subtitle = sectionConfig?.subtitle || hostelData.subheading || 'Structured residential life designed for focused learning and well-being.';

  const activeWing = wings[selectedWingIdx] || wings[0];

  return (
    <section id="hostel" className="hostel-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Wing Switcher Tabs (Boys / Girls) */}
        {wings.length > 0 && (
          <div className="hostel-wing-selector">
            {wings.map((wing, idx) => (
              <button
                key={wing.id}
                className={`wing-tab-btn ${idx === selectedWingIdx ? 'active' : ''}`}
                onClick={() => setSelectedWingIdx(idx)}
              >
                {wing.title}
              </button>
            ))}
          </div>
        )}

        {/* Active Wing Showcase */}
        {activeWing && (
          <div className="hostel-wing-card">
            <div className="hostel-wing-image-side">
              <img
                src={activeWing.image}
                alt={activeWing.title}
                className="hostel-wing-img"
                loading="lazy"
              />
              <div className="hostel-wing-img-overlay" />
              <div className="hostel-wing-badge-box">
                <Badge variant="glow">{activeWing.tag}</Badge>
              </div>
            </div>

            <div className="hostel-wing-info-side">
              <h3 className="hostel-wing-title">{activeWing.title}</h3>
              <p className="hostel-wing-desc">{activeWing.description}</p>

              <div className="hostel-points-group">
                <h4 className="points-heading">Residential Structure</h4>
                <div className="hostel-points-list">
                  {activeWing.keyPoints?.map((pt, idx) => (
                    <div key={idx} className="hostel-point-row">
                      <CheckCircle2 size={16} className="point-icon" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hostel-action-row">
                <Button
                  variant="primary"
                  icon={ArrowRight}
                  onClick={() => onAction('open_admissions_modal', `hostel_${activeWing.id}`)}
                >
                  Enquire for {activeWing.title}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* General Verified Facility Grid */}
        {hostelData.facilities && hostelData.facilities.length > 0 && (
          <div className="hostel-facilities-grid">
            {hostelData.facilities.map((fac, idx) => {
              const IconComp = ICON_MAP[fac.icon] || ShieldCheck;
              return (
                <div key={idx} className="hostel-fac-card">
                  <div className="fac-icon-circle">
                    <IconComp size={20} />
                  </div>
                  <h4 className="fac-title">{fac.title}</h4>
                  <p className="fac-desc">{fac.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
