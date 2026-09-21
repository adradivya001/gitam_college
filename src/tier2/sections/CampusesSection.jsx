import React, { useState } from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Card } from '../../tier1/components/Card';
import { Badge } from '../../tier1/components/Badge';
import { Button } from '../../tier1/components/Button';
import { MapPin, Phone, CheckCircle2, Building2, ExternalLink } from 'lucide-react';
import './CampusesSection.css';

export function CampusesSection({ data, sectionConfig, theme, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'CHOOSE YOUR CAMPUS';
  const title = sectionConfig?.title || 'Choose Your Campus';
  const subtitle = sectionConfig?.subtitle || 'Select a campus to view its location, contact details, facilities and other available information.';
  
  const campuses = data?.college?.campuses || sectionConfig?.campuses || [];
  const [selectedCampusId, setSelectedCampusId] = useState(campuses[0]?.id || 'kamalanagar');

  if (campuses.length === 0) return null;

  const selectedCampus = campuses.find((c) => c.id === selectedCampusId) || campuses[0];

  const handleSelectCampus = (id) => {
    setSelectedCampusId(id);
    const el = document.getElementById('selected-campus-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="campuses" className="campuses-section visual-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          theme={theme}
        />

        {/* Interactive Campus Selector Tabs */}
        <div className="campus-tabs-bar" role="tablist">
          {campuses.map((campus) => {
            const isActive = campus.id === selectedCampusId;
            return (
              <button
                key={campus.id}
                role="tab"
                aria-selected={isActive}
                className={`campus-tab-btn ${isActive ? 'tab-active' : ''}`}
                onClick={() => handleSelectCampus(campus.id)}
              >
                <Building2 size={16} />
                <span>{campus.displayName || campus.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3 Campus Cards Selection Grid */}
        <div className="campuses-grid">
          {campuses.map((campus) => {
            const isSelected = campus.id === selectedCampusId;
            return (
              <Card
                key={campus.id}
                variant="glass"
                className={`campus-card ${isSelected ? 'card-selected' : ''}`}
              >
                <div className="campus-card-img-wrapper">
                  <img
                    src={campus.image || 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'}
                    alt={campus.displayName || campus.name}
                    className="campus-card-img"
                    loading="lazy"
                  />
                  <div className="campus-img-overlay" />
                  <Badge variant="glow" className="campus-badge">
                    <Building2 size={12} />
                    {campus.displayName || campus.name}
                  </Badge>
                </div>

                <div className="campus-card-content">
                  <h3 className="campus-title">{campus.displayName || campus.name}</h3>
                  
                  <div className="campus-info-row">
                    <MapPin size={16} className="campus-info-icon location-icon" />
                    <span className="campus-address-text">{campus.address}</span>
                  </div>

                  {campus.phone ? (
                    <div className="campus-info-row">
                      <Phone size={16} className="campus-info-icon phone-icon" />
                      <a href={`tel:${campus.phone}`} className="campus-phone-link">
                        {campus.phone}
                      </a>
                    </div>
                  ) : null}

                  {campus.facilities && campus.facilities.length > 0 && (
                    <div className="campus-facilities-block">
                      <span className="facilities-label">Campus Facilities:</span>
                      <div className="facilities-pills-row">
                        {campus.facilities.slice(0, 3).map((fac, fIdx) => (
                          <span key={fIdx} className="facility-pill">
                            <CheckCircle2 size={12} />
                            {fac}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="campus-card-footer">
                    <Button
                      variant={isSelected ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => handleSelectCampus(campus.id)}
                      style={{ width: '100%' }}
                    >
                      View Campus Details →
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Selected Campus Details Section (50/50 Desktop Layout) */}
        {selectedCampus && (
          <div id="selected-campus-details" className="selected-campus-details-container">
            <div className="selected-campus-grid">
              {/* Left 50% Image */}
              <div className="selected-campus-visual">
                <img
                  src={selectedCampus.image || 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'}
                  alt={selectedCampus.displayName || selectedCampus.name}
                  className="selected-campus-img"
                />
                <div className="selected-campus-img-tag">
                  <span>SELECTED CAMPUS</span>
                </div>
              </div>

              {/* Right 50% Info Card */}
              <div className="selected-campus-info-card">
                <div className="campus-detail-header">
                  <span className="detail-eyebrow">CAMPUS INFORMATION</span>
                  <h3 className="detail-campus-name">{selectedCampus.displayName || selectedCampus.name}</h3>
                  <p className="detail-campus-desc">{selectedCampus.description || 'A supportive intermediate learning environment at Teja Junior College Anantapur.'}</p>
                </div>

                <div className="detail-field-group">
                  <span className="field-label">LOCATION</span>
                  <p className="field-value">{selectedCampus.city || 'Anantapur'}, {selectedCampus.state || 'Andhra Pradesh'}</p>
                </div>

                <div className="detail-field-group">
                  <span className="field-label">ADDRESS</span>
                  <p className="field-value">{selectedCampus.address}</p>
                </div>

                {selectedCampus.phone ? (
                  <div className="detail-field-group">
                    <span className="field-label">PHONE</span>
                    <p className="field-value">
                      <a href={`tel:${selectedCampus.phone}`} className="detail-phone-link">
                        {selectedCampus.phone}
                      </a>
                    </p>
                  </div>
                ) : null}

                {selectedCampus.facilities && selectedCampus.facilities.length > 0 && (
                  <div className="detail-field-group">
                    <span className="field-label">FACILITIES</span>
                    <div className="detail-pills-row">
                      {selectedCampus.facilities.map((fac, idx) => (
                        <span key={idx} className="detail-facility-pill">
                          <CheckCircle2 size={13} />
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="selected-campus-actions">
                  {selectedCampus.phone ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(`tel:${selectedCampus.phone}`, '_self')}
                    >
                      <Phone size={15} />
                      Call Campus
                    </Button>
                  ) : null}

                  {selectedCampus.mapLink || data?.college?.location?.mapUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(selectedCampus.mapLink || data?.college?.location?.mapUrl, '_blank')}
                    >
                      <ExternalLink size={15} />
                      Get Directions
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}

        {(sectionConfig?.sectionCta || sectionConfig?.cta) && (
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Button
              variant="primary"
              size="md"
              onClick={() => onAction && onAction(sectionConfig.sectionCta?.action || sectionConfig.cta?.action || 'navigate_to', sectionConfig.sectionCta?.target || sectionConfig.cta?.target || 'campuses')}
            >
              {(sectionConfig.sectionCta || sectionConfig.cta).label || 'View All Campuses →'}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

