import React from 'react';
import { CollegeProvider, useCollege } from './context/CollegeContext';
import { ThemeProvider } from './tier1/design-system/ThemeProvider';
import { Navbar } from './tier1/components/Navbar';
import { PageRenderer } from './tier2/PageRenderer';
import { DetailModal } from './tier1/components/DetailModal';
import { AdmissionsModal } from './tier1/components/AdmissionsModal';
import { Lightbox } from './tier1/components/Lightbox';

// Error Boundary to prevent blank screen crashes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem', color: '#ffffff', background: '#0f172a', minHeight: '100vh', textAlign: 'center' }}>
          <h2 style={{ color: '#f97316', marginBottom: '1rem' }}>Something went wrong loading the page</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.hash = '';
              window.location.reload();
            }}
            style={{
              background: '#f97316',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Reload Homepage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainAppContent() {
  const { collegeData, activeLightboxImage, closeLightbox } = useCollege();

  return (
    <ThemeProvider theme={collegeData?.theme}>
      <div className="cognizant-app-root" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <PageRenderer />
        <DetailModal />
        <AdmissionsModal />
        {activeLightboxImage && (
          <Lightbox
            src={activeLightboxImage.src || activeLightboxImage}
            alt={activeLightboxImage.alt || 'Gallery Preview'}
            onClose={closeLightbox}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <CollegeProvider>
        <MainAppContent />
      </CollegeProvider>
    </ErrorBoundary>
  );
}
