import React from 'react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';



export function SgStudentLifePage({ onAction, data }) {
  const pageData = data?.pages?.['student-life']?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const activitiesData = pageData.find(s => s.type === 'why-us') || {};

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.eyebrow || "STUDENT LIFE"}
        breadcrumb={heroData.breadcrumb || "Student Life"}
        title={heroData.title || "Life Beyond the Classroom"}
        subtitle={heroData.subtitle || "Academic growth is strengthened by participation, interaction, creativity and personal development."}
        image={data?.gallery?.images?.[1]?.src || "/sri-gitam/campus_flag_assembly.png"}
      />

      {/* Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src={data?.gallery?.images?.[1]?.src || "/sri-gitam/campus_flag_assembly.png"} alt="Student Life" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">STUDENT EXPERIENCE</span>
              <h2 className="sg-section-title">Learn. Participate. Grow.</h2>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '24px' }}>
                Student life at {data?.college?.name} is about developing the whole person — not just academic knowledge, but also communication, confidence, teamwork and a sense of responsibility.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7' }}>
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
            <h2 className="sg-section-title">Life at {data?.college?.shortName || 'Our College'}</h2>
          </div>
          <div className="sg-activity-strip">
            {(activitiesData.pillars || []).map((act, i) => {
              const activityImages = [
                '/sri-gitam/yoga_session.png',
                '/sri-gitam/meditation_wellness.png',
                '/sri-gitam/sports_volleyball.png',
                '/sri-gitam/lawn_study.png',
                '/sri-gitam/campus_flag_assembly.png'
              ];
              const imgSrc = activityImages[i % activityImages.length];
              return (
                <div key={i} className={`sg-activity-item ${i % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="sg-activity-img" style={{ border: '1px solid var(--color-border, #EDE5D8)', boxShadow: '0 4px 16px rgba(24, 30, 36, 0.06)' }}>
                    <img src={imgSrc} alt={act.title} />
                  </div>
                  <div className="sg-activity-content">
                    <span className="sg-eyebrow">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{act.title}</h3>
                    <p>{act.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Every Experience Shapes the Journey"
        desc={`Join ${data?.college?.name} and be part of a community that values learning, growth and student participation.`}
        primaryLabel="Explore Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
