import React from 'react';

export function OrbitalMotif({ motif = 'circular', style = {} }) {
  if (motif === 'geometric') {
    return <div className="motif-geometric-grid" style={style} />;
  }

  return (
    <div className="motif-circular-container" style={style} aria-hidden="true">
      <div className="chakra-radial-glow" style={{ top: '20%', left: '30%', width: '500px', height: '500px' }} />
      <div className="chakra-radial-glow" style={{ bottom: '10%', right: '20%', width: '600px', height: '600px', opacity: 0.5 }} />
      <div className="chakra-orbital-ring chakra-orbital-ring-1" style={{ top: '35%', left: '50%' }} />
      <div className="chakra-orbital-ring chakra-orbital-ring-2" style={{ top: '35%', left: '50%' }} />
      <div className="chakra-orbital-ring chakra-orbital-ring-3" style={{ top: '35%', left: '50%' }} />
    </div>
  );
}
