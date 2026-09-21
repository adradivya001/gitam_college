import React from 'react';
import { Container } from '../../../components/common/Container';
import '../components/SgShared.css';

export function SgInnerHero({ eyebrow, title, subtitle, breadcrumb, image, onAction }) {
  return (
    <section className="sg-inner-hero">
      <Container maxWidth="1280px">
        <div className="sg-inner-hero-inner">
          <div className="sg-inner-hero-text">
            {breadcrumb && (
              <div className="sg-breadcrumb">
                <span>Home</span>
                <span className="sg-breadcrumb-sep">/</span>
                <span>{breadcrumb}</span>
              </div>
            )}
            {eyebrow && <span className="sg-eyebrow">{eyebrow}</span>}
            <h1 className="sg-inner-title">{title}</h1>
            {subtitle && <p className="sg-inner-subtitle">{subtitle}</p>}
          </div>
          {image && (
            <div className="sg-inner-hero-image">
              <img src={image} alt={title} loading="lazy" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
