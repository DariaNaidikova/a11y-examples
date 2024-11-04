import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
