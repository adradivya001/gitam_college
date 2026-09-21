import React from 'react';
import { Atom, Dna, BarChart2, Users, FileText, CheckCircle } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgEnquiryForm } from './SgEnquiryForm';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const DOCS = [
  'Previous Academic Records', 'Transfer Certificate', 'Identity Proof',
  'Passport-Size Photographs', 'Other Documents Required by the College',
];

const PROG_CARDS_ADM = [
  { name: 'MPC', subjects: 'Mathematics • Physics • Chemistry', bg: '#F8E9E3', icon: Atom },
  { name: 'BiPC', subjects: 'Biology • Physics • Chemistry', bg: '#EAF2EE', icon: Dna },
  { name: 'MEC', subjects: 'Mathematics • Economics • Commerce', bg: '#F5EFE3', icon: BarChart2 },
  { name: 'CEC', subjects: 'Civics • Economics • Commerce', bg: '#F0ECF6', icon: Users },
];

export function SgAdmissionsPage({ onAction }) {
  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow="ADMISSIONS"
        breadcrumb="Admissions"
        title="Start Your Journey With Sri GITAM"
        subtitle="Explore our Intermediate programmes and take the first step towards your higher-education goals."
      />

      {/* Process */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">ADMISSION PROCESS</span>
              <h2 className="sg-section-title">How to Apply</h2>
              <p className="sg-section-desc" style={{ marginBottom: '32px' }}>
                Follow these steps to begin your Intermediate education journey at Sri GITAM Junior College.
              </p>
              <button className="sg-btn-primary" onClick={() => onAction('open_admissions_modal')}>Apply Now</button>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-timeline">
                {[
                  { n: '01', h: 'Enquire', p: 'Contact our admissions team to understand the available programmes and admission requirements.' },
                  { n: '02', h: 'Choose Your Programme', p: 'Select MPC, BiPC, MEC or CEC based on your interests and future plans.' },
                  { n: '03', h: 'Counselling', p: 'Discuss your academic interests with the team and understand the available pathway.' },
                  { n: '04', h: 'Submit Documents', p: 'Provide the required documents for the admission process.' },
                  { n: '05', h: 'Complete Admission', p: 'Complete the necessary admission formalities and begin your Intermediate journey.' },
                ].map((s, i) => (
                  <div key={i} className="sg-timeline-item" style={{ alignItems: 'flex-start' }}>
                    <div className="sg-timeline-num" style={{ marginTop: '8px', boxShadow: '0 0 0 8px white' }}>{s.n}</div>
                    <div className="sg-timeline-body sg-card" style={{ flex: 1, padding: '28px', marginTop: '0', cursor: 'default' }}>
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

      {/* Eligibility & Documents */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-cards-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <span className="sg-eyebrow">ELIGIBILITY</span>
              <h2 className="sg-section-title">Admission Eligibility</h2>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7' }}>
                Admission is subject to the applicable Intermediate admission requirements and the eligibility criteria prescribed by the college and relevant educational authorities.
              </p>
              <p style={{ fontSize: '16px', color: '#657080', lineHeight: '1.7', marginTop: '16px' }}>
                For specific eligibility details, please contact the Sri GITAM admissions office directly.
              </p>
            </div>
            <div>
              <span className="sg-eyebrow">DOCUMENTS</span>
              <h2 className="sg-section-title">Documents You May Need</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {DOCS.map((doc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#657080' }}>
                    <CheckCircle size={18} color="#B6533E" style={{ flexShrink: 0 }} />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Programmes */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">PROGRAMMES</span>
            <h2 className="sg-section-title">Choose Your Programme</h2>
          </div>
          <div className="sg-cards-grid">
            {PROG_CARDS_ADM.map((p, i) => (
              <div key={i} style={{ background: p.bg, padding: '32px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <p.icon size={24} color="#172A43" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: '#172A43' }}>{p.name}</h3>
                <p style={{ fontSize: '13px', color: '#657080', marginBottom: '24px' }}>{p.subjects}</p>
                <button className="sg-text-link" onClick={() => onAction('navigate_to', 'programmes')}>Explore Programme →</button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enquiry Form */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">GET IN TOUCH</span>
              <h2 className="sg-section-title">Admission Enquiry</h2>
              <p className="sg-section-desc">
                Fill in the form and our admissions team will get back to you with the information you need.
              </p>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '20px', padding: '48px', border: '1px solid #E8E1D9' }}>
              <SgEnquiryForm onAction={onAction} />
            </div>
          </div>
        </Container>
      </section>

      {/* Fees */}
      <section className="sg-section-sm sg-section-white">
        <Container maxWidth="1280px">
          <div style={{ background: '#FAF7F2', borderRadius: '20px', padding: '48px', display: 'flex', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: '0 0 48px', height: '48px', background: '#F8E9E3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FileText size={24} color="#B6533E" />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#172A43', marginBottom: '8px' }}>Fee Information</h3>
              <p style={{ fontSize: '15px', color: '#657080', margin: 0 }}>Contact the admissions office for the latest fee structure, payment schedule and admission-related information.</p>
            </div>
            <button className="sg-btn-outline-navy" onClick={() => onAction('navigate_to', 'contact')} style={{ flexShrink: 0 }}>Contact Us</button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <SgCTABanner
        title="Ready to Take the Next Step?"
        desc="Connect with the Sri GITAM admissions team today."
        primaryLabel="Talk to Admissions"
        primaryTarget="contact"
        secondaryLabel="Explore Programmes"
        secondaryTarget="programmes"
        onAction={onAction}
      />
    </div>
  );
}
