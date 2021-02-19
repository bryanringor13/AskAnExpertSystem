import React from 'react';

import { LmTypographyPink } from './LmTypographyPink';

export default {
  title: 'Lamarck/LmTypographyPink',
  component: LmTypographyPink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTypographyPink {...args} />;

export const Body16Med = Template.bind({});
Body16Med.args = {
  variant: 'subtitle1',
  label: 'The quick brown fox jumps over the lazy dog',
};

export const Body14 = Template.bind({});
Body14.args = {
  variant: 'subtitle2',
  label: 'The quick brown fox jumps over the lazy dog',
};

export const Body12 = Template.bind({});
Body12.args = {
  variant: 'subtitle',
  label: 'The quick brown fox jumps over the lazy dog',
};