import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Award, Clock, Database, ShieldCheck } from 'lucide-react';
import './ResultsSection.css';

export function ResultsSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'PERFORMANCE ARCHIVE';
  const title = sectionConfig?.title || 'RESULTS THAT SPEAK.';
  const subtitle = sectionConfig?.subtitle || 'Student results and achievements will be updated here.';
  const emptyMessage = data?.results?.emptyMessage || 'Student results and achievements will be updated here.';
  const resultsList = data?.results?.cards || [];

  return (
    <section id="results" className="visual-section results-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {resultsList.length === 0 ? (
          <div className="results-placeholder-container">
            <Card variant="glass" className="results-empty-card">
              <div className="empty-icon-wrap">
                <Database size={32} color="var(--color-primary)" />
              </div>
              <h3 className="empty-title">Official Performance Archive</h3>
              <p className="empty-message">{emptyMessage}</p>
              <div className="empty-meta-badge">
                <ShieldCheck size={14} />
                <span>Verified Data Ready CMS Container</span>
              </div>
            </Card>
          </div>
        ) : (
          <div className="results-grid">
            {resultsList.map((res, idx) => (
              <Card key={idx} variant="glass" className="result-card">
                <h3>{res.title}</h3>
                <p>{res.details}</p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
