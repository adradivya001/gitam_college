import React from 'react';
import { Badge } from './Badge';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  theme,
  badgeVariant = 'glow',
  className = '',
  light = false
}) {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        maxWidth: isCenter ? '760px' : '100%',
        margin: isCenter ? '0 auto 48px auto' : '0 0 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : isRight ? 'flex-end' : 'flex-start',
        gap: '14px'
      }}
    >
      {eyebrow && (
        <Badge variant={badgeVariant}>
          {eyebrow}
        </Badge>
      )}

      {title && (
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: light ? '#0F172A' : 'var(--color-text, #FFFFFF)',
            whiteSpace: 'pre-line'
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.1875rem)',
            lineHeight: 1.65,
            color: light ? '#334155' : 'var(--color-text-muted, #E2E8F0)',
            maxWidth: '640px',
            fontWeight: 450
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
