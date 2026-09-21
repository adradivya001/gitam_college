import React from 'react';

export function Container({
  children,
  size = 'default', // 'sm' | 'default' | 'lg' | 'full'
  className = '',
  style = {},
  ...props
}) {
  const getMaxWidth = () => {
    switch (size) {
      case 'sm': return '900px';
      case 'lg': return '1400px';
      case 'full': return '100%';
      case 'default':
      default: return 'var(--container-max-width, 1280px)';
    }
  };

  const containerStyles = {
    width: '100%',
    maxWidth: getMaxWidth(),
    margin: '0 auto',
    paddingLeft: 'var(--container-padding, 24px)',
    paddingRight: 'var(--container-padding, 24px)',
    position: 'relative',
    ...style
  };

  return (
    <div className={`app-container app-container-${size} ${className}`} style={containerStyles} {...props}>
      {children}
    </div>
  );
}
