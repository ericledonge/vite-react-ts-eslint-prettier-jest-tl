import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Counter from './Counter';

// if needed
// const renderWithUserEvent = (component: ReactElement) => {
//   return {
//     user: userEvent.setup(),
//     ...render(component),
//   };
// };

const BUTTON_LABEL = 'Increment';
const ON_COUNTER_EQUALS_3 = jest.fn();

describe('Counter', () => {
  // eslint-disable-next-line jest/expect-expect,jest/no-disabled-tests
  it.skip('should debug all and debug a specific element an element', () => {
    const { getByRole, debug } = render(
      <Counter onCounterEquals3={ON_COUNTER_EQUALS_3}>{BUTTON_LABEL}</Counter>,
    );
    const button = getByRole('button');

    debug();
    debug(button);
  });

  it('should render button label', () => {
    const { getByText } = render(
      <Counter onCounterEquals3={ON_COUNTER_EQUALS_3}>{BUTTON_LABEL}</Counter>,
    );

    expect(getByText(BUTTON_LABEL)).toBeInTheDocument();
  });

  it('should render the counter with a value of 0', () => {
    const { getByText } = render(
      <Counter onCounterEquals3={ON_COUNTER_EQUALS_3}>{BUTTON_LABEL}</Counter>,
    );

    expect(getByText('0')).toBeInTheDocument();
  });

  describe('when button is clicked', () => {
    it('should increment the counter', async () => {
      const user = userEvent.setup();
      const { getByText, getByRole } = render(
        <Counter onCounterEquals3={ON_COUNTER_EQUALS_3}>{BUTTON_LABEL}</Counter>,
      );

      await user.click(getByRole('button', { name: BUTTON_LABEL }));

      expect(getByText('1')).toBeInTheDocument();
    });
  });

  describe('when button is clicked 3 times equals 3', () => {
    it('should call OnCounterEquals3', async () => {
      const onCounterEquals3Mock = jest.fn();
      const user = userEvent.setup();
      const { getByText, getByRole } = render(
        <Counter onCounterEquals3={onCounterEquals3Mock}>{BUTTON_LABEL}</Counter>,
      );
      const button = getByRole('button', { name: BUTTON_LABEL });

      for (let i = 0; i < 3; i++) {
        await user.click(button);
      }

      expect(getByText('3')).toBeInTheDocument();
      expect(onCounterEquals3Mock).toHaveBeenCalledTimes(1);
    });
  });
});
