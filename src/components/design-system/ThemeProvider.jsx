import React, { useEffect } from 'react';
import './tokens.css';
import './motifs.css';

/**
 * ThemeProvider: Dynamically applies color tokens, typography, and radii
 * from the active college's theme.json into the document CSS variables.
 */
export function ThemeProvider({ theme, children }) {
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;

    // Apply Colors
    if (theme.colors) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        // Convert camelCase to kebab-case (e.g. primaryHover -> --color-primary-hover)
        const kebabKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        root.style.setProperty(`--color-${kebabKey}`, value);
      });
    }

    // Apply Typography
    if (theme.typography) {
      if (theme.typography.headingFont) {
        root.style.setProperty('--font-heading', theme.typography.headingFont);
      }
      if (theme.typography.bodyFont) {
        root.style.setProperty('--font-body', theme.typography.bodyFont);
      }
      if (theme.typography.monoFont) {
        root.style.setProperty('--font-mono', theme.typography.monoFont);
      }
    }

    // Apply Radii
    if (theme.radius) {
      Object.entries(theme.radius).forEach(([key, value]) => {
        root.style.setProperty(`--radius-${key}`, value);
      });
    }

    // Apply Shadows
    if (theme.shadows) {
      Object.entries(theme.shadows).forEach(([key, value]) => {
        root.style.setProperty(`--shadow-${key}`, value);
      });
    }

    // Set body background & text
    if (theme.colors?.background) {
      document.body.style.backgroundColor = theme.colors.background;
    }
    if (theme.colors?.text) {
      document.body.style.color = theme.colors.text;
    }
  }, [theme]);

  return <div className={`theme-root motif-${theme?.motif || 'circular'}`}>{children}</div>;
}
