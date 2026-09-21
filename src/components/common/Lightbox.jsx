import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export function Lightbox() {
  const { activeLightboxImage, closeLightbox } = useCollege();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (activeLightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxImage, closeLightbox]);

  if (!activeLightboxImage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={closeLightbox}
    >
      <button
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        onClick={closeLightbox}
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      <div
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeLightboxImage.image}
          alt={activeLightboxImage.title || 'Campus visual'}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            borderRadius: 'var(--radius-lg, 16px)',
            objectFit: 'contain',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
          }}
        />
        {activeLightboxImage.title && (
          <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600 }}>
              {activeLightboxImage.title}
            </h4>
            {activeLightboxImage.caption && (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginTop: '4px' }}>
                {activeLightboxImage.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
