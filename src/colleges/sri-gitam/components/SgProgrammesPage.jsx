import React, { useState } from 'react';
import { Atom, Dna, BarChart2, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';



export function SgProgrammesPage({ onAction, data }) {
  const [active, setActive] = useState('mpc');
  const pageData = data?.pages?.programmes?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const progData = pageData.find(s => s.type === 'programs') || {};
  const ICONS = { Atom, Dna, BarChart2, Users };

  const parsedProgrammes = (progData.programs || []).map(p => {
    const parts = (p.description || '').split('\n\n');
    const desc = parts[0] || '';
    let pathwaysStr = parts[1] || '';
    pathwaysStr = pathwaysStr.replace(/^Future pathways:\s*/i, '').replace(/^Possible Pathways:\s*/i, '');
    const pathways = pathwaysStr ? pathwaysStr.split(',').map(s => s.trim()) : [];
    
    return {
      id: p.code?.toLowerCase() || p.name?.toLowerCase(),
      name: p.name || p.title,
      subjects: p.subjects || p.subtitle,
      desc,
      pathways,
      bg: p.bgColor || (p.name === 'MPC' ? 'var(--color-sg-peach, #F8E9E3)' : p.name === 'BiPC' ? 'var(--color-sg-sage, #EAF2EE)' : p.name === 'MEC' ? 'var(--color-sg-sand, #F5EFE3)' : 'var(--color-sg-lavender, #F0ECF6)'),
      icon: ICONS[p.icon] || (p.name === 'MPC' ? Atom : p.name === 'BiPC' ? Dna : p.name === 'MEC' ? BarChart2 : Users)
    };
  });

  const scrollToSection = (id) => {
    setActive(id);
    const el = document.getElementById(`prog-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.title || "OUR PROGRAMMES"}
        breadcrumb={heroData.title || "Programmes"}
        title={heroData.title || "Choose the Path That Fits Your Future"}
        subtitle={heroData.subtitle || `Explore the Intermediate programmes available at ${data?.college?.name}.`}
        image={heroData.image || data?.gallery?.images?.[2]?.src || "/sri-gitam/science_lab.png"}
      />

      {/* Programme Nav */}
      <div className="sg-prog-nav">
        <Container maxWidth="1280px">
          <div className="sg-prog-nav-inner">
            {parsedProgrammes.map(p => (
              <button key={p.id} className={`sg-prog-nav-btn ${active === p.id ? 'active' : ''}`} onClick={() => scrollToSection(p.id)}>
                {p.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Programme Sections */}
      {parsedProgrammes.map((prog, idx) => {
        const IconComponent = prog.icon;
        return (
          <section key={prog.id} id={`prog-${prog.id}`} className="sg-prog-section" style={{ background: idx % 2 === 0 ? 'var(--color-white, #FFFFFF)' : 'var(--color-bg, #FAF7F2)' }}>
            <Container maxWidth="1280px">
              <div className="sg-prog-section-inner">
                <div className="sg-prog-content">
                  <span className="sg-eyebrow">PROGRAMME</span>
                  <h2 className="sg-section-title">{prog.name}</h2>
                  <p className="sg-prog-subjects-line">{prog.subjects}</p>
                  <p className="sg-prog-desc-text">{prog.desc}</p>
                  {prog.pathways.length > 0 && (
                    <div className="sg-pathways">
                      <h4>Future Pathways</h4>
                      <ul className="sg-pathways-list">
                        {prog.pathways.map((pw, i) => <li key={i}>{pw}</li>)}
                      </ul>
                    </div>
                  )}
                  <div style={{ marginTop: '40px' }}>
                    <button className="sg-btn-primary" onClick={() => onAction('open_admissions_modal')}>
                      Enquire About {prog.name}
                    </button>
                  </div>
                </div>
                <div className="sg-prog-visual" style={{ background: prog.bg }}>
                  <div className="sg-prog-icon-big">
                    <IconComponent size={40} color="var(--color-primary, #172A43)" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '28px', fontWeight: '700', color: 'var(--color-primary, #172A43)' }}>{prog.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted, #657080)', lineHeight: '1.6' }}>{prog.subjects}</p>
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '24px' }}>
                    <p style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary, #172A43)', marginBottom: '12px' }}>Core Subjects</p>
                    {prog.subjects.split(' • ').map((s, i) => (
                      <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '15px', color: 'var(--color-muted, #657080)' }}>{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Comparison */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">COMPARISON</span>
            <h2 className="sg-section-title">Programme Overview</h2>
          </div>
          <table className="sg-comparison">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Core Subjects</th>
                <th>Academic Direction</th>
                <th>Future Pathways</th>
              </tr>
            </thead>
            <tbody>
              {parsedProgrammes.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.subjects}</td>
                  <td>{p.id === 'mpc' ? 'Science & Technology' : p.id === 'bipc' ? 'Life & Health Sciences' : p.id === 'mec' ? 'Business & Analytics' : 'Commerce & Social Sciences'}</td>
                  <td>{p.pathways.length > 0 ? p.pathways.slice(0, 3).join(', ') + ' and more' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>

      <SgCTABanner
        title="Not Sure Which Stream Fits You?"
        desc="Connect with the admissions team to understand the available programmes and choose a pathway that matches your interests."
        primaryLabel="Talk to Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
