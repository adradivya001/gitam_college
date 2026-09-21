import React from 'react';
import { Container } from './common/Container';
import { MapPin, Phone } from 'lucide-react';
import { useCollege } from '../context/CollegeContext';
import { SgFooter } from '../colleges/sri-gitam/components/SgFooter';
import './FooterSection.css';

export function FooterSection({ data, theme, onAction }) {
  const { navigateToPage } = useCollege();
  
  if (data?.id === 'sri-gitam') {
    return <SgFooter data={data} onAction={onAction} />;
  }

  const college = data?.college || {};
  const nav = data?.navigation || {};
  const links = (nav.links || []).filter((l) => l.enabled !== false);

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
            <img src={college.logo || "/teja-logo.png"} alt={`${college.name || 'Teja'} Logo`} className="footer-brand-logo" />
            <h3 className="footer-brand-title">{college.name || 'Teja Junior College'}</h3>
            <p className="footer-position-text">{college.tagline || 'Empowering Students. Shaping Futures.'}</p>
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
                  {college.location?.address || 'Raghuveera Towers, 4th Floor, Subhash Road, Kamalanagar, Anantapur - 515001'}
                </span>
              </div>
              {college.contact?.phone && (
                <div className="contact-line" style={{ marginTop: '4px' }}>
                  <Phone size={16} className="c-icon" />
                  <a href={`tel:${college.contact.phone}`} className="footer-phone-link">
                    {college.contact.phone}
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} {college.name || 'Teja Junior College'}. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
