import React from 'react';
import { BookOpen, Target, Compass, TrendingUp, Atom, Dna, BarChart2, Users, Brain } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const PROG_CARDS = [
  { id: 'mpc', name: 'MPC', subjects: 'Mathematics • Physics • Chemistry', bg: 'var(--color-sg-peach, #F8E9E3)', icon: Atom },
  { id: 'bipc', name: 'BiPC', subjects: 'Biology • Physics • Chemistry', bg: 'var(--color-sg-sage, #EAF2EE)', icon: Dna },
  { id: 'mec', name: 'MEC', subjects: 'Mathematics • Economics • Commerce', bg: 'var(--color-sg-sand, #F5EFE3)', icon: BarChart2 },
  { id: 'cec', name: 'CEC', subjects: 'Civics • Economics • Commerce', bg: 'var(--color-sg-lavender, #F0ECF6)', icon: Users },
];

export function SgAcademicsPage({ onAction }) {
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="ACADEMICS"
        breadcrumb="Academics"
        title="Learning With Purpose"
        subtitle="Develop strong concepts, strengthen subject knowledge and prepare for the next stage of your education."
        image="/sri-gitam/gallery/smart_classrooms_1789976999081.jpg"
      />

      {/* Academic Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src="/sri-gitam/gallery/smart_classrooms_1789976999081.jpg" alt="Academics" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">ACADEMIC APPROACH</span>
              <h2 className="sg-section-title">An Academic Journey Built Around Understanding</h2>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginBottom: '24px' }}>
                Intermediate education is an important stage in a student's academic journey. Sri GITAM's academic approach focuses on developing subject understanding, encouraging consistent learning and helping students prepare for future educational pathways.
              </p>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7' }}>
                Each stream is designed to give students the foundational knowledge they need to progress into higher education with confidence and clarity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Journey */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">THE LEARNING JOURNEY</span>
              <h2 className="sg-section-title">Five Stages of Academic Growth</h2>
              <p className="sg-section-desc" style={{ marginBottom: '32px' }}>
                Our approach guides students through a structured academic progression from concept clarity to exam readiness.
              </p>
              <button className="sg-btn-primary" onClick={() => onAction('navigate_to', 'programmes')}>Explore Programmes</button>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-timeline">
                {[
                  { n: '01', h: 'Understand', label: 'Conceptual Clarity', p: 'Build clarity in fundamental concepts across all subjects of your chosen stream.' },
                  { n: '02', h: 'Learn', label: 'Knowledge Building', p: 'Develop subject knowledge through structured classroom learning and engagement.' },
                  { n: '03', h: 'Practice', label: 'Skill Development', p: 'Strengthen understanding through regular academic practice and exercises.' },
                  { n: '04', h: 'Evaluate', label: 'Progress Tracking', p: 'Identify areas of improvement and work towards continuous academic development.' },
                  { n: '05', h: 'Prepare', label: 'Future Readiness', p: 'Build readiness for higher education examinations and future career pathways.' },
                ].map((s, i) => (
                  <div key={i} className="sg-timeline-item" style={{ alignItems: 'flex-start' }}>
                    <div className="sg-timeline-num" style={{ marginTop: '8px', boxShadow: '0 0 0 8px white' }}>{s.n}</div>
                    <div className="sg-timeline-body sg-card" style={{ flex: 1, padding: '28px', marginTop: '0', cursor: 'default' }}>
                      <p className="sg-timeline-label" style={{ marginBottom: '8px' }}>{s.label}</p>
                      <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '22px', fontWeight: '700', color: '#172A43', margin: '0 0 12px 0' }}>{s.h}</h3>
                      <p style={{ fontSize: '15px', color: '#657080', lineHeight: '1.6', margin: 0 }}>{s.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Academic Pathways */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">OUR PROGRAMMES</span>
            <h2 className="sg-section-title">Academic Pathways</h2>
            <p className="sg-section-desc sg-section-desc-center">Choose an Intermediate stream aligned with your interests and future goals.</p>
          </div>
          <div className="sg-cards-grid">
            {PROG_CARDS.map(p => (
              <div key={p.id} className="sg-programme-card" style={{ background: p.bg, padding: '32px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <p.icon size={26} color="#172A43" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: '#172A43' }}>{p.name}</h3>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#657080', marginBottom: '20px' }}>{p.subjects}</p>
                <button className="sg-text-link" onClick={() => onAction('navigate_to', 'programmes')}>Explore {p.name} →</button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Academic Focus */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">ACADEMIC FOCUS</span>
            <h2 className="sg-section-title">The Four Pillars of Our Academic System</h2>
          </div>
          <div className="sg-focus-grid">
            {[
              { icon: Brain, h: 'Conceptual Understanding', p: 'Build genuine understanding of core subject concepts rather than surface-level memorisation.' },
              { icon: Target, h: 'Regular Practice', p: 'Develop academic strength through consistent practice and application of concepts.' },
              { icon: TrendingUp, h: 'Academic Progress', p: 'Track improvement and work systematically towards stronger academic performance.' },
              { icon: Compass, h: 'Future Preparation', p: 'Build the foundation needed for higher education and long-term career pathways.' },
            ].map((f, i) => (
              <div key={i} className="sg-focus-item">
                <div className="sg-focus-icon"><f.icon size={28} /></div>
                <h4>{f.h}</h4>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Choose a Path That Matches Your Future"
        desc="Explore the four Intermediate streams available at Sri GITAM Junior College."
        primaryLabel="Explore Programmes"
        primaryTarget="programmes"
        onAction={onAction}
      />
    </div>
  );
}
