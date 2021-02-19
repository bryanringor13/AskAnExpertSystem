import React from 'react';

import { LmBadge } from './LmBadge';

export default {
  title: 'Lamarck/LmBadge',
  component: LmBadge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmBadge {...args} />;

export const Basic1 = Template.bind({});
Basic1.args = {
  max: 999,
  badgeContent: 4,
  color: 'secondary',
  tagText: 'icon/shape',
};

export const Max1 = Template.bind({});
Max1.args = {
  max: 10,
  color: 'primary',
  badgeContent: 20,
  tagText: 'icon/shape',
};

export const Dot = Template.bind({});
Dot.args = {
  badgeContent: 10,
  color: 'secondary',
  variant: 'dot',
  tagText: 'icon/shape',
};
