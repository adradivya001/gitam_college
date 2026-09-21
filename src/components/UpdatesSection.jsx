import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { BellRing, Calendar, Megaphone, ShieldCheck } from 'lucide-react';
import './UpdatesSection.css';

export function UpdatesSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'CAMPUS NEWS';
  const title = sectionConfig?.title || "WHAT'S HAPPENING AT COGNIZANT.";
  const subtitle = sectionConfig?.subtitle || 'Latest Cognizant updates will appear here.';
  const emptyMessage = data?.updates?.emptyMessage || 'Latest Cognizant updates will appear here.';
  const updatesList = data?.updates?.updates || [];

  return (
    <section id="updates" className="visual-section updates-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {updatesList.length === 0 ? (
          <div className="updates-placeholder-container">
            <Card variant="glass" className="updates-empty-card">
              <div className="updates-icon-wrap">
                <BellRing size={32} color="var(--color-primary)" />
              </div>
              <h3 className="updates-empty-title">Official Campus Announcements</h3>
              <p className="updates-empty-message">{emptyMessage}</p>
              <div className="updates-meta-badge">
                <ShieldCheck size={14} />
                <span>CMS Announcements Hub</span>
              </div>
            </Card>
          </div>
        ) : (
          <div className="updates-grid">
            {updatesList.map((item, idx) => (
              <Card key={idx} variant="glass" className="update-card">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
