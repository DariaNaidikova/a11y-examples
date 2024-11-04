import { configureAxe } from 'vitest-axe';

export const axe = configureAxe({
  rules: {
    ['color-contrast']: {
      enabled: false,
    },
  },
  runOnly: [
    'wcag2a',
    'wcag2aa',
    'wcag21a',
    'wcag21aa',
    'best-practice'
  ],
});
