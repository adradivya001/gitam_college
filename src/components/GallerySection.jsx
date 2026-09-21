import React, { useState } from 'react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Eye, ArrowUpRight } from 'lucide-react';
import './GallerySection.css';

export function GallerySection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'CAMPUS & INFRASTRUCTURE';
  const title = sectionConfig?.title || 'THE PLACE WHERE THE JOURNEY HAPPENS.';
  const subtitle = sectionConfig?.subtitle || 'Modern classrooms, science laboratories, and focused study spaces.';

  const categories = data?.gallery?.categories || [];
  const allImages = data?.gallery?.images || [];

  const [activeTab, setActiveTab] = useState('All');

  const filteredImages = activeTab === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeTab);

  return (
    <section id="campus" className="visual-section gallery-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Category Filters */}
        <div className="gallery-filter-tabs">
          <button
            className={`filter-tab-btn ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => setActiveTab('All')}
          >
            All Campus Views
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="asymmetric-gallery-grid">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`gallery-grid-item item-layout-${(idx % 6) + 1}`}
              onClick={() => onAction('open_lightbox', { src: item.src, alt: item.title, caption: item.caption || item.title })}
            >
              <img
                src={item.src}
                alt={item.title}
                className="gallery-item-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-cat">{item.category}</span>
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-caption">{item.caption}</p>
                <div className="gallery-zoom-icon">
                  <Eye size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
