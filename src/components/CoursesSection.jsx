import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { Button } from './common/Button';
import { BookOpen, CheckCircle, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import './CoursesSection.css';

export function CoursesSection({ data, sectionConfig, theme, onAction }) {
  const coursesData = data?.courses || {};
  const streams = (coursesData.streams || []).filter((s) => s.enabled !== false);
  const [selectedStreamId, setSelectedStreamId] = useState(streams[0]?.id || 'mpc');

  const activeStream = streams.find((s) => s.id === selectedStreamId) || streams[0];

  const eyebrow = sectionConfig?.eyebrow || 'ACADEMICS';
  const title = sectionConfig?.title || coursesData.heading || 'Choose Your Path.';
  const subtitle = sectionConfig?.subtitle || coursesData.subheading || 'Build a strong academic foundation for what comes next.';

  if (!streams.length) return null;

  return (
    <section id="academics" className="courses-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Interactive Stream Selection Tabs */}
        <div className="stream-tabs-bar">
          {streams.map((stream) => (
            <button
              key={stream.id}
              className={`stream-tab-btn ${stream.id === selectedStreamId ? 'active' : ''}`}
              onClick={() => setSelectedStreamId(stream.id)}
            >
              <span className="tab-stream-code">{stream.code}</span>
              <span className="tab-stream-badge">{stream.badge?.split(' ')[0] || 'Stream'}</span>
            </button>
          ))}
        </div>

        {/* Selected Stream Deep Dive Card */}
        {activeStream && (
          <div className="stream-detail-card">
            <div className="stream-detail-content">
              <div className="stream-badge-row">
                <Badge variant="glow">{activeStream.badge}</Badge>
                <span className="stream-code-highlight">{activeStream.code}</span>
              </div>

              <h3 className="stream-name">{activeStream.name}</h3>
              <p className="stream-description">{activeStream.description}</p>

              {/* Core Subjects */}
              <div className="stream-section-group">
                <h4 className="group-title">
                  <BookOpen size={16} /> Core Curriculum
                </h4>
                <div className="subjects-pills">
                  {activeStream.subjects?.map((sub, idx) => (
                    <span key={idx} className="subject-pill">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career / Academic Directions */}
              <div className="stream-section-group">
                <h4 className="group-title">
                  <GraduationCap size={16} /> Academic & Career Directions
                </h4>
                <div className="career-tags-list">
                  {activeStream.careerDirections?.map((c, idx) => (
                    <div key={idx} className="career-tag-item">
                      <div className="career-dot" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="stream-cta-row">
                <Button
                  variant="primary"
                  icon={ArrowRight}
                  onClick={() => onAction('open_admissions_modal', activeStream.code)}
                >
                  Enquire About {activeStream.code}
                </Button>
              </div>
            </div>

            {/* Stream Image Visual */}
            <div className="stream-detail-visual">
              <img
                src={activeStream.image}
                alt={activeStream.name}
                className="stream-image"
                loading="lazy"
              />
              <div className="stream-image-overlay" />
              
              {activeStream.highlights && (
                <div className="stream-floating-highlights">
                  <span className="highlights-header">Academic Focus</span>
                  {activeStream.highlights.map((h, idx) => (
                    <div key={idx} className="stream-highlight-line">
                      <CheckCircle size={14} className="highlight-check" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
