import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useCollege } from '../../../context/CollegeContext';
import './SgNavbar.css';

/* ——————————————————————————————————
   Sri GITAM Dedicated Navbar
   Tier 1 — Reusable Nav Component
   Consumes: navigationLinks from collegeData (Tier 3)
   ——————————————————————————————————*/

export function SgNavbar() {
  const { collegeData, activePage, navigateToPage, openAdmissionsModal } = useCollege();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Scroll detection for backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const nav = collegeData?.navigation || {};
  const links = (nav.links || []).filter(l => l.enabled !== false);
  const logo = collegeData?.college?.logo;
  const collegeName = collegeData?.college?.name || 'Sri GITAM';

  const handleNav = (link) => {
    setMobileOpen(false);
    navigateToPage(link.target || 'home');
  };

  const isActive = (link) => {
    const target = link.target || link.id || '';
    if (activePage === 'home' && (target === 'home' || target === '')) return true;
    return activePage === target;
  };

  return (
    <div ref={navRef}>
      {/* Top Info Bar */}
      <div className="sg-navbar-topbar">
        <div className="sg-navbar-topbar-inner">
          <span className="sg-topbar-address">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6, flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {collegeData?.college?.contact?.address || 'Anantapur, Andhra Pradesh'}
          </span>
          <div className="sg-topbar-links">
            <span>Call Us</span>
            <span>WhatsApp</span>
            <span>Enquiry</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sg-navbar ${scrolled ? 'sg-navbar-scrolled' : ''}`}>
        <div className="sg-navbar-inner">
          {/* Logo */}
          <button
            className="sg-navbar-logo-btn"
            onClick={() => navigateToPage('home')}
            aria-label={`${collegeName} - Home`}
          >
            {logo ? (
              <img src={logo} alt={collegeName} className="sg-navbar-logo-img" />
            ) : (
              <span className="sg-navbar-logo-text">{collegeName}</span>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="sg-desktop-nav" aria-label="Main navigation">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <button
                  key={link.target || link.id}
                  className={`sg-nav-item ${active ? 'sg-nav-item--active' : ''}`}
                  onClick={() => handleNav(link)}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="sg-nav-item-label">{link.label}</span>
                  <span className="sg-nav-item-underline" aria-hidden="true" />
                </button>
              );
            })}
          </nav>

          {/* Right: Apply Now + Hamburger */}
          <div className="sg-navbar-actions">
            <button
              className="sg-apply-btn"
              onClick={() => openAdmissionsModal()}
              aria-label="Apply Now"
            >
              Apply Now
            </button>
            <button
              className="sg-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`sg-mobile-drawer ${mobileOpen ? 'sg-mobile-drawer--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="sg-mobile-drawer-inner">
          <div className="sg-mobile-drawer-header">
            {logo && <img src={logo} alt={collegeName} className="sg-mobile-logo" />}
            <button className="sg-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="sg-mobile-links" aria-label="Mobile navigation">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <button
                  key={link.target || link.id}
                  className={`sg-mobile-link ${active ? 'sg-mobile-link--active' : ''}`}
                  onClick={() => handleNav(link)}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </nav>
          <div className="sg-mobile-drawer-footer">
            <button className="sg-apply-btn sg-apply-btn--full" onClick={() => { setMobileOpen(false); openAdmissionsModal(); }}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && <div className="sg-drawer-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />}
    </div>
  );
}
