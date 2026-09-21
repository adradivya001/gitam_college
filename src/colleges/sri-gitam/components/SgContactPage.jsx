import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, ExternalLink, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgEnquiryForm } from './SgEnquiryForm';
import './SgShared.css';



function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sg-faq-item">
      <button className="sg-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="sg-faq-icon">{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
      </button>
      {open && <div className="sg-faq-answer">{a}</div>}
    </div>
  );
}

export function SgContactPage({ onAction, data }) {
  const contact = data?.college?.contact || {};
  const cName = data?.college?.name || 'Our College';
  const cShortName = data?.college?.shortName || 'Our College';
  const pageData = data?.pages?.contact?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  
  const defaultFaqs = [
    { q: `What programmes are available at ${cName}?`, a: `${cName} offers multiple Intermediate programmes, depending on the campus. Please check the Programmes page for detailed information.` },
    { q: 'How can I enquire about admission?', a: 'You can contact the admissions office directly by phone, WhatsApp or email. You can also fill in the enquiry form on this page and our team will get back to you.' },
    { q: 'What documents are required for admission?', a: 'You may need previous academic records, a transfer certificate, identity proof, passport-size photographs and any other documents required by the college. Contact the admissions office for the most current requirements.' },
    { q: 'How can I contact the admissions team?', a: `You can reach the ${cShortName} admissions team using the contact details on this page. Our team is available to answer questions about programmes, eligibility, documents and the admission process.` },
    { q: `Where is ${cName} located?`, a: `${cName} is located at ${contact.address}.` }
  ];
  
  const faqsToRender = data?.faq || defaultFaqs;

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.title || "CONTACT"}
        breadcrumb={heroData.title || "Contact"}
        title={heroData.title || "Get In Touch"}
        subtitle={heroData.subtitle || `Have questions about programmes, admissions or ${cName}? Our team is here to help.`}
      />

      {/* Contact Cards */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-contact-cards">
            <div className="sg-contact-card">
              <div className="sg-contact-card-icon"><Users size={22} /></div>
              <h4>Admissions</h4>
              <p>Speak with the admissions team about programmes, eligibility and admission requirements.</p>
            </div>
            <div className="sg-contact-card">
              <div className="sg-contact-card-icon"><Phone size={22} /></div>
              <h4>Phone</h4>
              <p>{contact.phone || '+91 00000 00000'}</p>
            </div>
            <div className="sg-contact-card">
              <div className="sg-contact-card-icon"><MessageSquare size={22} /></div>
              <h4>WhatsApp</h4>
              <p>{contact.phone || '+91 00000 00000'}</p>
            </div>
            <div className="sg-contact-card">
              <div className="sg-contact-card-icon"><Mail size={22} /></div>
              <h4>Email</h4>
              <p>{contact.email || 'admissions@college.edu.in'}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Address & Map */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 40%' }}>
              <span className="sg-eyebrow">VISIT US</span>
              <h2 className="sg-section-title">Visit {cName}</h2>
              <div style={{ marginTop: '32px', background: 'white', border: '1px solid var(--color-border, #E8E1D9)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--color-secondary, #B6533E)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.8', margin: 0 }}>
                    {contact.address}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sg-btn-primary"
                  style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center', gap: '8px' }}
                >
                  <ExternalLink size={16} /> Get Directions
                </a>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', border: '1px solid var(--color-border, #E8E1D9)' }}>
                <iframe
                  title={`${cName} — Contact Map`}
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

      {/* Enquiry Form */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">ENQUIRY</span>
              <h2 className="sg-section-title">Send Us an Enquiry</h2>
              <p className="sg-section-desc">
                Fill in the form and our team will get back to you with the information you need.
              </p>
            </div>
            <div style={{ flex: 1, background: 'var(--color-bg, #FAF7F2)', borderRadius: '20px', padding: '48px', border: '1px solid var(--color-border, #E8E1D9)' }}>
              <SgEnquiryForm onAction={onAction} collegeName={cShortName} />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">FAQ</span>
              <h2 className="sg-section-title">Frequently Asked Questions</h2>
              <p className="sg-section-desc">Quick answers to common questions about {cName}.</p>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-faq-list">
                {faqsToRender.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
