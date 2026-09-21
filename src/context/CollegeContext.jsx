import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadCollegeData, getAvailableColleges } from '../tier3/contentLoader';

const CollegeContext = createContext(null);

export function CollegeProvider({ children }) {
  const [activeCollegeId, setActiveCollegeId] = useState('teja');
  const [collegeData, setCollegeData] = useState(() => loadCollegeData('teja'));
  
  // Active Page Route State ('home' | 'about' | 'academics' | 'campuses' | 'facilities' | 'student-life' | 'admissions' | 'gallery' | 'contact')
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = (window.location.hash || window.location.pathname).replace(/^#\/?/, '').replace(/^\//, '');
      const validPages = ['about', 'academics', 'campuses', 'why-teja', 'facilities', 'student-life', 'admissions', 'gallery', 'contact'];
      if (validPages.includes(path)) return path;
    }
    return 'home';
  });

  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [admissionsModalMeta, setAdmissionsModalMeta] = useState('');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeDetailModal, setActiveDetailModal] = useState(null);

  useEffect(() => {
    const data = loadCollegeData(activeCollegeId);
    setCollegeData(data);
  }, [activeCollegeId]);

  // Sync SEO and Document Title based on Active Page & Data
  useEffect(() => {
    if (!collegeData) return;

    if (collegeData.seo) {
      document.title = collegeData.seo.title || collegeData.college?.name;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', collegeData.seo.metaDescription || '');
      }
    }
  }, [collegeData, activePage]);

  // Listen to hash change for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const path = (window.location.hash || window.location.pathname).replace(/^#\/?/, '').replace(/^\//, '');
      const validPages = ['about', 'academics', 'campuses', 'why-teja', 'facilities', 'student-life', 'admissions', 'gallery', 'contact'];
      if (validPages.includes(path)) {
        setActivePage(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (path === 'home' || path === 'hero' || path === '') {
        setActivePage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageName, scrollTarget = null) => {
    setActivePage(pageName);
    if (typeof window !== 'undefined') {
      window.location.hash = pageName === 'home' ? '' : pageName;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (scrollTarget) {
      setTimeout(() => {
        const el = document.querySelector(scrollTarget);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const openAdmissionsModal = (meta = '') => {
    setAdmissionsModalMeta(meta);
    setIsAdmissionsModalOpen(true);
  };

  const closeAdmissionsModal = () => {
    setIsAdmissionsModalOpen(false);
    setAdmissionsModalMeta('');
  };

  const openLightbox = (imageObj) => {
    setActiveLightboxImage(imageObj);
  };

  const closeLightbox = () => {
    setActiveLightboxImage(null);
  };

  const openDetailModal = (pageKey) => {
    setActiveDetailModal(pageKey);
  };

  const closeDetailModal = () => {
    setActiveDetailModal(null);
  };

  return (
    <CollegeContext.Provider
      value={{
        activeCollegeId,
        setActiveCollegeId,
        collegeData,
        availableColleges: getAvailableColleges(),
        activePage,
        setActivePage,
        navigateToPage,
        isAdmissionsModalOpen,
        admissionsModalMeta,
        openAdmissionsModal,
        closeAdmissionsModal,
        activeLightboxImage,
        openLightbox,
        closeLightbox,
        activeDetailModal,
        openDetailModal,
        closeDetailModal
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
}

export function useCollege() {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
}
