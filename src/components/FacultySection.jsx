import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Badge } from './common/Badge';
import { GraduationCap, ArrowUpRight, Award } from 'lucide-react';
import './FacultySection.css';

export function FacultySection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'EXPERT FACULTY';
  const title = sectionConfig?.title || 'MEET THE FACULTY BEHIND THE METHOD.';
  const subtitle = sectionConfig?.subtitle || 'Mentors with IIT, NIT, and top university qualifications dedicated to competitive exam success.';
  const members = data?.faculty?.members || [];

  return (
    <section id="faculty" className="visual-section faculty-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="faculty-grid">
          {members.map((member, idx) => (
            <div key={member.id || idx} className="faculty-card-wrap">
              <Card variant="glass" className="faculty-card">
                <div className="faculty-avatar-box">
                  <div className="faculty-avatar-circle">
                    <span className="avatar-initials">{member.initials || 'FC'}</span>
                  </div>
                  <Badge variant="glow" size="sm" className="faculty-subject-badge">
                    {member.subject}
                  </Badge>
                </div>

                <div className="faculty-info">
                  <h3 className="faculty-name">{member.name}</h3>
                  <span className="faculty-role">{member.role}</span>
                  
                  <div className="faculty-qualification-box">
                    <GraduationCap size={16} className="qual-icon" />
                    <span>{member.qualification}</span>
                  </div>

                  <p className="faculty-experience">{member.experience}</p>
                </div>

                <div className="faculty-card-action">
                  <button
                    className="faculty-profile-btn"
                    onClick={() => onAction('open_detail_modal', `faculty:${member.id}`)}
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
