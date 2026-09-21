import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { Atom, Stethoscope, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './ExamPrepSection.css';

export function ExamPrepSection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'SPECIALISED STREAMS';
  const title = sectionConfig?.title || 'JEE & NEET EXAM PREPARATION';
  const subtitle = sectionConfig?.subtitle || 'Focused preparation built around conceptual clarity, regular practice and continuous assessment.';
  
  const jee = sectionConfig?.jee || {
    title: 'JEE',
    stream: 'ENGINEERING PREPARATION',
    group: 'MPC',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    target: 'JEE Main, JEE Advanced & AP EAPCET'
  };

  const neet = sectionConfig?.neet || {
    title: 'NEET',
    stream: 'MEDICAL PREPARATION',
    group: 'BPC',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    target: 'NEET UG & Medical Entrance Exams'
  };

  return (
    <section id="exam-prep" className="visual-section exam-prep-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="exam-split-grid">
          {/* Left Split Card: JEE */}
          <Card variant="glass" className="exam-card jee-card">
            <div className="exam-card-badge">
              <span className="exam-group-tag">{jee.group}</span>
            </div>

            <div className="exam-icon-wrap jee-icon">
              <Atom size={32} />
            </div>

            <h3 className="exam-title">{jee.title}</h3>
            <span className="exam-subtitle">{jee.stream}</span>

            <div className="exam-subjects-list">
              <span className="sub-heading-label">Core Subjects:</span>
              <div className="subject-pills">
                {jee.subjects.map((sub, idx) => (
                  <span key={idx} className="subject-pill">{sub}</span>
                ))}
              </div>
            </div>

            <p className="exam-target-text">
              Target: <strong>{jee.target}</strong>
            </p>

            <div className="exam-card-cta">
              <Button
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                onClick={() => onAction('open_admissions_modal', 'JEE MPC')}
                style={{ width: '100%' }}
              >
                Explore JEE Preparation
              </Button>
            </div>
          </Card>

          {/* Right Split Card: NEET */}
          <Card variant="glass" className="exam-card neet-card">
            <div className="exam-card-badge">
              <span className="exam-group-tag neet-tag">{neet.group}</span>
            </div>

            <div className="exam-icon-wrap neet-icon">
              <Stethoscope size={32} />
            </div>

            <h3 className="exam-title">{neet.title}</h3>
            <span className="exam-subtitle">{neet.stream}</span>

            <div className="exam-subjects-list">
              <span className="sub-heading-label">Core Subjects:</span>
              <div className="subject-pills">
                {neet.subjects.map((sub, idx) => (
                  <span key={idx} className="subject-pill neet-pill">{sub}</span>
                ))}
              </div>
            </div>

            <p className="exam-target-text">
              Target: <strong>{neet.target}</strong>
            </p>

            <div className="exam-card-cta">
              <Button
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                onClick={() => onAction('open_admissions_modal', 'NEET BPC')}
                style={{ width: '100%' }}
              >
                Explore NEET Preparation
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
