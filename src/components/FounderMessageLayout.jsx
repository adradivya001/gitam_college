import React from 'react';
import { Container } from './common/Container';
import { Quote } from 'lucide-react';
import './FounderMessageLayout.css';

export function FounderMessageLayout({ sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'FROM THE FOUNDER';
  const title = sectionConfig?.title || 'A MESSAGE FROM OUR FOUNDER & CHAIRMAN';
  const name = sectionConfig?.name || 'S V RATNAKAR PRASAD';
  const role = sectionConfig?.role || 'Founder Chairman';
  const paragraphs = sectionConfig?.paragraphs || [];
  const closing = sectionConfig?.closing || 'Wishing you all the best.';
  const image = sectionConfig?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';

  return (
    <section className="founder-message-section visual-section">
      <Container>
        <div className="founder-msg-container">
          <div className="founder-msg-grid">
            {/* Left: Founder Image Frame */}
            <div className="founder-msg-image-col">
              <div className="founder-msg-img-frame">
                <img src={image} alt={name} loading="lazy" />
                <div className="founder-msg-name-tag">
                  <h3>{name}</h3>
                  <span>{role}</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Message Body */}
            <div className="founder-msg-text-col">
              <span className="micro-label">{eyebrow}</span>
              <h2 className="founder-msg-title">{title}</h2>

              <div className="founder-msg-body">
                <Quote size={28} className="quote-watermark" />
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="founder-msg-para">{para}</p>
                ))}
              </div>

              <div className="founder-msg-signoff">
                <p className="signoff-closing">{closing}</p>
                <h4 className="signoff-name">{name}</h4>
                <span className="signoff-role">{role}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
