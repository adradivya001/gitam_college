import React from 'react';
import { Container } from './common/Container';
import { Button } from './common/Button';
import { ArrowUpRight, Phone, ArrowDown } from 'lucide-react';
import './HeroSection.css';

export function HeroSection({ data, sectionConfig, theme, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || data?.college?.name || '';
  const brandSub = sectionConfig?.brandSub || data?.college?.shortName || data?.college?.tagline || '';
  const title = sectionConfig?.title || '';
  const subtitle = sectionConfig?.subtitle || '';
  const heroImage = sectionConfig?.heroImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80';
  const phoneContact = sectionConfig?.phoneContact || data?.college?.contact?.phone || '';

  const primaryCta = sectionConfig?.primaryCta || { label: 'Explore Programs', action: 'scroll_to', target: '#programs' };
  const secondaryCta = sectionConfig?.secondaryCta || { label: 'Admissions Enquiry', action: 'open_admissions_modal' };

  const handlePrimaryClick = () => {
    if (primaryCta.action && onAction) {
      onAction(primaryCta.action, primaryCta.target || primaryCta.meta);
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryCta.action && onAction) {
      onAction(secondaryCta.action, secondaryCta.target || secondaryCta.meta);
    }
  };

  return (
    <section id="hero" className="cinematic-hero-section">
      {/* Background Photography & Overlay */}
      <div className="hero-backdrop-frame">
        {heroImage && (
          <img
            src={heroImage}
            alt={data?.college?.name || 'College Campus'}
            className="hero-backdrop-img"
            loading="eager"
          />
        )}
        <div className="hero-vignette-overlay" />
        <div className="hero-gradient-overlay" />
      </div>

      <Container>
        <div className="hero-cinematic-content">
          {/* Eyebrow & Brand Label */}
          {(eyebrow || brandSub) && (
            <div className="hero-brand-tag">
              <span className="hero-brand-pulse" />
              {eyebrow && <span className="hero-brand-name">{eyebrow}</span>}
              {eyebrow && brandSub && <span className="hero-brand-divider">·</span>}
              {brandSub && <span className="hero-brand-loc">{brandSub}</span>}
            </div>
          )}

          {/* Primary Cinematic Headline */}
          {title && (
            <h1 className="hero-statement-title">
              {title.split('\n').map((line, idx) => (
                <span key={idx} className="hero-title-line">{line}</span>
              ))}
            </h1>
          )}

          {/* Supporting Subtitle */}
          {subtitle && (
            <p className="hero-compact-subtitle">
              {subtitle}
            </p>
          )}

          {/* Primary Action Buttons & Secondary Call Contact */}
          <div className="hero-action-row">
            <div className="hero-action-buttons">
              {primaryCta?.label && (
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowUpRight}
                  onClick={handlePrimaryClick}
                >
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta?.label && (
                <Button
                  variant="glass"
                  size="lg"
                  onClick={handleSecondaryClick}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>


          </div>
        </div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={() => onAction && onAction('scroll_to', '#trust-strip')}
        aria-label="Scroll to next section"
      >
        <span className="scroll-txt">EXPLORE</span>
        <ArrowDown size={14} className="scroll-arrow" />
      </button>
    </section>
  );
}
