import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { BarChart3, LineChart, CheckCircle2, TrendingUp, AlertCircle, RefreshCw, Layers } from 'lucide-react';
import './TestingAnalyticsSection.css';

export function TestingAnalyticsSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'ACADEMIC SYSTEM';
  const title = sectionConfig?.title || 'EVERY TEST TELLS A STORY.';
  const subtitle = sectionConfig?.subtitle || 'A UI representation of our conceptual performance analytics and continuous feedback methodology.';

  const [activeSubject, setActiveSubject] = useState('Physics');

  const testComponents = [
    { title: 'DAILY OBJECTIVE TESTS', desc: 'Concept retention & rapid problem solving' },
    { title: 'FORTNIGHT TESTS', desc: 'Comprehensive multi-chapter evaluation' },
    { title: 'DAILY ASSIGNMENTS', desc: 'Graded homework & problem sheets' },
    { title: 'SURPRISE TESTS', desc: 'Exam-tempo & revision readiness' },
    { title: 'PERFORMANCE ANALYSIS', desc: 'Granular error & accuracy breakdown' },
    { title: 'CORRECTIVE FEEDBACK', desc: 'Targeted mentor guidance & remediation' }
  ];

  return (
    <section id="testing-analytics" className="visual-section testing-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="analytics-dashboard-grid">
          {/* Left Column: UI Methodology Dashboard */}
          <div className="dashboard-visual-wrap">
            <Card variant="glass" className="dashboard-mock-card">
              <div className="dashboard-mock-header">
                <div className="dash-title-group">
                  <BarChart3 size={20} color="var(--color-primary)" />
                  <span className="dash-label">COGNIZANT ACADEMIC DASHBOARD (UI METHODOLOGY)</span>
                </div>
                <div className="dash-subject-selector">
                  {['Physics', 'Chemistry', 'Mathematics/Biology'].map((subj) => (
                    <button
                      key={subj}
                      className={`subj-btn ${activeSubject === subj ? 'active' : ''}`}
                      onClick={() => setActiveSubject(subj)}
                    >
                      {subj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Line & Visual Indicators */}
              <div className="dashboard-metrics-row">
                <div className="metric-box">
                  <span className="metric-name">Concept Mastery</span>
                  <div className="metric-progress-bar">
                    <div className="progress-fill fill-88" />
                  </div>
                  <span className="metric-val">Strong Trajectory</span>
                </div>

                <div className="metric-box">
                  <span className="metric-name">Speed & Accuracy</span>
                  <div className="metric-progress-bar">
                    <div className="progress-fill fill-92" />
                  </div>
                  <span className="metric-val">Optimized</span>
                </div>
              </div>

              {/* Strength & Weakness Analysis Board */}
              <div className="dashboard-analysis-board">
                <div className="analysis-col strength-col">
                  <div className="col-header">
                    <TrendingUp size={16} color="var(--color-success)" />
                    <span>Identified Strengths</span>
                  </div>
                  <ul className="analysis-tags">
                    <li><CheckCircle2 size={13} /> High accuracy in Mechanics</li>
                    <li><CheckCircle2 size={13} /> Strong Calculus problem solving</li>
                    <li><CheckCircle2 size={13} /> Fast NCERT question recall</li>
                  </ul>
                </div>

                <div className="analysis-col remedy-col">
                  <div className="col-header">
                    <RefreshCw size={16} color="var(--color-secondary)" />
                    <span>Corrective Feedback Loop</span>
                  </div>
                  <ul className="analysis-tags">
                    <li><AlertCircle size={13} /> Targeted revision for Organic reaction steps</li>
                    <li><AlertCircle size={13} /> Formula application drill scheduled</li>
                  </ul>
                </div>
              </div>

              <div className="dashboard-note-footer">
                <span className="note-icon">ℹ</span>
                <span>*Conceptual UI illustration representing Cognizant's diagnostic evaluation framework.</span>
              </div>
            </Card>
          </div>

          {/* Right Column: 6 System Components Grid */}
          <div className="components-list-col">
            <h3 className="components-heading">Structured Evaluation Matrix</h3>
            <div className="components-cards-list">
              {testComponents.map((item, idx) => (
                <div key={idx} className="comp-card-item">
                  <span className="comp-index">0{idx + 1}</span>
                  <div className="comp-text">
                    <h4 className="comp-title">{item.title}</h4>
                    <p className="comp-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
