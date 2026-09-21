import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { CheckCircle2, ArrowRight, BookOpen, Target, FileSpreadsheet, BarChart2, Zap } from 'lucide-react';
import './WinningProcessSection.css';

const STEP_ICONS = [
  BookOpen,
  Target,
  FileSpreadsheet,
  BarChart2,
  Zap
];

export function WinningProcessSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'THE COGNIZANT METHOD';
  const title = sectionConfig?.title || 'UNDERSTAND. PRACTICE. ANALYSE. IMPROVE.';
  const subtitle = sectionConfig?.subtitle || 'A proven 5-stage competitive preparation system engineered for consistent academic growth.';
  const steps = sectionConfig?.steps || [
    {
      step: '01',
      title: 'UNDERSTAND',
      sub: 'Conceptual learning',
      details: ['Strong fundamentals', 'Understand HOW and WHY', 'Clarity over memorization']
    },
    {
      step: '02',
      title: 'PRACTICE',
      sub: 'Daily assignments',
      details: ['Objective questions', 'Graded problem sheets', 'Regular problem solving']
    },
    {
      step: '03',
      title: 'TEST',
      sub: 'Structured testing',
      details: ['Daily objective tests', 'Fortnight tests', 'Surprise revision tests']
    },
    {
      step: '04',
      title: 'ANALYSE',
      sub: 'Performance analysis',
      details: ['Identify strengths', 'Identify weaknesses', 'Track speed & accuracy']
    },
    {
      step: '05',
      title: 'IMPROVE',
      sub: 'Corrective feedback',
      details: ['Targeted micro-remediation', 'Focused doubt solving', 'Competitive readiness']
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="winning-process" className="visual-section process-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Process Timeline Flow */}
        <div className="process-flow-container">
          <div className="process-timeline-track">
            {steps.map((item, idx) => {
              const IconComponent = STEP_ICONS[idx % STEP_ICONS.length];
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`process-step-node ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-num-badge">{item.step}</div>
                  <div className="step-icon-circle">
                    <IconComponent size={22} />
                  </div>
                  <h4 className="step-node-title">{item.title}</h4>
                  <span className="step-node-sub">{item.sub}</span>

                  {idx < steps.length - 1 && (
                    <div className="step-connector-arrow">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="process-detail-panel">
            <div className="panel-header">
              <span className="panel-step-label">STAGE {steps[activeStep].step} OF 05</span>
              <h3 className="panel-title">{steps[activeStep].title} — {steps[activeStep].sub}</h3>
            </div>
            <div className="panel-points-grid">
              {steps[activeStep].details.map((detail, dIdx) => (
                <div key={dIdx} className="panel-point-card">
                  <CheckCircle2 size={18} className="panel-check-icon" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
