import React, { useState } from 'react';
import { Atom, Dna, BarChart2, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const PROGRAMMES = [
  {
    id: 'mpc', name: 'MPC', subjects: 'Mathematics • Physics • Chemistry',
    desc: 'MPC provides a strong foundation in mathematics and physical sciences for students interested in analytical, technical and scientific fields.',
    pathways: ['Engineering', 'Technology', 'Computer Science', 'Mathematics', 'Physical Sciences', 'Architecture and related fields'],
    bg: '#F8E9E3', icon: Atom,
  },
  {
    id: 'bipc', name: 'BiPC', subjects: 'Biology • Physics • Chemistry',
    desc: 'BiPC provides a foundation in biological and physical sciences for students interested in healthcare, life sciences and related fields.',
    pathways: ['Medicine', 'Pharmacy', 'Biotechnology', 'Life Sciences', 'Allied Health Sciences', 'Agricultural Sciences'],
    bg: '#EAF2EE', icon: Dna,
  },
  {
    id: 'mec', name: 'MEC', subjects: 'Mathematics • Economics • Commerce',
    desc: 'MEC combines mathematics, economics and commerce-oriented learning for students interested in business, finance and analytical disciplines.',
    pathways: ['Commerce', 'Finance', 'Economics', 'Business', 'Management', 'Accounting'],
    bg: '#F5EFE3', icon: BarChart2,
  },
  {
    id: 'cec', name: 'CEC', subjects: 'Civics • Economics • Commerce',
    desc: 'CEC provides a foundation in commerce, economics and social sciences for students exploring business, management and related fields.',
    pathways: ['Commerce', 'Management', 'Law', 'Economics', 'Social Sciences', 'Business Studies'],
    bg: '#F0ECF6', icon: Users,
  },
];

export function SgProgrammesPage({ onAction }) {
  const [active, setActive] = useState('mpc');

  const scrollToSection = (id) => {
    setActive(id);
    const el = document.getElementById(`prog-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="OUR PROGRAMMES"
        breadcrumb="Programmes"
        title="Choose the Path That Fits Your Future"
        subtitle="Explore the Intermediate programmes available at Sri GITAM Junior College and find the stream that aligns with your interests."
      />

      {/* Programme Nav */}
      <div className="sg-prog-nav">
        <Container maxWidth="1280px">
          <div className="sg-prog-nav-inner">
            {PROGRAMMES.map(p => (
              <button key={p.id} className={`sg-prog-nav-btn ${active === p.id ? 'active' : ''}`} onClick={() => scrollToSection(p.id)}>
                {p.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Programme Sections */}
      {PROGRAMMES.map((prog, idx) => (
        <section key={prog.id} id={`prog-${prog.id}`} className="sg-prog-section" style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#FAF7F2' }}>
          <Container maxWidth="1280px">
            <div className="sg-prog-section-inner">
              <div className="sg-prog-content">
                <span className="sg-eyebrow">PROGRAMME</span>
                <h2 className="sg-section-title">{prog.name}</h2>
                <p className="sg-prog-subjects-line">{prog.subjects}</p>
                <p className="sg-prog-desc-text">{prog.desc}</p>
                <div className="sg-pathways">
                  <h4>Future Pathways</h4>
                  <ul className="sg-pathways-list">
                    {prog.pathways.map((pw, i) => <li key={i}>{pw}</li>)}
                  </ul>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <button className="sg-btn-primary" onClick={() => onAction('open_admissions_modal')}>
                    Enquire About {prog.name}
                  </button>
                </div>
              </div>
              <div className="sg-prog-visual" style={{ background: prog.bg }}>
                <div className="sg-prog-icon-big">
                  <prog.icon size={40} color="#172A43" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '28px', fontWeight: '700', color: '#172A43' }}>{prog.name}</h3>
                <p style={{ fontSize: '14px', color: '#657080', lineHeight: '1.6' }}>{prog.subjects}</p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '24px' }}>
                  <p style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#172A43', marginBottom: '12px' }}>Core Subjects</p>
                  {prog.subjects.split(' • ').map((s, i) => (
                    <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '15px', color: '#657080' }}>{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

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
              {PROGRAMMES.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.subjects}</td>
                  <td>{p.id === 'mpc' ? 'Science & Technology' : p.id === 'bipc' ? 'Life & Health Sciences' : p.id === 'mec' ? 'Business & Analytics' : 'Commerce & Social Sciences'}</td>
                  <td>{p.pathways.slice(0, 3).join(', ')} and more</td>
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
