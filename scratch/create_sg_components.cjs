const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src', 'colleges', 'sri-gitam', 'components');

const files = {
  'SgHero.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Compass, Target, Users } from 'lucide-react';
import './SgHero.css';

const ICONS = { BookOpen, Compass, Target, Users };

export function SgHero({ sectionConfig, onAction }) {
  return (
    <section className="sg-hero-section">
      <Container maxWidth="1280px">
        <div className="sg-hero-content-wrapper">
          <div className="sg-hero-text-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h1 className="sg-hero-title">
              {sectionConfig.title.split('\n').map((line, i) => (
                <span key={i} className="sg-title-line">{line}</span>
              ))}
            </h1>
            <p className="sg-hero-subtitle">{sectionConfig.subtitle}</p>
            <div className="sg-hero-actions">
              <button 
                className="btn-primary"
                onClick={() => onAction('navigate_to', sectionConfig.primaryCta.target)}
              >
                {sectionConfig.primaryCta.label}
              </button>
              <button 
                className="btn-secondary"
                onClick={() => onAction('navigate_to', sectionConfig.secondaryCta.target)}
              >
                {sectionConfig.secondaryCta.label}
              </button>
            </div>
          </div>
          <div className="sg-hero-image-wrapper">
            <img src={sectionConfig.heroImage} alt="Sri GITAM Junior College" className="sg-hero-img" />
          </div>
        </div>

        <div className="sg-hero-highlights">
          {sectionConfig.highlights.map((highlight, index) => {
            const IconComponent = ICONS[highlight.icon] || Target;
            return (
              <div key={index} className="sg-highlight-item">
                <div className="sg-highlight-icon-wrapper">
                  <IconComponent size={24} className="sg-highlight-icon" />
                </div>
                <span className="sg-highlight-label">{highlight.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
`,
  'SgHero.css': `
.sg-hero-section {
  background-color: var(--color-background);
  padding: 80px 0 0 0;
}
.sg-hero-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
}
.sg-hero-text-content {
  flex: 0 0 45%;
  max-width: 45%;
}
.sg-hero-image-wrapper {
  flex: 0 0 50%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  height: 500px;
}
.sg-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sg-title-line {
  display: block;
}
.sg-hero-title {
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 24px;
}
.sg-hero-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 480px;
}
.sg-hero-actions {
  display: flex;
  gap: 16px;
}
.sg-hero-highlights {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  border-top: 1px solid var(--color-border);
  margin-top: 48px;
}
.sg-highlight-item {
  display: flex;
  align-items: center;
  gap: 16px;
}
.sg-highlight-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-sg-peach);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary);
}
.sg-highlight-label {
  font-weight: 600;
  font-size: 14px;
  max-width: 120px;
}
@media (max-width: 1024px) {
  .sg-hero-content-wrapper { flex-direction: column; text-align: center; gap: 40px; }
  .sg-hero-text-content { flex: 0 0 100%; max-width: 100%; display: flex; flex-direction: column; align-items: center; }
  .sg-hero-image-wrapper { width: 100%; height: 400px; border-radius: 16px; }
  .sg-hero-highlights { flex-wrap: wrap; gap: 24px; justify-content: center; }
}
`,

  'SgAbout.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Heart, Map, TrendingUp, Play } from 'lucide-react';
import './SgAbout.css';

const ICONS = { BookOpen, Heart, Map, TrendingUp };

export function SgAbout({ sectionConfig, onAction }) {
  return (
    <section className="sg-about-section">
      <Container maxWidth="1280px">
        <div className="sg-about-wrapper">
          <div className="sg-about-image-side">
            <div className="sg-about-image-container">
              <img src={sectionConfig.image} alt="About Sri GITAM" className="sg-about-img" />
              {sectionConfig.hasVideo && (
                <button className="sg-play-button" aria-label="Play video">
                  <Play fill="currentColor" size={24} />
                </button>
              )}
            </div>
          </div>
          
          <div className="sg-about-content-side">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-about-title">
              {sectionConfig.title.split('\n').map((line, i) => <span key={i} style={{display:'block'}}>{line}</span>)}
            </h2>
            <p className="sg-about-body">{sectionConfig.content}</p>
            
            <div className="sg-about-features-grid">
              {sectionConfig.features.map((feature, i) => {
                const IconComponent = ICONS[feature.icon] || BookOpen;
                return (
                  <div key={i} className="sg-about-feature">
                    <div className="sg-feature-icon">
                      <IconComponent size={20} />
                    </div>
                    <span className="sg-feature-label">{feature.label}</span>
                  </div>
                );
              })}
            </div>
            
            <button className="sg-text-btn" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
`,
  'SgAbout.css': `
.sg-about-section { background-color: var(--color-background-soft); padding: 96px 0; }
.sg-about-wrapper { display: flex; gap: 64px; align-items: stretch; }
.sg-about-image-side { flex: 0 0 50%; max-width: 50%; }
.sg-about-image-container { position: relative; width: 100%; height: 100%; min-height: 400px; border-radius: 16px; overflow: hidden; }
.sg-about-img { width: 100%; height: 100%; object-fit: cover; position: absolute; top:0; left:0; }
.sg-play-button { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 72px; height: 72px; border-radius: 50%; background: white; border: none; color: var(--color-secondary); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s; }
.sg-play-button:hover { transform: translate(-50%, -50%) scale(1.05); }
.sg-about-content-side { flex: 1; padding: 24px 0; }
.sg-about-title { font-size: 42px; line-height: 1.15; margin-bottom: 24px; }
.sg-about-body { font-size: 16px; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 40px; }
.sg-about-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
.sg-about-feature { display: flex; align-items: center; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
.sg-feature-icon { width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-background-alt); display: flex; align-items: center; justify-content: center; color: var(--color-secondary); }
.sg-feature-label { font-size: 14px; font-weight: 600; line-height: 1.4; }
.sg-text-btn { background: none; border: none; color: var(--color-secondary); font-weight: 600; cursor: pointer; padding: 0; display: inline-flex; align-items: center; }
.sg-text-btn:hover { color: var(--color-primary); }
@media (max-width: 1024px) { .sg-about-wrapper { flex-direction: column; } .sg-about-image-side, .sg-about-content-side { flex: 0 0 100%; max-width: 100%; } .sg-about-features-grid { grid-template-columns: 1fr; } }
`,

  'SgProgrammes.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import { Atom, Dna, BarChart2, Users } from 'lucide-react';
import './SgProgrammes.css';

const ICONS = { Atom, Dna, BarChart2, Users };

export function SgProgrammes({ sectionConfig, onAction }) {
  return (
    <section className="sg-programmes-section">
      <Container maxWidth="1280px">
        <div className="sg-section-header-row">
          <div className="sg-header-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
          </div>
          <button className="sg-text-btn" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
            {sectionConfig.cta.label}
          </button>
        </div>

        <div className="sg-programmes-grid">
          {sectionConfig.programs.map(prog => {
            const IconComponent = ICONS[prog.icon] || Atom;
            return (
              <div key={prog.id} className="sg-programme-card" style={{backgroundColor: prog.bgColor}}>
                <div className="sg-prog-icon-wrapper">
                  <IconComponent size={28} color="var(--color-primary)" />
                </div>
                <h3 className="sg-prog-title">{prog.name}</h3>
                <p className="sg-prog-subjects">{prog.subjects}</p>
                <p className="sg-prog-desc">{prog.description}</p>
                <button className="sg-prog-cta" onClick={() => onAction('navigate_to', 'programmes')}>
                  Explore {prog.name} &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
`,
  'SgProgrammes.css': `
.sg-programmes-section { background-color: var(--color-background-soft); padding: 40px 0 96px 0; }
.sg-section-header-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
.sg-section-title { font-size: 42px; line-height: 1.1; margin:0; }
.sg-programmes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.sg-programme-card { padding: 32px; border-radius: 16px; display: flex; flex-direction: column; transition: transform 0.2s ease; border: 1px solid rgba(0,0,0,0.03); }
.sg-programme-card:hover { transform: translateY(-4px); }
.sg-prog-icon-wrapper { width: 56px; height: 56px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.sg-prog-title { font-size: 24px; font-family: var(--font-heading); margin-bottom: 8px; color: var(--color-primary); }
.sg-prog-subjects { font-size: 13px; font-weight: 600; color: var(--color-text-muted); margin-bottom: 20px; }
.sg-prog-desc { font-size: 15px; color: var(--color-text); line-height: 1.6; margin-bottom: 32px; flex-grow: 1; }
.sg-prog-cta { background: none; border: none; color: var(--color-secondary); font-weight: 600; padding:0; cursor: pointer; text-align: left; }
@media (max-width: 1024px) { .sg-programmes-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .sg-programmes-grid { grid-template-columns: 1fr; } .sg-section-header-row { flex-direction: column; align-items: flex-start; gap: 16px; } }
`,

  'SgWhyUs.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import { BookOpen, Target, Map, Compass, Briefcase, Users } from 'lucide-react';
import './SgWhyUs.css';

const ICONS = { BookOpen, Target, Map, Compass, Briefcase, Users };

export function SgWhyUs({ sectionConfig, onAction }) {
  return (
    <section className="sg-why-section">
      <Container maxWidth="1280px">
        <div className="sg-why-wrapper">
          <div className="sg-why-content-side">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
            <p className="sg-why-subtitle">{sectionConfig.subtitle}</p>
            <button className="btn-primary sg-mt-4" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
          <div className="sg-why-grid-side">
            <div className="sg-why-grid">
              {sectionConfig.pillars.map(pillar => {
                const IconComponent = ICONS[pillar.icon] || BookOpen;
                return (
                  <div key={pillar.id} className="sg-why-card">
                    <div className="sg-why-icon">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="sg-why-card-title">{pillar.title}</h4>
                      <p className="sg-why-card-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
`,
  'SgWhyUs.css': `
.sg-why-section { background-color: var(--color-background-soft); padding: 96px 0; border-top: 1px solid var(--color-border); }
.sg-why-wrapper { display: flex; gap: 64px; align-items: center; }
.sg-why-content-side { flex: 0 0 35%; max-width: 35%; }
.sg-why-subtitle { font-size: 16px; color: var(--color-text-muted); line-height: 1.6; margin: 24px 0 32px 0; }
.sg-mt-4 { margin-top: 16px; }
.sg-why-grid-side { flex: 1; }
.sg-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 48px; }
.sg-why-card { display: flex; gap: 20px; align-items: flex-start; }
.sg-why-icon { width: 56px; height: 56px; flex-shrink: 0; border-radius: 50%; background-color: var(--color-sg-peach); display: flex; align-items: center; justify-content: center; color: var(--color-secondary); }
.sg-why-card-title { font-size: 16px; font-weight: 600; margin: 0 0 8px 0; color: var(--color-text); }
.sg-why-card-desc { font-size: 14px; color: var(--color-text-muted); line-height: 1.5; margin: 0; }
@media (max-width: 1024px) { .sg-why-wrapper { flex-direction: column; } .sg-why-content-side { max-width: 100%; text-align: center; } .sg-why-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .sg-why-grid { grid-template-columns: 1fr; } }
`,

  'SgAchievements.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import { Trophy, Percent, Award, GraduationCap } from 'lucide-react';
import './SgAchievements.css';

const ICONS = { Trophy, Percent, Award, GraduationCap };

export function SgAchievements({ sectionConfig, onAction }) {
  return (
    <section className="sg-achievements-section">
      <Container maxWidth="1280px">
        <div className="sg-achievements-wrapper">
          <div className="sg-achievements-content">
            <span className="eyebrow">{sectionConfig.eyebrow}</span>
            <h2 className="sg-section-title">{sectionConfig.title}</h2>
            <p className="sg-why-subtitle">{sectionConfig.subtitle}</p>
          </div>
          <div className="sg-achievements-stats">
            {sectionConfig.stats.map((stat, i) => {
              const IconComponent = ICONS[stat.icon] || Trophy;
              return (
                <div key={i} className="sg-stat-card">
                  <IconComponent size={32} color="var(--color-secondary)" className="sg-stat-icon" />
                  <span className="sg-stat-label">{stat.label}</span>
                  <span className="sg-stat-value">{stat.value}</span>
                </div>
              );
            })}
            <button className="sg-text-btn sg-stat-cta" onClick={() => onAction('navigate_to', sectionConfig.cta.target)}>
              {sectionConfig.cta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
`,
  'SgAchievements.css': `
.sg-achievements-section { background-color: var(--color-background); padding: 96px 0; border-top: 1px solid var(--color-border); }
.sg-achievements-wrapper { display: flex; align-items: center; gap: 64px; }
.sg-achievements-content { flex: 0 0 30%; max-width: 30%; }
.sg-achievements-stats { flex: 1; display: flex; align-items: center; gap: 24px; }
.sg-stat-card { flex: 1; background: white; padding: 32px 24px; border-radius: 16px; border: 1px solid var(--color-border); display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
.sg-stat-icon { margin-bottom: 16px; }
.sg-stat-label { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 16px; }
.sg-stat-value { font-size: 24px; font-weight: 700; color: var(--color-text-muted); }
.sg-stat-cta { padding-left: 24px; flex-shrink: 0; }
@media (max-width: 1024px) { .sg-achievements-wrapper { flex-direction: column; } .sg-achievements-content { max-width: 100%; text-align: center; } .sg-achievements-stats { flex-wrap: wrap; justify-content: center; } }
`,

  'SgAdmissionsCTA.jsx': `
import React from 'react';
import { Container } from '../../../components/common/Container';
import './SgAdmissionsCTA.css';

export function SgAdmissionsCTA({ sectionConfig, onAction }) {
  return (
    <section className="sg-cta-section" style={{backgroundImage: \`linear-gradient(rgba(16, 34, 56, 0.9), rgba(16, 34, 56, 0.9)), url(\${sectionConfig.image})\`}}>
      <Container maxWidth="1280px">
        <div className="sg-cta-content">
          <span className="eyebrow sg-cta-eyebrow">{sectionConfig.eyebrow}</span>
          <h2 className="sg-cta-title">
            {sectionConfig.title.split('\n').map((line, i) => <span key={i} style={{display:'block'}}>{line}</span>)}
          </h2>
          <p className="sg-cta-subtitle">{sectionConfig.subtitle}</p>
          <div className="sg-cta-actions">
            <button className="btn-primary" onClick={() => onAction('open_admissions_modal')}>
              {sectionConfig.primaryCta.label}
            </button>
            <button className="btn-secondary sg-cta-outline-btn" onClick={() => onAction('navigate_to', sectionConfig.secondaryCta.target)}>
              {sectionConfig.secondaryCta.label}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
`,
  'SgAdmissionsCTA.css': `
.sg-cta-section { background-color: var(--color-primary); background-size: cover; background-position: center; padding: 120px 0; color: white; text-align: center; }
.sg-cta-content { max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
.sg-cta-eyebrow { color: var(--color-sg-peach); }
.sg-cta-title { font-size: 48px; color: white; margin-bottom: 24px; }
.sg-cta-subtitle { font-size: 18px; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 40px; }
.sg-cta-actions { display: flex; gap: 16px; justify-content: center; }
.sg-cta-outline-btn { border-color: rgba(255,255,255,0.3); color: white; }
.sg-cta-outline-btn:hover { background-color: rgba(255,255,255,0.1); border-color: white; }
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(componentsDir, filename), content.trim() + '\n');
}
