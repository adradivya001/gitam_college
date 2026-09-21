import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CollegeContext = createContext(null);

export function CollegeProvider({ children, initialCollegeId, collegeData }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [activeCollegeId, setActiveCollegeId] = useState(initialCollegeId);
  
  // Extract active page from React Router path: e.g. /teja/about -> "about"
  const getPageFromPath = (pathname, colId) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 1 && segments[0] === colId) {
      return segments[1];
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(() => getPageFromPath(location.pathname, initialCollegeId));

  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [admissionsModalMeta, setAdmissionsModalMeta] = useState('');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeDetailModal, setActiveDetailModal] = useState(null);

  // Sync active page on route change
  useEffect(() => {
    setActivePage(getPageFromPath(location.pathname, initialCollegeId));
  }, [location.pathname, initialCollegeId]);

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

  const navigateToPage = (pageName, scrollTarget = null) => {
    setActivePage(pageName);
    
    // Navigate via React Router
    if (pageName === 'home') {
      navigate(`/${initialCollegeId}`);
    } else {
      navigate(`/${initialCollegeId}/${pageName}`);
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
