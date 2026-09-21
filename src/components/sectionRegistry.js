// Section Registry: Maps section types to layout components

import { HeroSection } from './HeroSection';
import { TrustStripSection } from './TrustStripSection';
import { AboutSection } from './AboutSection';
import { FounderSection } from './FounderSection';
import { ProgramsSection } from './ProgramsSection';
import { WinningProcessSection } from './WinningProcessSection';
import { PillarsSection } from './PillarsSection';
import { FacultySection } from './FacultySection';
import { ExamPrepSection } from './ExamPrepSection';
import { TestingAnalyticsSection } from './TestingAnalyticsSection';
import { ResultsSection } from './ResultsSection';
import { GallerySection } from './GallerySection';
import { UpdatesSection } from './UpdatesSection';
import { AdmissionsCTASection } from './AdmissionsCTASection';
import { ContactSection } from './ContactSection';
import { ExperienceSection } from './ExperienceSection';
import { CampusesSection } from './CampusesSection';

// Preview & Rich Media Layouts
import { AcademicsPreviewSection } from './AcademicsPreviewSection';
import { CampusLifeSection } from './CampusLifeSection';
import { CampusPreviewSection } from './CampusPreviewSection';
import { HostelPreviewSection } from './HostelPreviewSection';
import { HostelSection } from './HostelSection';
import { InfrastructureSection } from './InfrastructureSection';
import { PersonalityDevelopmentSection } from './PersonalityDevelopmentSection';
import { PersonalityPreviewSection } from './PersonalityPreviewSection';
import { SportsPreviewSection } from './SportsPreviewSection';
import { SportsSection } from './SportsSection';
import { StudentExperienceSection } from './StudentExperienceSection';
import { StudentLifePreviewSection } from './StudentLifePreviewSection';

// Secondary Page Layouts
import { AboutHeroLayout } from './AboutHeroLayout';
import { StoryLayout } from './StoryLayout';
import { CommitmentLayout } from './CommitmentLayout';
import { MissionVisionLayout } from './MissionVisionLayout';
import { PhilosophyLayout } from './PhilosophyLayout';
import { FounderMessageLayout } from './FounderMessageLayout';
import { QuoteLayout } from './QuoteLayout';

// Sri GITAM Custom Components
import { SgHero } from '../colleges/sri-gitam/components/SgHero';
import { SgAbout } from '../colleges/sri-gitam/components/SgAbout';
import { SgProgrammes } from '../colleges/sri-gitam/components/SgProgrammes';
import { SgWhyUs } from '../colleges/sri-gitam/components/SgWhyUs';
import { SgAchievements } from '../colleges/sri-gitam/components/SgAchievements';
import { SgAdmissionsCTA } from '../colleges/sri-gitam/components/SgAdmissionsCTA';

export const SECTION_REGISTRY = {
  hero: HeroSection,
  'trust-strip': TrustStripSection,
  about: AboutSection,
  founder: FounderSection,
  programs: ProgramsSection,
  'winning-process': WinningProcessSection,
  pillars: PillarsSection,
  'why-us': PillarsSection,
  'why-cognizant': PillarsSection,
  faculty: FacultySection,
  'exam-prep': ExamPrepSection,
  'testing-analytics': TestingAnalyticsSection,
  results: ResultsSection,
  gallery: GallerySection,
  'gallery-preview': GallerySection,
  updates: UpdatesSection,
  'admissions-cta': AdmissionsCTASection,
  'final-cta': AdmissionsCTASection,
  contact: ContactSection,
  'contact-preview': ContactSection,
  campuses: CampusesSection,
  'campuses-preview': CampusesSection,

  'student-experience': StudentExperienceSection,
  'campus-preview': CampusPreviewSection,
  'academics-preview': AcademicsPreviewSection,
  'sports-preview': SportsPreviewSection,
  'hostel-preview': HostelPreviewSection,
  'student-life-preview': StudentLifePreviewSection,
  'personality-preview': PersonalityPreviewSection,
  'chakra-experience': ExperienceSection,
  'campus-life': CampusLifeSection,
  hostel: HostelSection,
  infrastructure: InfrastructureSection,
  'personality-development': PersonalityDevelopmentSection,
  sports: SportsSection,

  'about-hero': AboutHeroLayout,
  'story-layout': StoryLayout,
  'commitment-layout': CommitmentLayout,
  'mission-vision-layout': MissionVisionLayout,
  'philosophy-layout': PhilosophyLayout,
  'founder-message-layout': FounderMessageLayout,
  'quote-layout': QuoteLayout,
  'final-cta-layout': AdmissionsCTASection,

  // Sri GITAM Custom Components
  'sg-hero': SgHero,
  'sg-about': SgAbout,
  'sg-programmes': SgProgrammes,
  'sg-why': SgWhyUs,
  'sg-achievements': SgAchievements,
  'sg-admissions-cta': SgAdmissionsCTA
};

export function getSectionComponent(type) {
  return SECTION_REGISTRY[type] || null;
}
