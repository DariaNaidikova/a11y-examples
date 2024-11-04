import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './Button';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
  args: {
    'aria-label': 'next slide',
  },
};

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export default meta;
