import React from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Button } from '../../tier1/components/Button';
import './StudentExperienceSection.css';

export function StudentExperienceSection({ data, sectionConfig, theme, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'STUDENT LIFE';
  const title = sectionConfig?.title || 'Life Beyond the Classroom';
  const subtitle = sectionConfig?.subtitle || 'Experiences that encourage confidence, curiosity and collaboration.';
  const description = sectionConfig?.description || 'Education extends beyond academics through activities that encourage participation, teamwork, confidence and personal growth.';
  const microTags = sectionConfig?.microTags || ['SPORTS', 'EVENTS', 'COMPETITIONS', 'CULTURE'];
  const cta = sectionConfig?.cta;

  const dominantImage = sectionConfig?.dominantImage || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80';
  const supportingImages = sectionConfig?.supportingImages || [
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80', caption: 'Collaborative Learning' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', caption: 'Campus Activities' }
  ];

  return (
    <section id="student-experience" className="student-experience-section visual-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Editorial Top Bar with Micro Tags */}
        <div className="experience-top-bar">
          <div className="micro-tag-group">
            {microTags.map((tag, idx) => (
              <span key={idx} className="editorial-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <span className="experience-statement-label">
            TEJA STUDENT LIFE
          </span>
        </div>

        {/* Asymmetric Visual Collage */}
        <div className="student-collage-grid">
          {/* Dominant Large Photograph */}
          <div className="collage-dominant-frame">
            <img
              src={dominantImage}
              alt="Students learning and collaborating"
              className="dominant-student-img"
              loading="lazy"
            />
            <div className="dominant-img-overlay" />
            
            {/* Embedded Micro Statement Overlay */}
            <div className="dominant-micro-caption">
              <span className="caption-tag">LIFE AT TEJA</span>
              <p className="caption-body">{description}</p>
            </div>
          </div>

          {/* Overlapping Smaller Photographs */}
          <div className="collage-supporting-stack">
            {supportingImages.map((img, idx) => (
              <div key={idx} className={`supporting-img-card card-offset-${idx + 1}`}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="supporting-img-badge">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Button */}
        {cta && (
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Button
              variant="primary"
              size="md"
              onClick={() => onAction && onAction(cta.action || 'navigate_to', cta.target || 'student-life')}
            >
              {cta.label || 'Explore Student Life →'}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
