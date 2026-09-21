import React from 'react';
import { Container } from '../../../components/common/Container';

export function SgCTABanner({ eyebrow, title, desc, primaryLabel, secondaryLabel, onAction, primaryTarget, secondaryTarget }) {
  return (
    <section className="sg-cta-banner">
      <Container maxWidth="1280px">
        <div className="sg-cta-banner-inner">
          {eyebrow && <span className="sg-eyebrow sg-eyebrow-light">{eyebrow}</span>}
          <h2 className="sg-section-title sg-section-title-light">{title}</h2>
          {desc && <p className="sg-section-desc sg-section-desc-light sg-section-desc-center">{desc}</p>}
          <div className="sg-cta-actions">
            <button className="sg-btn-primary" onClick={() => onAction && onAction('navigate_to', primaryTarget || 'admissions')}>
              {primaryLabel || 'Explore Programmes'}
            </button>
            {secondaryLabel && (
              <button className="sg-btn-outline" onClick={() => onAction && onAction('navigate_to', secondaryTarget || 'contact')}>
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
