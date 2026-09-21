import React from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { MapPin, Phone, MessageSquare, ArrowUpRight, Clock, Navigation } from 'lucide-react';
import './ContactSection.css';

export function ContactSection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'GET IN TOUCH';
  const title = sectionConfig?.title || "LET'S TALK ABOUT YOUR NEXT STEP.";
  const address = sectionConfig?.address || data?.college?.location?.address || 'Ramnagar 80 Feet Road, Near/Opposite Ayyappaswamy Temple, Anantapur, Andhra Pradesh';
  const phone = data?.college?.contact?.phone || '8096651111';
  const phone2 = data?.college?.contact?.phone2 || '8096671111';
  const whatsapp = data?.college?.contact?.whatsapp || '8096651111';
  const mapUrl = data?.college?.location?.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="visual-section contact-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
        />

        <div className="contact-grid-container">
          {/* Contact Details Card */}
          <Card variant="glass" className="contact-info-card">
            <h3 className="contact-institution-name">{data?.college?.name || 'Cognizant Junior College'}</h3>
            <span className="contact-tagline">{data?.college?.tagline || 'Institute for NEET & JEE'}</span>

            <div className="contact-detail-row">
              <div className="contact-icon-box"><MapPin size={20} /></div>
              <div>
                <span className="detail-label">Campus Address</span>
                <p className="detail-value">{address}</p>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-box"><Phone size={20} /></div>
              <div>
                <span className="detail-label">Admissions Helpdesk</span>
                <div className="phone-links">
                  <a href={`tel:${phone}`} className="phone-link">{phone}</a>
                  <span className="phone-sep">•</span>
                  <a href={`tel:${phone2}`} className="phone-link">{phone2}</a>
                </div>
              </div>
            </div>

            <div className="contact-action-row">
              <a href={`tel:${phone}`} className="contact-action-btn call">
                <Phone size={16} />
                <span>Call Admissions</span>
              </a>

              <a
                href={`https://wa.me/91${whatsapp}?text=Hello%20Cognizant%20Admissions`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn wa"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn map"
              >
                <Navigation size={16} />
                <span>Google Maps</span>
              </a>
            </div>

            <div className="contact-enquire-box">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
                onClick={() => onAction('open_admissions_modal')}
                style={{ width: '100%' }}
              >
                Submit Admissions Enquiry
              </Button>
            </div>
          </Card>

          {/* Interactive Google Map Embed Frame */}
          <div className="contact-map-frame">
            <iframe
              title="Cognizant Junior College Location"
              src={`https://maps.google.com/maps?q=Ramnagar+80+Feet+Road+Ayyappaswamy+Temple+Anantapur+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
