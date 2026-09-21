import React from 'react';
import { BookOpen, Target, Map, Compass, Briefcase, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';



export function SgWhyUsPage({ onAction, data }) {
  const pageData = data?.pages?.['why-us']?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const pillarsData = pageData.find(s => s.type === 'why-us') || {};
  const closingData = pageData.find(s => s.type === 'about-content') || {};
  const ICONS = { BookOpen, Target, Map, Compass, Briefcase, Users };

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.title || "WHY CHOOSE US"}
        breadcrumb={heroData.title || "Why Us"}
        title={heroData.title || "Why Choose Us?"}
        subtitle={heroData.subtitle || "An environment designed for success."}
        image={data?.gallery?.images?.[0]?.src || "/sri-gitam/gallery/campus_kamalanagar_1789976860423.jpg"}
      />

      {/* More than a Classroom */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src={data?.gallery?.images?.[1]?.src || "/sri-gitam/gallery/smart_classrooms_1789976999081.jpg"} alt={data?.college?.name} />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">OUR ENVIRONMENT</span>
              <h2 className="sg-section-title">More Than a Classroom</h2>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '24px' }}>
                Intermediate education is about more than completing a syllabus. It is a stage where students develop knowledge, confidence, discipline and clarity about their future.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7' }}>
                {data?.college?.name} provides a structured academic environment that supports students in building genuine subject knowledge and preparing for their higher-education journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Six Pillars */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">PILLARS</span>
            <h2 className="sg-section-title">{pillarsData.title || `What Makes ${data?.college?.shortName} Different`}</h2>
            <p className="sg-section-desc sg-section-desc-center">Core elements that define our academic environment.</p>
          </div>
          <div className="sg-cards-grid-3">
            {(pillarsData.pillars || []).map((pillar, i) => {
              const IconComp = ICONS[pillar.icon] || BookOpen;
              return (
                <div key={i} className="sg-card" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ position: 'absolute', top: '-16px', right: '-8px', fontSize: '120px', fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'rgba(23,42,67,0.03)', zIndex: 0, lineHeight: 1, pointerEvents: 'none' }}>
                    0{i + 1}
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--color-sg-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', position: 'relative', zIndex: 1 }}>
                    <IconComp size={24} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '24px', fontWeight: '700', color: 'var(--color-text)', marginBottom: '12px' }}>{pillar.title}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Statement */}
      <section className="sg-statement-section">
        <Container maxWidth="1280px">
          <div className="sg-statement-text">
            {closingData.content ? closingData.content.split('. ').map((line, i) => (
              <span key={i} className="sg-statement-line">{line}{i < closingData.content.split('. ').length - 1 ? '.' : ''}</span>
            )) : (
              <>
                <span className="sg-statement-line">Learn With Purpose.</span>
                <span className="sg-statement-line">Grow With Confidence.</span>
                <span className="sg-statement-line">Prepare For What Comes Next.</span>
              </>
            )}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Find Your Academic Path"
        desc={`Explore the Intermediate programmes available at ${data?.college?.name}.`}
        primaryLabel="Explore Programmes"
        primaryTarget="programmes"
        onAction={onAction}
      />
    </div>
  );
}
