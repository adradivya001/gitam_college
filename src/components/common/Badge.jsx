import React from 'react';

export function Badge({
  children,
  variant = 'subtle', // 'primary' | 'secondary' | 'subtle' | 'outline' | 'glow'
  size = 'md',
  icon: Icon = null,
  className = ''
}) {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: size === 'sm' ? '4px 10px' : '6px 14px',
    borderRadius: 'var(--radius-full)',
    fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-mono, monospace)',
    whiteSpace: 'nowrap'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: '#EFF6FF',
          color: '#1E40AF',
          border: '1px solid #BFDBFE'
        };
      case 'secondary':
        return {
          background: '#FEF3C7',
          color: '#D97706',
          border: '1px solid #FDE68A'
        };
      case 'glow':
        return {
          background: '#FEF3C7',
          color: '#D97706',
          border: '1px solid #FDE68A',
          boxShadow: '0 2px 10px rgba(217, 119, 6, 0.2)'
        };
      case 'outline':
        return {
          background: '#FFFFFF',
          color: '#0F172A',
          border: '1px solid #CBD5E1'
        };
      case 'subtle':
      default:
        return {
          background: '#EFF6FF',
          color: '#1E40AF',
          border: '1px solid #BFDBFE'
        };
    }
  };

  return (
    <span className={`badge badge-${variant} ${className}`} style={{ ...styles, ...getVariantStyles() }}>
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
}
