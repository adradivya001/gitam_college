import React from 'react';
import { Container } from './common/Container';
import { ShieldCheck, Award, GraduationCap, Target, Lightbulb } from 'lucide-react';
import './TrustStripSection.css';

const ICON_MAP = [
  ShieldCheck,
  Target,
  GraduationCap,
  Award,
  Lightbulb
];

export function TrustStripSection({ data, sectionConfig }) {
  const items = sectionConfig?.items || [
    'FOUNDED 2022',
    'JEE + NEET FOCUSED',
    'EXPERT FACULTY',
    'STRUCTURED TESTING',
    'CONCEPT-FIRST LEARNING'
  ];

  return (
    <div id="trust-strip" className="trust-strip-container">
      <Container>
        <div className="trust-strip-inner">
          {items.map((item, idx) => {
            const IconComponent = ICON_MAP[idx % ICON_MAP.length];
            return (
              <React.Fragment key={idx}>
                <div className="trust-strip-item">
                  <IconComponent size={16} className="trust-icon" />
                  <span className="trust-text">{item}</span>
                </div>
                {idx < items.length - 1 && <span className="trust-divider">•</span>}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
