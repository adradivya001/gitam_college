import React from 'react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const ACTIVITIES = [
  { h: 'Academic Activities', p: 'Encourage students to actively participate in their academic journey through classroom engagement, presentations and subject-related activities.', img: '/sri-gitam/gallery/smart_classrooms_1789976999081.jpg' },
  { h: 'Events & Celebrations', p: 'Provide opportunities for students to participate in institutional events, cultural celebrations and annual functions that build a sense of community.', img: '/sri-gitam/gallery/campus_ramnagar_1789977013402.jpg' },
  { h: 'Student Engagement', p: 'Create opportunities for students to interact, participate in group activities and build communication, teamwork and confidence throughout their Intermediate journey.', img: '/sri-gitam/gallery/girls_campus_1789977026225.jpg' },
  { h: 'Sports & Recreation', p: 'Encourage students to maintain a healthy balance between academic responsibilities and physical activity through sports and recreational options.', img: '/sri-gitam/gallery/sports_field_1789977041806.jpg' },
  { h: 'Cultural Activities', p: 'Encourage creativity, expression and participation in cultural experiences that build confidence, identity and a well-rounded personality.', img: '/sri-gitam/gallery/student_activities_1789977201922.jpg' },
];

export function SgStudentLifePage({ onAction }) {
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="STUDENT LIFE"
        breadcrumb="Student Life"
        title="Life Beyond the Classroom"
        subtitle="Academic growth is strengthened by participation, interaction, creativity and personal development."
        image="/sri-gitam/gallery/student_activities_1789977201922.jpg"
      />

      {/* Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src="/sri-gitam/gallery/student_activities_1789977201922.jpg" alt="Student Life" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">STUDENT EXPERIENCE</span>
              <h2 className="sg-section-title">Learn. Participate. Grow.</h2>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginBottom: '24px' }}>
                Student life at Sri GITAM is about developing the whole person — not just academic knowledge, but also communication, confidence, teamwork and a sense of responsibility.
              </p>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7' }}>
                Through academic activities, events, sports and cultural programmes, students have the opportunity to grow beyond the classroom and build skills that last a lifetime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Activities */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">ACTIVITIES</span>
            <h2 className="sg-section-title">Life at Sri GITAM</h2>
          </div>
          <div className="sg-activity-strip">
            {ACTIVITIES.map((act, i) => (
              <div key={i} className={`sg-activity-item ${i % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="sg-activity-img">
                  <img src={act.img} alt={act.h} />
                </div>
                <div className="sg-activity-content">
                  <span className="sg-eyebrow">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{act.h}</h3>
                  <p>{act.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Every Experience Shapes the Journey"
        desc="Join Sri GITAM Junior College and be part of a community that values learning, growth and student participation."
        primaryLabel="Explore Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
