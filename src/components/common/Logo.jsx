import React from 'react';
import { Shield, GraduationCap } from 'lucide-react';

export function Logo({
  name = 'TEJA',
  subtext = 'JUNIOR COLLEGE • ANANTAPUR',
  logoUrl = '',
  motif = 'shield',
  size = 'md',
  lightBackground = false,
  className = '',
  hideText = false,
  fullLogo = false
}) {
  const isSm = size === 'sm';
  const logoWidth = isSm ? '40px' : '48px';
  const logoHeight = isSm ? '40px' : '48px';

  return (
    <div className={`college-logo college-logo-${size} ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          style={fullLogo ? {
            height: logoHeight,
            width: 'auto',
            objectFit: 'contain',
            flexShrink: 0
          } : {
            width: logoWidth,
            height: logoHeight,
            objectFit: 'contain',
            borderRadius: '50%',
            flexShrink: 0,
            background: '#FFFFFF',
            padding: '2px',
            boxShadow: '0 4px 14px rgba(11, 59, 130, 0.25)',
            border: '2px solid #0B3B82'
          }}
        />
      ) : (
        <div
          style={{
            width: logoWidth,
            height: logoHeight,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0B3B82 0%, #2563EB 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(11, 59, 130, 0.25)',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <GraduationCap size={isSm ? 20 : 24} color="#FFFFFF" strokeWidth={2.2} />
        </div>
      )}

      {!hideText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: isSm ? '1.1rem' : '1.35rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              color: lightBackground ? '#0B3B82' : 'var(--color-text, #FFFFFF)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {name}
          </span>
          {subtext && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: lightBackground ? '#2563EB' : 'var(--color-gold, #D97706)',
                marginTop: '2px'
              }}
            >
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
