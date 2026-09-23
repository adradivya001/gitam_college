import React from 'react';
import { BookOpen, Compass, Target, TrendingUp, Award, Heart, Brain, Star } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

export function SgAboutPage({ onAction, data }) {
  const cName = data?.college?.name || 'Our College';
  const cShortName = data?.college?.shortName || 'Our College';
  const location = data?.college?.location || 'Anantapur, Andhra Pradesh';
  const pageData = data?.pages?.about?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const introData = pageData.find(s => s.type === 'about-content') || {};

  const chairmanData = pageData.find(s => s.type === 'chairperson-message') || {};

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.eyebrow || `ABOUT ${cShortName.toUpperCase()}`}
        breadcrumb="About"
        title={heroData.title || `About ${cName}`}
        subtitle={heroData.subtitle || "Building academic foundations and helping students move confidently towards higher education."}
        image={heroData.image || data?.gallery?.images?.[1]?.src || "/sri-gitam/campus_quad.png"}
      />

      {/* Chairman / Leadership Message */}
      {chairmanData && (
        <section className="sg-section sg-section-cream" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <Container maxWidth="1280px">
            <div className="sg-split" style={{ alignItems: 'center' }}>
              <div className="sg-split-left" style={{ flex: '0 0 45%', maxWidth: '45%' }}>
                <div 
                  className="sg-split-img" 
                  style={{ 
                    borderRadius: '20px', 
                    border: '1px solid var(--color-border)', 
                    boxShadow: '0 12px 32px rgba(125, 3, 3, 0.08)',
                    overflow: 'hidden',
                    background: '#f8f4ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxHeight: '620px'
                  }}
                >
                  <img 
                    src={chairmanData.image || "/sri-gitam/chairperson.jpg"} 
                    alt={chairmanData.name || "Manisha Nair.K"} 
                    style={{ width: '100%', height: 'auto', maxHeight: '620px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>
              <div className="sg-split-right" style={{ paddingLeft: '12px' }}>
                <span className="sg-eyebrow" style={{ color: 'var(--color-primary)' }}>
                  {chairmanData.eyebrow || "LEADERSHIP & VISION"}
                </span>
                <h2 className="sg-section-title" style={{ marginBottom: '20px' }}>
                  {chairmanData.title || "Chairperson's Message"}
                </h2>
                
                {chairmanData.quote && (
                  <div style={{
                    borderLeft: '4px solid var(--color-primary)',
                    paddingLeft: '18px',
                    margin: '16px 0 24px 0',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '18px',
                    color: 'var(--color-primary)',
                    lineHeight: '1.5'
                  }}>
                    "{chairmanData.quote}"
                  </div>
                )}

                <p style={{ fontSize: '15.5px', color: 'var(--text-secondary, #66615F)', lineHeight: '1.75', marginBottom: '24px', whiteSpace: 'pre-line' }}>
                  {chairmanData.content}
                </p>

                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary, #2A2A29)', margin: '0 0 4px 0' }}>
                    {chairmanData.name || "Manisha Nair.K"}
                  </h4>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary, #7D0303)', margin: 0 }}>
                    {chairmanData.designation || "Chairperson & Managing Director"}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary, #66615F)', margin: '2px 0 0 0' }}>
                    {chairmanData.college || cName}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Introduction */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src={introData.image || data?.gallery?.images?.[5]?.src || "/sri-gitam/lawn_study.png"} alt={`${cName} Campus`} />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">ABOUT {cShortName.toUpperCase()}</span>
              <h2 className="sg-section-title">{introData.title || "A Foundation for the Future"}</h2>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '20px', whiteSpace: 'pre-line' }}>
                {introData.content || `${cName} is an Intermediate college located in ${location}. The institution focuses on providing students with a structured academic environment where they can strengthen their subject knowledge, develop academic discipline and prepare for their next stage of education.`}
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '40px' }}>
                Students can choose from different Intermediate streams according to their interests and future aspirations.
              </p>
              <ul className="sg-feature-list">
                {[
                  { icon: BookOpen, label: 'Strong Academic Foundation', desc: 'Subject-focused Intermediate education across four streams.' },
                  { icon: Target, label: 'Focused Learning', desc: 'Structured academic progression to strengthen knowledge.' },
                  { icon: Compass, label: 'Academic Guidance', desc: 'Direction through every stage of the Intermediate journey.' },
                  { icon: TrendingUp, label: 'Future Preparation', desc: 'Building readiness for higher education and career pathways.' },
                ].map((f, i) => (
                  <li key={i} className="sg-feature-item">
                    <div className="sg-feature-icon-wrap"><f.icon size={20} /></div>
                    <div className="sg-feature-text">
                      <h4>{f.label}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="sg-text-link" onClick={() => onAction('navigate_to', 'programmes')}>Explore Our Programmes →</button>
            </div>
          </div>
        </Container>
      </section>

      {/* Educational Approach */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">OUR APPROACH</span>
            <h2 className="sg-section-title">Our Approach to Learning</h2>
            <p className="sg-section-desc sg-section-desc-center">
              We believe that strong fundamentals, consistent learning and proper academic direction help students make informed decisions about their future.
            </p>
          </div>
          <div className="sg-process-row">
            {[
              { n: '01', h: 'Understand', p: 'Build clarity in fundamental concepts across all subjects.' },
              { n: '02', h: 'Learn', p: 'Develop knowledge through structured classroom education.' },
              { n: '03', h: 'Practice', p: 'Strengthen understanding through regular academic practice.' },
              { n: '04', h: 'Evaluate', p: 'Track academic progress and identify areas for improvement.' },
              { n: '05', h: 'Prepare', p: 'Build readiness for higher education and future pathways.' },
            ].map((s, i) => (
              <div key={i} className="sg-process-step" data-step={s.n}>
                <div className="sg-process-num">{s.n}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">OUR DIRECTION</span>
            <h2 className="sg-section-title">Vision & Mission</h2>
          </div>
          <div className="sg-vm-grid">
            <div className="sg-vm-card sg-vm-vision">
              <span className="sg-eyebrow">VISION</span>
              <h3>Our Vision</h3>
              <p>To provide a focused educational environment where students can develop strong academic foundations, discover their potential and progress confidently towards higher education.</p>
            </div>
            <div className="sg-vm-card sg-vm-mission">
              <span className="sg-eyebrow">MISSION</span>
              <h3>Our Mission</h3>
              <p>To support students through structured Intermediate education, academic guidance and opportunities for personal development while preparing them for future academic pathways.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">OUR PRINCIPLES</span>
            <h2 className="sg-section-title">What We Value</h2>
          </div>
          <div className="sg-values-grid">
            {[
              { icon: BookOpen, h: 'Learning', p: 'A genuine commitment to academic growth and knowledge.' },
              { icon: Star, h: 'Discipline', p: 'Consistent effort, regular study and academic responsibility.' },
              { icon: TrendingUp, h: 'Growth', p: 'Continuous improvement and personal development.' },
              { icon: Compass, h: 'Guidance', p: 'Proper direction at every stage of the academic journey.' },
              { icon: Heart, h: 'Confidence', p: 'Building self-belief through academic progress and participation.' },
              { icon: Brain, h: 'Responsibility', p: 'Taking ownership of one\'s academic choices and actions.' },
            ].map((v, i) => (
              <div key={i} className="sg-value-item">
                <div className="sg-value-icon"><v.icon size={22} /></div>
                <div className="sg-value-text">
                  <h4>{v.h}</h4>
                  <p>{v.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Build the Foundation for What Comes Next"
        desc={`Explore the academic pathways available at ${cName}.`}
        primaryLabel="Explore Programmes"
        primaryTarget="programmes"
        onAction={onAction}
      />
    </div>
  );
}
