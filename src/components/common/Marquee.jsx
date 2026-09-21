import React from 'react';
import './Marquee.css';

export function Marquee({
  children,
  speed = 30, // seconds for full loop
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) {
  return (
    <div
      className={`marquee-wrapper ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={{ '--marquee-speed': `${speed}s` }}
    >
      <div className={`marquee-track marquee-${direction}`}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
