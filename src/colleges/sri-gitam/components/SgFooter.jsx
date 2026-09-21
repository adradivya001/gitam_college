import React from 'react';
import { Container } from '../../../components/common/Container';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import './SgFooter.css';

export function SgFooter({ data, onAction }) {
  const footerData = data?.footer || {};
  const contact = footerData.contact || {};
  
  return (
    <footer className="sg-footer">
      <Container maxWidth="1280px">
        <div className="sg-footer-grid">
          
          <div className="sg-footer-col sg-brand-col">
            <img src={data?.college?.logo} alt={data?.college?.name} className="sg-footer-logo" />
            <p className="sg-footer-desc">{footerData.brand?.description}</p>
          </div>

          <div className="sg-footer-col">
            <h4 className="sg-footer-title">{footerData.columns?.[0]?.title || "Quick Links"}</h4>
            <ul className="sg-footer-links sg-footer-links--2col">
              {footerData.columns?.[0]?.links.map((link, i) => (
                <li key={i}>
                  <button className="sg-footer-link-btn" onClick={() => onAction('navigate_to', link.target)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sg-footer-col">
            <h4 className="sg-footer-title">{footerData.columns?.[1]?.title || "Programmes"}</h4>
            <ul className="sg-footer-links">
              {footerData.columns?.[1]?.links.map((link, i) => (
                <li key={i}>
                  <button className="sg-footer-link-btn" onClick={() => onAction('navigate_to', link.target)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sg-footer-col">
            <h4 className="sg-footer-title">Contact</h4>
            <div className="sg-footer-contact">
              <div className="sg-contact-item">
                <MapPin size={16} />
                <span>{contact.address}</span>
              </div>
              <div className="sg-contact-item">
                <Phone size={16} />
                <span>{contact.phone}</span>
              </div>
              <div className="sg-contact-item">
                <Mail size={16} />
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="sg-footer-bottom">
          <div className="sg-footer-copyright">
            {footerData.bottom?.copyright || `© ${new Date().getFullYear()} ${data?.college?.name}. All Rights Reserved.`}
          </div>
          <div className="sg-footer-bottom-links">
            <span style={{ marginRight: '16px' }}>Designed for a Better Tomorrow.</span>
            <span className="sg-footer-separator">|</span>
            <div className="sg-footer-socials">
              <a href="#instagram" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#youtube" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
