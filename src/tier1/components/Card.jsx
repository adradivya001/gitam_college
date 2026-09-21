import React from 'react';

export function Card({
  children,
  variant = 'default', // 'default' | 'glass' | 'surface-alt' | 'light' | 'outline'
  interactive = false,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
      case 'glass':
        return {
          background: '#132A30',
          border: '1px solid #29474A',
          color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)'
        };
      case 'surface-alt':
        return {
          background: '#F4F7F6',
          border: '1px solid #CBD9D6',
          color: '#162126'
        };
      case 'outline':
        return {
          background: '#FFFFFF',
          border: '1px solid #CBD9D6',
          color: '#162126'
        };
      case 'light':
      case 'default':
      default:
        return {
          background: '#FFFFFF',
          border: '1px solid #CBD9D6',
          color: '#162126',
          boxShadow: '0 8px 24px rgba(11, 21, 27, 0.10)'
        };
    }
  };

  const cardStyles = {
    borderRadius: '16px',
    padding: '28px',
    position: 'relative',
    transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: interactive ? 'pointer' : 'default',
    ...getVariantStyles(),
    ...style
  };

  return (
    <div
      className={`ui-card ${interactive ? 'hover-glow-card' : ''} ${className}`}
      style={cardStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
