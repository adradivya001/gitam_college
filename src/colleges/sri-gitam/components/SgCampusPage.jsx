import React, { useState } from 'react';
import { MapPin, ExternalLink, BookOpen, FlaskConical, BookMarked, Layers, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';
import './SgCampusFacilities.css';

export function SgCampusPage({ onAction, data }) {
  const pageData = data?.pages?.facilities?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const facilitiesData = pageData.find(s => s.type === 'philosophy' || s.type === 'why-us') || {};
  const galleryImages = data?.gallery?.images?.map(i => i.src) || [];
  const ICONS = { BookOpen, FlaskConical, BookMarked, Layers, Users };
  const contact = data?.college?.contact || {};
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.title || "CAMPUS"}
        breadcrumb={heroData.title || "Campus"}
        title={heroData.title || "A Space Designed for Learning"}
        subtitle={heroData.subtitle || `Explore the learning environment and facilities that support the Intermediate education journey at ${data?.college?.name}.`}
        image={galleryImages[1] || "/sri-gitam/campus_flag_assembly.png"}
      />

      {/* Campus Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src={galleryImages[1] || "/sri-gitam/campus_flag_assembly.png"} alt={`${data?.college?.name} Campus`} />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">OUR CAMPUS</span>
              <h2 className="sg-section-title">An Environment Built Around Learning</h2>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '24px' }}>
                {data?.college?.name} is located in {data?.college?.location || 'Andhra Pradesh'} — providing students with a learning environment designed to support academic focus, personal growth and daily comfort.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '32px' }}>
                The campus facilities are organized to support the academic and personal needs of Intermediate students throughout the academic year.
              </p>
              <button className="sg-btn-primary" onClick={() => onAction('navigate_to', 'admissions')}>
                Enquire About Admissions
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Facilities — Innovative Card Grid */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">CAMPUS FACILITIES</span>
            <h2 className="sg-section-title">Built for Learning</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Every space on campus is intentionally designed to support students in their academic journey.
            </p>
          </div>

          <div className="sgf-grid">
            {(facilitiesData.pillars || []).map((f, i) => {
              const IconComp = ICONS[f.icon] || BookOpen;
              const accentColors = ['var(--color-sg-peach, #F8E9E3)', 'var(--color-sg-sage, #EAF2EE)', 'var(--color-sg-sand, #F5EFE3)', 'var(--color-sg-lavender, #F0ECF6)'];
              return (
                <div key={i} className="sgf-card" style={{ '--card-accent': accentColors[i % accentColors.length] }}>
                  {/* Background image revealed on hover */}
                  <div className="sgf-card-bg">
                    <img src={galleryImages[i % (galleryImages.length || 1)]} alt={f.title} loading="lazy" />
                    <div className="sgf-card-overlay" />
                  </div>

                  {/* Default state content */}
                  <div className="sgf-card-default">
                    <div className="sgf-icon-wrap">
                      <IconComp size={26} />
                    </div>
                    <span className="sgf-tag">Facility</span>
                    <h3 className="sgf-title">{f.title}</h3>
                    <p className="sgf-desc">{f.desc}</p>
                    <div className="sgf-hover-hint">
                      <span>Explore</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  {/* Hover state — reveal detail */}
                  <div className="sgf-card-hover">
                    <div className="sgf-icon-wrap sgf-icon-wrap--light">
                      <IconComp size={26} />
                    </div>
                    <h3 className="sgf-title sgf-title--light">{f.title}</h3>
                    <p className="sgf-detail">{f.desc}</p>
                  </div>

                  {/* Number watermark */}
                  <div className="sgf-num">0{i + 1}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">GALLERY</span>
            <h2 className="sg-section-title">Campus Life & Facility Gallery</h2>
            <p className="sg-section-desc sg-section-desc-center">A comprehensive look at life, learning and activities at {data?.college?.name}.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {(data?.gallery?.images || []).map((item, i) => (
              <div 
                key={i} 
                className="sg-card"
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  padding: 0,
                  border: '1px solid var(--color-border, #EDE5D8)',
                  boxShadow: '0 4px 16px rgba(24, 30, 36, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', width: '100%', overflow: 'hidden', background: '#F8F4EC' }}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} 
                  />
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <span className="sg-eyebrow" style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '6px' }}>
                    {item.category || 'Campus'}
                  </span>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-text, #181E24)', margin: 0 }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 40%' }}>
              <span className="sg-eyebrow">LOCATION</span>
              <h2 className="sg-section-title">Find {data?.college?.shortName}</h2>
              <div className="sg-location-block" style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--color-secondary, #B6533E)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p className="sg-location-address">
                    {contact.address}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sg-btn-primary"
                  style={{ display: 'inline-flex', textDecoration: 'none' }}
                >
                  <ExternalLink size={16} /> Get Directions
                </a>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', border: '1px solid var(--color-border, #E8E1D9)' }}>
                <iframe
                  title={`${data?.college?.name} Location`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address || '')}&t=m&z=15&ie=UTF8&iwloc=B&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SgCTABanner
        title={`Come Visit ${data?.college?.name}`}
        desc={`Explore our campus and understand what ${data?.college?.shortName} has to offer.`}
        primaryLabel="Enquire About Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
