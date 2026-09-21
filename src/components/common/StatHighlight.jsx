import React from 'react';

export function StatHighlight({
  number,
  label,
  sub,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`stat-highlight-card ${className}`}
      style={{
        background: 'rgba(22, 29, 43, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg, 16px)',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
        ...style
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 800,
          color: 'var(--color-primary)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em'
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'var(--color-text)'
        }}
      >
        {label}
      </div>
      {sub && (
        <div
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.4
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
