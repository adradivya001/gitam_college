import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { CollegeProvider } from './context/CollegeContext';
import { ThemeProvider } from './components/design-system/ThemeProvider';
import collegeRegistry from './config/collegeRegistry';
import { JuniorCollegeTemplate } from './templates/JuniorCollegeTemplate/JuniorCollegeTemplate';

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
              window.location.href = '/';
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

function CollegeRouteHandler() {
  const { collegeId } = useParams();
  const college = collegeRegistry[collegeId];

  console.log("CollegeRouteHandler mounted. collegeId:", collegeId, "college:", college);

  if (!college) {
    console.warn("College not found in registry! Redirecting to /teja. collegeId:", collegeId);
    // If the college is not found, redirect to a default college or show a 404
    return <Navigate to="/teja" replace />;
  }

  return (
    <CollegeProvider key={collegeId} initialCollegeId={collegeId} collegeData={college.content}>
      <ThemeProvider theme={college.theme}>
        <JuniorCollegeTemplate college={college} />
      </ThemeProvider>
    </CollegeProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/:collegeId/*" element={<CollegeRouteHandler />} />
          <Route path="/" element={<Navigate to="/sri-gitam" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
