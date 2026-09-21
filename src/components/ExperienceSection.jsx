import React, { useState } from 'react';
import { Container } from './common/Container';
import { Sparkles, BookOpen, ShieldCheck, Trophy, Compass, Sun, ArrowUpRight } from 'lucide-react';
import './ExperienceSection.css';

const STAGE_ICONS = {
  LEARN: BookOpen,
  DISCIPLINE: ShieldCheck,
  PLAY: Trophy,
  GROW: Sparkles,
  LEAD: Compass
};

export function ExperienceSection({ data, sectionConfig, theme, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'SIGNATURE PHILOSOPHY';
  const title = sectionConfig?.title || 'THE CHAKRA PROGRESSION';
  const subtitle = sectionConfig?.subtitle || 'An orbital continuum shaping mind, body, and character.';

  const stages = sectionConfig?.stages || [
    {
      id: 'learn',
      stage: 'LEARN',
      title: 'Conceptual Mastery',
      desc: 'Rigorous academic foundation and analytical inquiry.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'discipline',
      stage: 'DISCIPLINE',
      title: 'Habit & Consistency',
      desc: 'Structured timetables, focus, and self-governance.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'play',
      stage: 'PLAY',
      title: 'Physical Vitality',
      desc: 'Daily athletic discipline, agility, and team resilience.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grow',
      stage: 'GROW',
      title: 'Inner Assurance',
      desc: 'Overcoming hesitation through speech and creative expression.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lead',
      stage: 'LEAD',
      title: 'Character & Ethics',
      desc: 'Moral purpose, empathy, and visionary higher aspiration.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = stages[activeIdx] || stages[0];
  const IconComponent = STAGE_ICONS[activeStage.stage] || Sparkles;

  return (
    <section id="chakra-experience" className="chakra-signature-section visual-section">
      <Container>
        {/* Header Section */}
        <div className="signature-header">
          <span className="micro-label">{eyebrow}</span>
          <h2 className="signature-title">{title}</h2>
          <p className="signature-subtitle">{subtitle}</p>
        </div>

        {/* 5-Stage Interactive Orbital Progression System */}
        <div className="signature-progression-container">
          {/* Orbital Stages Navigation Rail */}
          <div className="progression-orbital-rail">
            {stages.map((st, idx) => {
              const isActive = idx === activeIdx;
              const StageIcon = STAGE_ICONS[st.stage] || Sparkles;

              return (
                <button
                  key={st.id}
                  className={`progression-step-btn ${isActive ? 'step-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="step-btn-badge">
                    <StageIcon size={18} />
                  </div>
                  <span className="step-btn-name">{st.stage}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Dynamic Spotlight Showcase */}
          <div className="progression-showcase-card">
            {/* Visual Frame */}
            <div className="progression-visual-frame">
              <img
                key={activeStage.id}
                src={activeStage.image}
                alt={activeStage.title}
                className="progression-img"
                loading="lazy"
              />
              <div className="progression-img-overlay" />

              {/* Central Chakra Rotation Motif */}
              <div className="progression-chakra-motif">
                <svg viewBox="0 0 120 120" className="chakra-wheel-svg">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
                </svg>
              </div>
            </div>

            {/* Compact Narrative Details */}
            <div className="progression-info-panel">
              <span className="progression-stage-num">STAGE 0{activeIdx + 1} / 0{stages.length}</span>
              <div className="progression-icon-pill">
                <IconComponent size={22} />
                <span className="progression-stage-tag">{activeStage.stage}</span>
              </div>
              <h3 className="progression-stage-title">{activeStage.title}</h3>
              <p className="progression-stage-desc">{activeStage.desc}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
