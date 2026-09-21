import React from 'react';
import { Container } from '../../tier1/components/Container';
import { Logo } from '../../tier1/components/Logo';
import { MapPin, Phone, Building2 } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import './FooterSection.css';

export function FooterSection({ data, theme, onAction }) {
  const { navigateToPage, activeCollegeId, setActiveCollegeId, availableColleges } = useCollege();

  const college = data?.college || {};
  const nav = data?.navigation || {};
  const links = (nav.links || []).filter((l) => l.enabled !== false);
  const campuses = college.campuses || [];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.type === 'page' || link.target) {
      navigateToPage(link.target);
    } else if (link.type === 'scroll' || link.target?.startsWith('#')) {
      onAction('scroll_to', link.target);
    }
  };

  return (
    <footer id="footer-section" className="app-footer">
      <Container maxWidth="1240px">
        <div className="footer-compact-grid">
          {/* Col 1: College Identity */}
          <div className="footer-col brand-col">
            <Logo
              name={nav.brand?.name || (college.shortName || college.name || 'TEJA').toUpperCase()}
              subtext={nav.brand?.subtext || college.tagline || 'JUNIOR COLLEGE • ANANTAPUR'}
              logoUrl={college.logo || '/teja-logo.png'}
              motif={theme?.motif || 'shield'}
              size="sm"
            />
            <h3 className="footer-brand-title">
              {college.name || 'Teja Junior College'}
            </h3>
            <p className="footer-position-text">
              {college.tagline || 'Empowering Students. Shaping Futures.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-nav-list">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    className="footer-link-btn"
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics */}
          <div className="footer-col prog-col">
            <h4 className="footer-col-title">ACADEMICS</h4>
            <ul className="footer-nav-list">
              <li>
                <button className="footer-link-btn" onClick={() => navigateToPage('academics')}>
                  Programs
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => navigateToPage('academics')}>
                  Learning Approach
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => navigateToPage('academics')}>
                  Student Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campuses */}
          <div className="footer-col campuses-col">
            <h4 className="footer-col-title">CAMPUSES</h4>
            <ul className="footer-nav-list">
              {campuses.map((camp) => (
                <li key={camp.id}>
                  <button
                    className="footer-link-btn campus-link-btn"
                    onClick={() => navigateToPage('campuses')}
                  >
                    <Building2 size={13} className="footer-link-icon" />
                    {camp.displayName || camp.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <div className="footer-contact-block">
              <div className="contact-line">
                <MapPin size={14} className="c-icon" />
                <span className="contact-address-text">{college.location?.address || 'Anantapur, Andhra Pradesh'}</span>
              </div>
              {college.contact?.phone && (
                <div className="contact-line">
                  <Phone size={14} className="c-icon" />
                  <a href={`tel:${college.contact.phone}`} className="footer-phone-link">
                    {college.contact.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Desktop Active College Switcher */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} {college.name || 'Teja Junior College'}. All rights reserved.
          </span>

          {availableColleges && availableColleges.length > 0 && (
            <div className="footer-college-switcher-inline" aria-label="Active College Selection">
              <span className="switcher-inline-label">ACTIVE COLLEGE:</span>
              <div className="switcher-pills-group">
                {availableColleges.map((col) => {
                  const isActive = activeCollegeId === col.id;
                  return (
                    <button
                      key={col.id}
                      onClick={() => setActiveCollegeId(col.id)}
                      className={`switcher-pill-btn ${isActive ? 'pill-active' : ''}`}
                    >
                      {col.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}

