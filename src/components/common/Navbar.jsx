import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Logo } from './Logo';
import { Marquee } from './Marquee';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import './Navbar.css';

export function Navbar() {
  const {
    collegeData,
    activePage,
    navigateToPage,
    openAdmissionsModal,
    openDetailModal
  } = useCollege();

  // Scroll dynamics: shrink on scroll down, expand on scroll up, expanded at top
  const [navState, setNavState] = useState('expanded');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setNavState('expanded');
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setNavState('compact');
      } else if (currentScrollY < lastScrollY.current) {
        setNavState('expanded');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = collegeData?.navigation || {};
  const links = (nav.links || []).filter((l) => l.enabled !== false);
  const collegeName = collegeData?.college?.name || 'COLLEGE';
  const brand = nav.brand || {
    name: (collegeData?.college?.shortName || collegeName).toUpperCase(),
    subtext: collegeData?.college?.tagline || ''
  };
  const motif = collegeData?.theme?.motif || 'shield';
  const phone = collegeData?.college?.contact?.phone || nav?.cta?.phone || '';
  const whatsapp = collegeData?.college?.contact?.whatsapp || phone;

  const handleNavAction = (link) => {
    setIsMobileMenuOpen(false);

    if (link.target && !link.target.startsWith('#')) {
      navigateToPage(link.target);
      return;
    }

    if (link.type === 'scroll' || link.target?.startsWith('#')) {
      if (activePage !== 'home') {
        navigateToPage('home', link.target);
      } else {
        const el = document.querySelector(link.target || '#hero');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigateToPage(link.target || 'home');
    }
  };

  return (
    <>
      {/* Top Scrolling Marquee Banner Line */}
      <div className="top-scrolling-marquee-bar">
        <Marquee speed={22} pauseOnHover={true}>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
          <span className="marquee-announcement-item">Admissions Open For 2026–27.</span>
        </Marquee>
      </div>

      {/* Main Sticky Dynamic Clean White Navbar */}
      <header className={`app-navbar navbar-${navState}`}>
        <Container maxWidth="1360px">
          <div className="navbar-inner">
            {/* Left: Dynamic Logo */}
            <a
              href="#home"
              className="navbar-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('home');
              }}
            >
              <Logo
                name={brand.name}
                subtext={brand.subtext}
                logoUrl={collegeData?.college?.logo}
                motif={motif}
                size={navState === 'compact' ? 'sm' : 'md'}
                lightBackground={true}
                hideText={brand.hideText}
                fullLogo={brand.fullLogo}
              />
            </a>

            {/* Center: Navigation Links */}
            <nav className="desktop-nav-links" aria-label="Main Navigation">
              {links.map((link) => {
                const isActive = activePage === link.target || activePage === link.id || (activePage === 'home' && (link.target === 'home' || link.id === 'home'));

                return (
                  <button
                    key={link.id}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavAction(link)}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Apply for Admission CTA */}
            <div className="navbar-right-actions">
              <button
                className="apply-admission-btn"
                onClick={() => openAdmissionsModal()}
              >
                Apply for Admission
              </button>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={24} color="#0B3B82" /> : <Menu size={24} color="#0B3B82" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

    {/* Mobile Navigation Drawer */}
    <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
      <div className="mobile-nav-content">
        <div className="mobile-nav-header">
          <Logo name={brand.name} subtext={brand.subtext} logoUrl={collegeData?.college?.logo} motif={motif} size="sm" />
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-links-list">
            {links.map((link) => (
              <button
                key={link.id}
                className="mobile-link-item"
                onClick={() => handleNavAction(link)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="link-arrow" />
              </button>
            ))}
          </div>

          <div className="mobile-drawer-contact-strip">
            {phone && (
              <a href={`tel:${phone}`} className="mobile-contact-pill">
                <Phone size={16} />
                <span>Call {phone}</span>
              </a>
            )}
            {whatsapp && (
              <a
                href={`https://wa.me/91${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-pill wa"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            )}
          </div>

          <div className="mobile-drawer-footer">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAdmissionsModal();
              }}
              style={{ width: '100%' }}
            >
              Admissions Enquiry
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
