import React from 'react';
import { describe, test, vi, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { shouldBeAccessible } from '../tests/shouldBeA11y';
import { IconButton } from './Button';

describe('IconButton', () => {
  shouldBeAccessible('IconButton', <IconButton />);

  test('onClick fn should be called via the keyboard', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<IconButton onClick={onClick} /> );
    await user.keyboard('[Tab]');
    await user.keyboard('[Enter]');
    expect(onClick).toHaveBeenCalled();
  });
});
