import React from 'react';
import { Container } from '../../tier1/components/Container';
import { MapPin, Phone } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import './FooterSection.css';

export function FooterSection({ data, theme, onAction }) {
  const { navigateToPage } = useCollege();

  const links = [
    { id: 'home', label: 'Home', target: '' },
    { id: 'academics', label: 'Academics', target: 'academics' },
    { id: 'about', label: 'About Teja', target: 'about' },
    { id: 'campuses', label: 'Campuses', target: 'campuses' },
    { id: 'why', label: 'Why Teja', target: 'why-teja' },
    { id: 'facilities', label: 'Facilities', target: 'facilities' },
    { id: 'student-life', label: 'Student Life', target: 'student-life' },
    { id: 'admissions', label: 'Admissions', target: 'admissions' },
    { id: 'gallery', label: 'Gallery', target: 'gallery' },
    { id: 'contact', label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    navigateToPage(target);
  };

  return (
    <footer id="footer-section" className="app-footer">
      <Container maxWidth="1280px">
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <img src="/teja-logo.png" alt="Teja Logo" className="footer-brand-logo" />
            <h3 className="footer-brand-title">Teja Junior College</h3>
            <p className="footer-position-text">Empowering Students. Shaping Futures.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <div className="quick-links-grid">
              {links.map((link) => (
                <button
                  key={link.id}
                  className="footer-link-btn"
                  onClick={(e) => handleLinkClick(e, link.target)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Academics */}
          <div className="footer-col prog-col">
            <h4 className="footer-col-title">ACADEMICS</h4>
            <ul className="footer-nav-list">
              <li>
                <button className="footer-link-btn" onClick={(e) => handleLinkClick(e, 'academics')}>Programs</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={(e) => handleLinkClick(e, 'academics')}>Learning Approach</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={(e) => handleLinkClick(e, 'academics')}>Student Support</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <div className="footer-contact-block">
              <div className="contact-line">
                <MapPin size={16} className="c-icon" />
                <span className="contact-address-text">
                  Raghuveera Towers, 4th Floor,<br />
                  Subhash Road, Kamalanagar,<br />
                  Anantapur - 515001
                </span>
              </div>
              <div className="contact-line" style={{ marginTop: '4px' }}>
                <Phone size={16} className="c-icon" />
                <a href="tel:08197179023" className="footer-phone-link">
                  08197179023
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © 2026 Teja Junior College. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
