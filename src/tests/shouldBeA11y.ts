import { axe } from './configureAxe';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

export const shouldBeAccessible = (
  testName: string,
  component: React.ReactElement,
) => {
  test(`@axe ${testName}`, async () => {
    const { container } = render(component);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
};
