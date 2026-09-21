import React, { useState } from 'react';
import { Container } from '../../tier1/components/Container';
import { Button } from '../../tier1/components/Button';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import './CampusPreviewSection.css';

export function CampusPreviewSection({ data, sectionConfig, onAction, theme }) {
  const microLabel = sectionConfig?.microLabel || 'FACILITIES';
  const title = sectionConfig?.title || 'An Environment Designed for Focused Learning';
  const subtitle = sectionConfig?.subtitle || 'Spaces designed to support learning, collaboration and student development.';
  const caption = sectionConfig?.caption || 'Acoustically Balanced Lecture Halls';
  const categories = sectionConfig?.categories || ['Smart Classrooms', 'Library', 'Computer Lab', 'Sports & Activities'];
  
  const tabs = sectionConfig?.tabs || [
    {
      id: 'classrooms',
      label: 'CLASSROOMS',
      title: caption,
      desc: 'Spacious spaces equipped with modern visual learning aids.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'labs',
      label: 'LABS',
      title: 'Dedicated Science & Technology Labs',
      desc: 'Computer labs and science inquiry stations.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'library',
      label: 'LIBRARY',
      title: 'Curated Knowledge & Reference Archives',
      desc: 'Quiet reference zones and reading carrels.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const cta = sectionConfig?.cta || { label: 'View All Facilities →', action: 'navigate_to', target: 'facilities' };
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = tabs[activeTabIdx] || tabs[0];

  return (
    <section id="facilities-preview" className="campus-preview-section visual-section">
      <Container>
        <SectionHeading
          eyebrow={microLabel}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Category Pills Strip */}
        {categories && categories.length > 0 && (
          <div className="campus-interactive-tabs" style={{ justifyContent: 'center', marginBottom: '28px' }}>
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="campus-tab-btn tab-active"
                style={{ cursor: 'default', background: 'rgba(30, 64, 175, 0.15)', borderColor: '#1E40AF', color: '#FFFFFF' }}
              >
                <span className="tab-indicator-dot" style={{ background: '#D97706' }} />
                <span className="tab-btn-text">{cat}</span>
              </span>
            ))}
          </div>
        )}

        {/* Dynamic Showcase Viewport */}
        <div className="campus-showcase-viewport" style={{ height: '460px', borderRadius: '16px' }}>
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="showcase-active-img"
            loading="lazy"
          />
          <div className="showcase-gradient-shade" />

          {/* Floating Caption */}
          <div className="showcase-caption-overlay">
            <span className="showcase-cat-pill">{activeTab.label}</span>
            <h3 className="showcase-caption-title">{activeTab.title}</h3>
            <p className="showcase-caption-desc">{activeTab.desc}</p>
          </div>
        </div>

        {/* Action Button */}
        {cta && (
          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Button
              variant="primary"
              size="md"
              onClick={() => onAction && onAction(cta.action || 'navigate_to', cta.target || 'facilities')}
            >
              {cta.label || 'View All Facilities →'}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
