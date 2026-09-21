import React, { useState } from 'react';
import { Trophy, Percent, Award, GraduationCap } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const STAT_BLOCKS = [
  { icon: Trophy, label: 'Top Scores', sublabel: 'Academic Excellence' },
  { icon: Percent, label: 'Pass Percentage', sublabel: 'Overall Performance' },
  { icon: Award, label: 'Student Achievements', sublabel: 'Recognitions & Milestones' },
  { icon: GraduationCap, label: 'Competitive Exam Results', sublabel: 'Entrance Performance' },
];

const YEARS = ['2025–26', '2024–25', '2023–24'];

export function SgResultsPage({ onAction }) {
  const [activeYear, setActiveYear] = useState('2025–26');

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="RESULTS"
        breadcrumb="Results"
        title="Student Achievements"
        subtitle="Recognising the academic effort, progress and achievements of our students."
        image="/sri-gitam/gallery/smart_classrooms_1789976999081.jpg"
      />

      {/* Celebrating Progress */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">ACHIEVEMENTS</span>
              <h2 className="sg-section-title">Celebrating Student Progress</h2>
              <p className="sg-section-desc">
                Academic achievements reflect the effort of students, teachers and families working together towards a common goal.
              </p>
              <p style={{ fontSize: '14px', color: '#B6533E', fontStyle: 'italic', marginTop: '24px' }}>
                Results will be updated with verified academic data.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-result-blocks">
                {STAT_BLOCKS.map((s, i) => (
                  <div key={i} className="sg-result-block">
                    <div className="sg-result-block-icon"><s.icon size={36} /></div>
                    <h3>—</h3>
                    <p style={{ fontWeight: '600', color: '#172A43', marginBottom: '4px' }}>{s.label}</p>
                    <p style={{ fontSize: '13px' }}>{s.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Year Filter */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header">
            <span className="sg-eyebrow">ACADEMIC RESULTS</span>
            <h2 className="sg-section-title">Year-Wise Performance</h2>
          </div>
          <div className="sg-year-tabs">
            {YEARS.map(y => (
              <button key={y} className={`sg-year-tab ${activeYear === y ? 'active' : ''}`} onClick={() => setActiveYear(y)}>
                {y}
              </button>
            ))}
          </div>
          <div className="sg-empty-state">
            <h3>Results for {activeYear}</h3>
            <p>Verified academic results for this academic year will be updated here once available.</p>
          </div>
        </Container>
      </section>

      {/* Achievement Stories */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">STUDENT STORIES</span>
            <h2 className="sg-section-title">Achievement Stories</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Individual student achievements and milestones will be featured here with verified information.
            </p>
          </div>
          <div className="sg-empty-state">
            <Award size={48} color="#E8E1D9" style={{ margin: '0 auto 16px', display: 'block' }} />
            <h3>Student Achievements</h3>
            <p>Verified student achievement stories will be added here. This section will be updated as information becomes available.</p>
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Every Achievement Begins With a Strong Foundation"
        desc="Start your Intermediate journey at Sri GITAM Junior College."
        primaryLabel="Explore Academics"
        primaryTarget="academics"
        onAction={onAction}
      />
    </div>
  );
}
