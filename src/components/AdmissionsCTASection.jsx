import React from 'react';
import { Container } from './common/Container';
import { Button } from './common/Button';
import { OrbitalMotif } from './common/OrbitalMotif';
import { ArrowUpRight, Compass } from 'lucide-react';
import './AdmissionsCTASection.css';

export function AdmissionsCTASection({ data, sectionConfig, theme, onAction }) {
  const statement = sectionConfig?.title || sectionConfig?.statement || 'YOUR NEXT CHAPTER STARTS HERE.';
  const subtitle = sectionConfig?.subtitle || '';
  const bgImage = sectionConfig?.backgroundImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80';

  const primaryLabel = sectionConfig?.primaryBtn || sectionConfig?.primaryCta?.label || 'Admissions Enquiry';
  const secondaryLabel = sectionConfig?.secondaryBtn || sectionConfig?.secondaryCta?.label || 'Visit Campus';

  const handlePrimaryClick = () => {
    if (sectionConfig?.primaryCta?.action) {
      onAction(sectionConfig.primaryCta.action, sectionConfig.primaryCta.target || '');
      return;
    }
    if (primaryLabel.toLowerCase().includes('academics')) {
      onAction('navigate_to', 'academics');
    } else if (primaryLabel.toLowerCase().includes('campus')) {
      onAction('navigate_to', 'campuses');
    } else {
      onAction('open_admissions_modal', '');
    }
  };

  const handleSecondaryClick = () => {
    if (sectionConfig?.secondaryCta?.action) {
      onAction(sectionConfig.secondaryCta.action, sectionConfig.secondaryCta.target || '');
      return;
    }
    if (secondaryLabel.toLowerCase().includes('campus')) {
      onAction('navigate_to', 'campuses');
    } else if (secondaryLabel.toLowerCase().includes('academics')) {
      onAction('navigate_to', 'academics');
    } else {
      onAction('open_admissions_modal', 'campus_visit');
    }
  };

  return (
    <section id="final-cta" className="cinematic-final-cta-section">
      {/* Background Visual Layer */}
      <div className="final-cta-backdrop">
        <img
          src={bgImage}
          alt={statement}
          className="final-cta-bg-img"
          loading="lazy"
        />
        <div className="final-cta-overlay" />
      </div>

      {/* Subtle Orbital Motif */}
      <OrbitalMotif motif={theme?.motif} />

      <Container>
        <div className="final-cta-content">
          <span className="micro-label">TEJA JUNIOR COLLEGE</span>

          <h2 className="final-cta-statement">
            {statement}
          </h2>
          {subtitle && (
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '12px', maxWidth: '640px' }}>
              {subtitle}
            </p>
          )}

          <div className="final-cta-actions">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              onClick={handlePrimaryClick}
            >
              {primaryLabel}
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={handleSecondaryClick}
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
