import React from 'react';
import { Container } from '../../../components/common/Container';
import { Atom, Dna, BarChart2, Users } from 'lucide-react';
import './SgProgrammes.css';

const ICONS = { Atom, Dna, BarChart2, Users };

export function SgProgrammes({ sectionConfig, onAction }) {
  return (
    <section className="sg-programmes-section">
      <Container maxWidth="1280px">
        <div className="sg-section-header-row">
          <div className="sg-header-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
          </div>
          <button className="sg-text-btn" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
            {sectionConfig.cta.label}
          </button>
        </div>

        <div className="sg-programmes-grid">
          {sectionConfig.programs.map(prog => {
            const IconComponent = ICONS[prog.icon] || Atom;
            return (
              <div key={prog.id} className="sg-programme-card" style={{backgroundColor: prog.bgColor}}>
                <div className="sg-prog-icon-wrapper">
                  <IconComponent size={28} color="var(--color-primary)" />
                </div>
                <h3 className="sg-prog-title">{prog.name}</h3>
                <p className="sg-prog-subjects">{prog.subjects}</p>
                <p className="sg-prog-desc">{prog.description}</p>
                <button className="sg-prog-cta" onClick={() => onAction('navigate_to', 'programmes')}>
                  Explore {prog.name} &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

