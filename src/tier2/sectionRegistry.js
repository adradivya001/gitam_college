// Tier 2 Section Registry: Maps section types to layout components

import { HeroSection } from './sections/HeroSection';
import { TrustStripSection } from './sections/TrustStripSection';
import { AboutSection } from './sections/AboutSection';
import { FounderSection } from './sections/FounderSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { WinningProcessSection } from './sections/WinningProcessSection';
import { PillarsSection } from './sections/PillarsSection';
import { FacultySection } from './sections/FacultySection';
import { ExamPrepSection } from './sections/ExamPrepSection';
import { TestingAnalyticsSection } from './sections/TestingAnalyticsSection';
import { ResultsSection } from './sections/ResultsSection';
import { GallerySection } from './sections/GallerySection';
import { UpdatesSection } from './sections/UpdatesSection';
import { AdmissionsCTASection } from './sections/AdmissionsCTASection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CampusesSection } from './sections/CampusesSection';

// Preview & Rich Media Layouts
import { AcademicsPreviewSection } from './sections/AcademicsPreviewSection';
import { CampusLifeSection } from './sections/CampusLifeSection';
import { CampusPreviewSection } from './sections/CampusPreviewSection';
import { HostelPreviewSection } from './sections/HostelPreviewSection';
import { HostelSection } from './sections/HostelSection';
import { InfrastructureSection } from './sections/InfrastructureSection';
import { PersonalityDevelopmentSection } from './sections/PersonalityDevelopmentSection';
import { PersonalityPreviewSection } from './sections/PersonalityPreviewSection';
import { SportsPreviewSection } from './sections/SportsPreviewSection';
import { SportsSection } from './sections/SportsSection';
import { StudentExperienceSection } from './sections/StudentExperienceSection';
import { StudentLifePreviewSection } from './sections/StudentLifePreviewSection';

// Secondary Page Layouts
import { AboutHeroLayout } from './sections/AboutHeroLayout';
import { StoryLayout } from './sections/StoryLayout';
import { CommitmentLayout } from './sections/CommitmentLayout';
import { MissionVisionLayout } from './sections/MissionVisionLayout';
import { PhilosophyLayout } from './sections/PhilosophyLayout';
import { FounderMessageLayout } from './sections/FounderMessageLayout';
import { QuoteLayout } from './sections/QuoteLayout';

export const SECTION_REGISTRY = {
  // Primary Core Section Layouts
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

  // Rich Media & Campus Preview Section Layouts
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

  // About Page Layouts
  'about-hero': AboutHeroLayout,
  'story-layout': StoryLayout,
  'commitment-layout': CommitmentLayout,
  'mission-vision-layout': MissionVisionLayout,
  'philosophy-layout': PhilosophyLayout,
  'founder-message-layout': FounderMessageLayout,
  'quote-layout': QuoteLayout,
  'final-cta-layout': AdmissionsCTASection
};

/**
 * Returns the layout component for a given section type
 */
export function getSectionComponent(type) {
  return SECTION_REGISTRY[type] || null;
}
