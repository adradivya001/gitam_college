import React from 'react';
import { Container } from './common/Container';
import { Badge } from './common/Badge';

export function BrandStatementSection({ data, sectionConfig, theme }) {
  const tag = sectionConfig?.tag || 'CORE PHILOSOPHY';
  const statement = sectionConfig?.statement || 'MORE THAN A COLLEGE. A PLACE TO GROW.';
  const description = sectionConfig?.description || data?.college?.tagline || '';

  return (
    <section className="brand-statement-section" style={{ padding: '70px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-alt)' }}>
      <Container size="sm">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <Badge variant="glow">{tag}</Badge>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--color-text)'
            }}
          >
            {statement}
          </h2>
          {description && (
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                maxWidth: '680px'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
