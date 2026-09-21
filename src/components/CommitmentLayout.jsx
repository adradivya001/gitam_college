import React from 'react';
import { Container } from './common/Container';
import { ShieldCheck } from 'lucide-react';
import './CommitmentLayout.css';

export function CommitmentLayout({ sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'OUR COMMITMENT';
  const title = sectionConfig?.title || 'WE KNOW THAT IT IS NOT AN EASY TASK.';
  const statement = sectionConfig?.statement || '';

  return (
    <section className="commitment-section visual-section">
      <Container>
        <div className="commitment-card-frame">
          <div className="commitment-header">
            <ShieldCheck size={28} className="commitment-icon" />
            <span className="micro-label">{eyebrow}</span>
          </div>

          <h2 className="commitment-title">{title}</h2>
          
          <blockquote className="commitment-quote">
            "{statement}"
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
