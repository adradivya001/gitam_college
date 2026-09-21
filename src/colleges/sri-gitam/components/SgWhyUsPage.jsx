import React from 'react';
import { BookOpen, Target, Map, Compass, Briefcase, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const PILLARS = [
  { n: '01', icon: BookOpen, h: 'Academic Foundation', p: 'Build a strong foundation in the core subjects of your chosen Intermediate stream.' },
  { n: '02', icon: Target, h: 'Focused Learning', p: 'Follow a structured academic journey designed around consistent learning and progress.' },
  { n: '03', icon: Map, h: 'Multiple Academic Pathways', p: 'Choose from MPC, BiPC, MEC and CEC based on your interests and future plans.' },
  { n: '04', icon: Compass, h: 'Academic Guidance', p: 'Receive direction and support as you progress through your Intermediate education.' },
  { n: '05', icon: Briefcase, h: 'Future Awareness', p: 'Understand the higher-education opportunities and career pathways associated with your chosen stream.' },
  { n: '06', icon: Users, h: 'Student Development', p: 'Develop confidence, discipline, communication and a responsible approach towards learning.' },
];

export function SgWhyUsPage({ onAction }) {
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="WHY SRI GITAM"
        breadcrumb="Why Sri GITAM"
        title="Why Sri GITAM Junior College?"
        subtitle="An academic environment focused on learning, guidance, personal development and future preparation."
        image="/sri-gitam/gallery/campus_kamalanagar_1789976860423.jpg"
      />

      {/* More than a Classroom */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src="/sri-gitam/gallery/smart_classrooms_1789976999081.jpg" alt="Sri GITAM Classrooms" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">OUR ENVIRONMENT</span>
              <h2 className="sg-section-title">More Than a Classroom</h2>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginBottom: '24px' }}>
                Intermediate education is about more than completing a syllabus. It is a stage where students develop knowledge, confidence, discipline and clarity about their future.
              </p>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7' }}>
                Sri GITAM Junior College provides a structured academic environment that supports students in building genuine subject knowledge and preparing for their higher-education journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Six Pillars */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">SIX PILLARS</span>
            <h2 className="sg-section-title">What Makes Sri GITAM Different</h2>
            <p className="sg-section-desc sg-section-desc-center">Six core elements that define the Sri GITAM academic environment.</p>
          </div>
          <div className="sg-cards-grid-3">
            {PILLARS.map((pillar, i) => (
              <div key={i} className="sg-card" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ position: 'absolute', top: '-16px', right: '-8px', fontSize: '120px', fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'rgba(23,42,67,0.03)', zIndex: 0, lineHeight: 1, pointerEvents: 'none' }}>
                  {pillar.n}
                </div>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#F8E9E3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B6533E', position: 'relative', zIndex: 1 }}>
                  <pillar.icon size={24} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '24px', fontWeight: '700', color: '#172A43', marginBottom: '12px' }}>{pillar.h}</h3>
                  <p style={{ fontSize: '15px', color: '#657080', lineHeight: '1.6', margin: 0 }}>{pillar.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement */}
      <section className="sg-statement-section">
        <Container maxWidth="1280px">
          <div className="sg-statement-text">
            <span className="sg-statement-line">Learn With Purpose.</span>
            <span className="sg-statement-line">Grow With Confidence.</span>
            <span className="sg-statement-line">Prepare For What Comes Next.</span>
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Find Your Academic Path"
        desc="Explore the four Intermediate programmes available at Sri GITAM Junior College."
        primaryLabel="Explore Programmes"
        primaryTarget="programmes"
        onAction={onAction}
      />
    </div>
  );
}
