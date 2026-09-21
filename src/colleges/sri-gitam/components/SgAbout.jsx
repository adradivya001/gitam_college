import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Heart, Map, TrendingUp, Target, Compass, BarChart, Users, Award, ShieldCheck, Dna, Atom, BarChart2 } from 'lucide-react';
import './SgAbout.css';

const ICONS = { BookOpen, Heart, Map, TrendingUp, Target, Compass, BarChart, Users, Award, ShieldCheck, Dna, Atom, BarChart2 };

export function SgAbout({ sectionConfig, onAction, data }) {
  return (
    <section className="sg-about-section">
      <Container maxWidth="1280px">
        <div className="sg-about-wrapper">
          <div className="sg-about-image-side">
            <div className="sg-about-image-container">
              <img src={sectionConfig.image} alt={`About ${data?.college?.name || ''}`} className="sg-about-img" />

            </div>
          </div>
          
          <div className="sg-about-content-side">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-about-title">
              {sectionConfig.title.split('\n').map((line, i) => <span key={i} style={{display:'block'}}>{line}</span>)}
            </h2>
            <p className="sg-about-body">{sectionConfig.content}</p>
            
            <div className="sg-about-features-grid">
              {sectionConfig.features.map((feature, i) => {
                const IconComponent = ICONS[feature.icon] || BookOpen;
                return (
                  <div key={i} className="sg-about-feature">
                    <div className="sg-feature-icon">
                      <IconComponent size={20} />
                    </div>
                    <span className="sg-feature-label">{feature.label}</span>
                  </div>
                );
              })}
            </div>
            
            <button className="sg-text-btn" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

