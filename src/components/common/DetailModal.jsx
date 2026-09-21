import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Badge } from './Badge';
import { useCollege } from '../../context/CollegeContext';
import {
  BookOpen,
  ShieldCheck,
  Trophy,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Award
} from 'lucide-react';
import './DetailModal.css';

export function DetailModal() {
  const {
    activeDetailModal,
    closeDetailModal,
    collegeData,
    openAdmissionsModal
  } = useCollege();

  if (!activeDetailModal || !collegeData) return null;

  const college = collegeData.college || {};
  const courses = collegeData.courses?.programs || [];
  const facultyList = collegeData.faculty?.members || [];

  const handleEnquire = () => {
    closeDetailModal();
    openAdmissionsModal(activeDetailModal);
  };

  const renderContent = () => {
    // Handle Program Detail Modals
    if (activeDetailModal.startsWith('program:')) {
      const progId = activeDetailModal.replace('program:', '');
      const program = courses.find((p) => p.id === progId || p.code === progId) || courses[0];

      if (!program) return null;

      return (
        <div className="detail-modal-body">
          <div className="detail-header-hero">
            <Badge variant="glow" size="sm">
              <Sparkles size={12} />
              {program.code ? `${program.code} — ` : ''}{college.shortName || college.name || 'PROGRAM'}
            </Badge>
            <h2>{program.name}</h2>
            {program.tagline && <p className="detail-lead-text">{program.tagline}</p>}
          </div>

          <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '24px' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-text)', marginBottom: '16px' }}>
              {program.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {program.duration && <span className="pill-tag target-tag">Duration: {program.duration}</span>}
              {program.streams && <span className="pill-tag">Streams: {program.streams.join(' / ')}</span>}
              {program.targetExams?.map((ex, i) => (
                <span key={i} className="pill-tag" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60A5FA' }}>
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {program.keyFeatures && program.keyFeatures.length > 0 && (
            <>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '16px', fontWeight: 700 }}>
                Key Academic Highlights
              </h3>
              <ul className="facility-feature-list" style={{ marginBottom: '24px' }}>
                {program.keyFeatures.map((feat, i) => (
                  <li key={i} style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      );
    }

    // Handle Faculty Detail Modals
    if (activeDetailModal.startsWith('faculty:')) {
      const facId = activeDetailModal.replace('faculty:', '');
      const faculty = facultyList.find((f) => f.id === facId || f.name.toLowerCase().includes(facId.toLowerCase())) || facultyList[0];

      if (!faculty) return null;

      return (
        <div className="detail-modal-body">
          <div className="detail-header-hero" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.4rem'
                }}
              >
                {faculty.initials || faculty.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <Badge variant="glow" size="sm">{faculty.subject || 'Faculty'} Mentor</Badge>
                <h2 style={{ margin: '4px 0 2px 0' }}>{faculty.name}</h2>
                <span style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>{faculty.role}</span>
              </div>
            </div>
          </div>

          <div className="detail-cards-grid">
            {faculty.qualification && (
              <div className="detail-card">
                <div className="detail-card-icon"><GraduationCap size={20} /></div>
                <h3>Qualification</h3>
                <p>{faculty.qualification}</p>
              </div>
            )}
            {faculty.specialization && (
              <div className="detail-card">
                <div className="detail-card-icon"><Award size={20} /></div>
                <h3>Specialisation</h3>
                <p>{faculty.specialization}</p>
              </div>
            )}
          </div>

          {faculty.experience && (
            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '14px', border: '1px solid var(--color-border)', marginTop: '20px' }}>
              <h4 style={{ color: 'var(--color-text)', marginBottom: '8px' }}>Teaching & Mentorship Experience</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{faculty.experience}</p>
            </div>
          )}
        </div>
      );
    }

    // Default About / Overview
    const aboutTitle = collegeData.about?.title || `ABOUT ${college.name ? college.name.toUpperCase() : 'OUR INSTITUTION'}`;
    const aboutLead = collegeData.about?.description || college.tagline || college.disclaimer || '';
    const aboutEyebrow = collegeData.about?.eyebrow || `ABOUT ${college.shortName || college.name || 'COLLEGE'}`;
    const points = collegeData.about?.points || [
      'Strong fundamentals & conceptual understanding',
      'Systematic problem solving & daily practice',
      'Continuous testing & comprehensive evaluation',
      'Detailed performance analysis & corrective feedback'
    ];

    return (
      <div className="detail-modal-body">
        <div className="detail-header-hero">
          <Badge variant="glow" size="sm">
            <Sparkles size={12} />
            {aboutEyebrow}
          </Badge>
          <h2>{aboutTitle}</h2>
          {aboutLead && <p className="detail-lead-text">{aboutLead}</p>}
        </div>

        <div className="detail-cards-grid">
          {points.map((pt, i) => {
            const icons = [BookOpen, ShieldCheck, Trophy, Compass];
            const IconComp = icons[i % icons.length];
            return (
              <div key={i} className="detail-card">
                <div className="detail-card-icon"><IconComp size={20} /></div>
                <h3>Key Highlight {i + 1}</h3>
                <p>{pt}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getTitle = () => {
    if (activeDetailModal.startsWith('program:')) return 'Program Details';
    if (activeDetailModal.startsWith('faculty:')) return 'Faculty Profile';
    return `About ${college.shortName || college.name || 'College'}`;
  };

  return (
    <Modal
      isOpen={!!activeDetailModal}
      onClose={closeDetailModal}
      title={getTitle()}
      maxWidth="820px"
    >
      <div className="detail-modal-container">
        {renderContent()}

        <div className="detail-modal-footer">
          <Button variant="outline" onClick={closeDetailModal}>
            Close
          </Button>
          <Button
            variant="primary"
            icon={ArrowUpRight}
            onClick={handleEnquire}
          >
            Admissions Enquiry
          </Button>
        </div>
      </div>
    </Modal>
  );
}
