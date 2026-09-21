import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { getSectionComponent } from '../../components/sectionRegistry';
import { Navbar } from '../../components/common/Navbar';
import { FooterSection } from '../../components/FooterSection';
import { DetailModal } from '../../components/common/DetailModal';
import { AdmissionsModal } from '../../components/common/AdmissionsModal';
import { Lightbox } from '../../components/common/Lightbox';

// We will need to adapt the context or manage state here
import { useCollege } from '../../context/CollegeContext';

export function JuniorCollegeTemplate({ college }) {
  useScrollReveal();
  
  const {
    activePage,
    navigateToPage,
    openAdmissionsModal,
    openLightbox,
    openDetailModal,
    activeLightboxImage,
    closeLightbox
  } = useCollege();

  if (!college) return null;

  const collegeData = college.content;
  const theme = college.theme;

  const pageSections = collegeData?.pages?.[activePage]?.sections;
  const sections = pageSections
    ? pageSections
    : (activePage === 'about' && collegeData.about?.sections)
      ? collegeData.about.sections
      : (collegeData.sections || []);

  const handleAction = (action, payload) => {
    if (action === 'open_admissions_modal') {
      openAdmissionsModal(payload || '');
    } else if (action === 'open_detail_modal') {
      openDetailModal(payload || 'about');
    } else if (action === 'open_lightbox') {
      openLightbox(payload);
    } else if (action === 'navigate_to') {
      navigateToPage(payload || 'home');
    } else if (action === 'scroll_to' && payload) {
      const el = document.querySelector(payload);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateToPage('home', payload);
      }
    }
  };

  return (
    <div className={`${college.id}-app-root`} style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      
      <main className="college-page-content" key={activePage}>
        {sections.map((sectionConfig) => {
          if (sectionConfig.enabled === false) return null;

          // Note: getSectionComponent must be updated to point to src/components/
          const SectionComponent = getSectionComponent(sectionConfig.type);
          if (!SectionComponent) {
            console.warn(`[JuniorCollegeTemplate] Unknown section type: ${sectionConfig.type}`);
            return null;
          }

          return (
            <SectionComponent
              key={sectionConfig.id}
              data={collegeData}
              sectionConfig={sectionConfig}
              theme={theme}
              onAction={handleAction}
            />
          );
        })}

        <FooterSection
          data={collegeData}
          theme={theme}
          onAction={handleAction}
        />
      </main>

      <DetailModal />
      <AdmissionsModal />
      {activeLightboxImage && (
        <Lightbox
          src={activeLightboxImage.src || activeLightboxImage}
          alt={activeLightboxImage.alt || 'Gallery Preview'}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
