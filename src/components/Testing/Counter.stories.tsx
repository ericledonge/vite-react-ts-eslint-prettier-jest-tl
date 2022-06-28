import { ComponentStory } from '@storybook/react';
import React from 'react';

import Counter from './Counter';

export default {
  component: Counter,
  title: 'Counter',
};

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Increment',
  onCounterEquals3: () => {
    window.alert('3');
  },
};
