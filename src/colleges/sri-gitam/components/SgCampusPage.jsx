import React, { useState } from 'react';
import { MapPin, ExternalLink, BookOpen, FlaskConical, BookMarked, Layers, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';
import './SgCampusFacilities.css';

const FACILITIES = [
  {
    icon: BookOpen,
    h: 'Classrooms',
    p: 'Learning spaces designed to support focused classroom education and structured student interaction.',
    detail: 'Well-lit, ventilated classrooms built for attentive learning and teacher-student engagement.',
    image: '/sri-gitam/gallery/smart_classrooms_1789976999081.jpg',
    accent: '#F8E9E3',
    tag: 'Academic',
  },
  {
    icon: FlaskConical,
    h: 'Science Laboratories',
    p: 'Practical learning spaces that complement science-based academic programmes.',
    detail: 'Equipped lab environments for Physics, Chemistry and Biology practicals for MPC and BiPC students.',
    image: '/sri-gitam/gallery/campus_ramnagar_1789977013402.jpg',
    accent: '#EAF2EE',
    tag: 'Practical',
  },
  {
    icon: BookMarked,
    h: 'Library',
    p: 'A resource environment supporting reading, reference and academic learning.',
    detail: 'A quiet, well-resourced space for reading, research and self-directed study across all streams.',
    image: '/sri-gitam/gallery/campus_kamalanagar_1789976860423.jpg',
    accent: '#F5EFE3',
    tag: 'Resource',
  },
  {
    icon: Layers,
    h: 'Learning Spaces',
    p: 'Spaces that support individual study, academic activities and collaborative learning.',
    detail: 'Flexible environments designed for group discussion, presentations and independent study.',
    image: '/sri-gitam/gallery/sports_field_1789977041806.jpg',
    accent: '#F0ECF6',
    tag: 'Study',
  },
  {
    icon: Users,
    h: 'Student Facilities',
    p: 'Facilities intended to support students throughout their academic journey.',
    detail: 'Common areas and support facilities that make the campus a comfortable place for students.',
    image: '/sri-gitam/gallery/student_activities_1789977201922.jpg',
    accent: '#EAF2EE',
    tag: 'Support',
  },
];

const GALLERY_IMGS = [
  '/sri-gitam/gallery/campus_kamalanagar_1789976860423.jpg',
  '/sri-gitam/gallery/campus_ramnagar_1789977013402.jpg',
  '/sri-gitam/gallery/girls_campus_1789977026225.jpg',
  '/sri-gitam/gallery/smart_classrooms_1789976999081.jpg',
];

export function SgCampusPage({ onAction }) {
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="CAMPUS"
        breadcrumb="Campus"
        title="A Space Designed for Learning"
        subtitle="Explore the learning environment and facilities that support the Intermediate education journey at Sri GITAM Junior College."
      />

      {/* Campus Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src="/sri-gitam/gallery/campus_kamalanagar_1789976860423.jpg" alt="Sri GITAM Campus" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">OUR CAMPUS</span>
              <h2 className="sg-section-title">An Environment Built Around Learning</h2>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginBottom: '24px' }}>
                Sri GITAM Junior College is located in Anantapur, Andhra Pradesh — providing students with a learning environment designed to support academic focus, personal growth and daily comfort.
              </p>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginBottom: '32px' }}>
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
            {FACILITIES.map((f, i) => (
              <div key={i} className="sgf-card" style={{ '--card-accent': f.accent }}>
                {/* Background image revealed on hover */}
                <div className="sgf-card-bg">
                  <img src={f.image} alt={f.h} loading="lazy" />
                  <div className="sgf-card-overlay" />
                </div>

                {/* Default state content */}
                <div className="sgf-card-default">
                  <div className="sgf-icon-wrap">
                    <f.icon size={26} />
                  </div>
                  <span className="sgf-tag">{f.tag}</span>
                  <h3 className="sgf-title">{f.h}</h3>
                  <p className="sgf-desc">{f.p}</p>
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
                    <f.icon size={26} />
                  </div>
                  <h3 className="sgf-title sgf-title--light">{f.h}</h3>
                  <p className="sgf-detail">{f.detail}</p>
                </div>

                {/* Number watermark */}
                <div className="sgf-num">0{i + 1}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">GALLERY</span>
            <h2 className="sg-section-title">Campus Gallery</h2>
            <p className="sg-section-desc sg-section-desc-center">A visual look at the Sri GITAM learning environment.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {GALLERY_IMGS.map((src, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: i === 0 ? '16/9' : '4/3', gridColumn: i === 0 ? 'span 2' : 'auto' }}>
                <img src={src} alt={`Campus ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
              <h2 className="sg-section-title">Find Sri GITAM</h2>
              <div className="sg-location-block" style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="#B6533E" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p className="sg-location-address">
                    Intell College Building<br />
                    Old Kalyandurgam Road<br />
                    Akkampalli Cross<br />
                    Anantapur, Andhra Pradesh – 515004
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Intell+College+Building+Akkampalli+Cross+Anantapur"
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
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', border: '1px solid #E8E1D9' }}>
                <iframe
                  title="Sri GITAM Junior College Location"
                  src="https://maps.google.com/maps?q=Akkampalli+Cross+Anantapur+Andhra+Pradesh&t=m&z=15&ie=UTF8&iwloc=B&output=embed"
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
        title="Come Visit Sri GITAM Junior College"
        desc="Explore our campus and understand what Sri GITAM has to offer."
        primaryLabel="Enquire About Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
