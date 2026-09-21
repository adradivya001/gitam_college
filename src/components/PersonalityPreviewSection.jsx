import React, { useState } from 'react';
import { Container } from './common/Container';
import { Sparkles, Compass, ShieldCheck, Trophy, Users, Sun } from 'lucide-react';
import './PersonalityPreviewSection.css';

export function PersonalityPreviewSection({ data, sectionConfig, onAction }) {
  const statement = sectionConfig?.statement || 'BUILD MORE THAN MARKS.';
  const substatement = sectionConfig?.substatement || 'Empowering young minds with communication, poise, and ethical leadership.';
  const centerImage = sectionConfig?.centerImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
  const cta = sectionConfig?.cta || { label: 'Discover the Chakra Experience →', action: 'scroll_to', target: '#chakra-experience' };

  const radialPillars = sectionConfig?.radialPillars || [
    { id: 'confidence', label: 'CONFIDENCE', desc: 'Poise and self-assurance in every setting' },
    { id: 'communication', label: 'COMMUNICATION', desc: 'Clear verbal articulation & elocution' },
    { id: 'leadership', label: 'LEADERSHIP', desc: 'Moral judgment and collaborative initiative' },
    { id: 'teamwork', label: 'TEAMWORK', desc: 'Cooperative problem solving & peer synergy' },
    { id: 'discipline', label: 'DISCIPLINE', desc: 'Punctual routines and habit consistency' }
  ];

  const [activeNodeId, setActiveNodeId] = useState(radialPillars[0]?.id || 'confidence');
  const activeNode = radialPillars.find(p => p.id === activeNodeId) || radialPillars[0];

  return (
    <section id="personality" className="personality-preview-section visual-section">
      <Container>
        {/* Header Statement */}
        <div className="personality-preview-header">
          <div>
            <span className="micro-label">CHARACTER & POISE</span>
            <h2 className="personality-statement-heading">{statement}</h2>
            <p className="personality-statement-sub">{substatement}</p>
          </div>

          <button
            className="explore-section-cta"
            onClick={() => onAction(cta.action, cta.target)}
          >
            {cta.label}
          </button>
        </div>

        {/* Visual Radial Student Development Moment */}
        <div className="radial-development-stage">
          {/* Central Chakra Orbital Background Rings */}
          <div className="radial-orbit-rings">
            <div className="orbit-ring-outer" />
            <div className="orbit-ring-mid" />
          </div>

          {/* Central Dominant Student Visual */}
          <div className="center-student-orb">
            <div className="center-student-img-frame">
              <img
                src={centerImage}
                alt="Student developing poise and leadership"
                className="center-student-img"
                loading="lazy"
              />
              <div className="center-orb-overlay" />
            </div>

            {/* Active Pill Tooltip Floating Over Center Visual */}
            <div className="center-active-pillar-card">
              <span className="center-pill-tag">{activeNode.label}</span>
              <p className="center-pill-desc">{activeNode.desc}</p>
            </div>
          </div>

          {/* Orbital Radial Nodes Positioned Around Center */}
          <div className="orbital-nodes-wrap">
            {radialPillars.map((node, idx) => {
              const isActive = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  className={`radial-node-btn node-position-${idx + 1} ${isActive ? 'node-active' : ''}`}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                >
                  <span className="node-radial-pulse" />
                  <span className="node-radial-label">{node.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
