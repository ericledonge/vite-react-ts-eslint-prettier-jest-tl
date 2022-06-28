import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

const BUTTON_LABEL = 'Increment';

describe('Button', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should debug all and debug a specific element an element', () => {
    const { getByRole, debug } = render(<Button>{BUTTON_LABEL}</Button>);
    const button = getByRole('button');

    debug();
    debug(button);
  });

  it('should render button label', () => {
    const { getByText } = render(<Button>{BUTTON_LABEL}</Button>);

    expect(getByText(BUTTON_LABEL)).toBeInTheDocument();
  });

  it('should render the counter with a value of 0', () => {
    const { getByText } = render(<Button>{BUTTON_LABEL}</Button>);

    expect(getByText('0')).toBeInTheDocument();
  });
});
