import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Compass, Target, Users, Award, Map, ShieldCheck, Heart, Dna, Atom, BarChart2 } from 'lucide-react';
import './SgHero.css';

const ICONS = { BookOpen, Compass, Target, Users, Award, Map, ShieldCheck, Heart, Dna, Atom, BarChart2 };

export function SgHero({ sectionConfig, onAction, data }) {
  return (
    <section className="sg-hero-section">
      <Container maxWidth="1280px">
        <div className="sg-hero-content-wrapper">
          <div className="sg-hero-text-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h1 className="sg-hero-title">
              {sectionConfig.title.split('\n').map((line, i) => (
                <span key={i} className="sg-title-line">{line}</span>
              ))}
            </h1>
            <p className="sg-hero-subtitle">{sectionConfig.subtitle}</p>
            <div className="sg-hero-actions">
              <button 
                className="btn-primary"
                onClick={() => onAction('navigate_to', sectionConfig.primaryCta.target)}
              >
                {sectionConfig.primaryCta.label}
              </button>
              <button 
                className="btn-secondary"
                onClick={() => onAction('navigate_to', sectionConfig.secondaryCta.target)}
              >
                {sectionConfig.secondaryCta.label}
              </button>
            </div>
          </div>
          <div className="sg-hero-image-wrapper">
            <img src={sectionConfig.heroImage} alt={data?.college?.name || "Junior College"} className="sg-hero-img" />
          </div>
        </div>

        <div className="sg-hero-highlights">
          {sectionConfig.highlights.map((highlight, index) => {
            const IconComponent = ICONS[highlight.icon] || Target;
            return (
              <div key={index} className="sg-highlight-item">
                <div className="sg-highlight-icon-wrapper">
                  <IconComponent size={24} className="sg-highlight-icon" />
                </div>
                <span className="sg-highlight-label">{highlight.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

