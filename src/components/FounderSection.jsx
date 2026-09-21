import React from 'react';
import { Container } from './common/Container';
import { Quote, GraduationCap, Award, BookOpen } from 'lucide-react';
import './FounderSection.css';

export function FounderSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'FOUNDER & CHAIRMAN';
  const title = sectionConfig?.title || 'BUILT WITH A PURPOSE.';
  const name = sectionConfig?.name || data?.college?.founder?.name || 'S. V. Ratnakar Prasad';
  const role = sectionConfig?.role || data?.college?.founder?.title || 'Founder & Chairman';
  const background = sectionConfig?.background || [
    'IIT mathematics teaching background',
    'Extensive JEE coaching experience',
    'Associated with premier national institutions such as ALLEN and FIITJEE'
  ];
  const quotePlaceholder = sectionConfig?.quotePlaceholder || 'Academic excellence is not achieved by chance; it is cultivated through disciplined conceptual mastery, structured testing, and unwavering guidance.';
  const image = sectionConfig?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';

  return (
    <section id="founder" className="visual-section founder-section">
      <Container>
        <div className="founder-card-wrapper">
          <div className="founder-grid">
            {/* Left: Founder Portrait Frame */}
            <div className="founder-portrait-col">
              <div className="founder-portrait-frame">
                <img src={image} alt={name} loading="lazy" />
                <div className="founder-avatar-fallback">
                  <span className="avatar-initials">RP</span>
                </div>
                <div className="founder-role-badge">
                  <span className="role-title">{role}</span>
                </div>
              </div>
            </div>

            {/* Right: Biography & Quote */}
            <div className="founder-bio-col">
              <span className="micro-label">{eyebrow}</span>
              <h2 className="founder-title">{title}</h2>
              <h3 className="founder-name">{name}</h3>

              {/* Background Badges */}
              <div className="founder-bg-list">
                {background.map((bgItem, idx) => (
                  <div key={idx} className="founder-bg-badge">
                    <GraduationCap size={16} className="bg-icon" />
                    <span>{bgItem}</span>
                  </div>
                ))}
              </div>

              {/* Founder Statement / Quote Card */}
              <div className="founder-quote-box">
                <Quote size={24} className="quote-mark" />
                <p className="quote-text">
                  "{quotePlaceholder}"
                </p>
                <span className="quote-author">— {name}, Founder & Chairman</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
