import React from 'react';

import { LmTypographyGrey } from './LmTypographyGrey';

export default {
  title: 'Lamarck/LmTypographyGrey',
  component: LmTypographyGrey,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTypographyGrey {...args} />;

export const Body16Med = Template.bind({});
Body16Med.args = {
  variant: 'subtitle1',
  label: 'body16Med The quick brown fox jumps over the lazy dog',
};

export const Body14 = Template.bind({});
Body14.args = {
  variant: 'subtitle2',
  label: 'body14 The quick brown fox jumps over the lazy dog',
};

export const Body12 = Template.bind({});
Body12.args = {
  variant: 'caption',
  label: 'body12 The quick brown fox jumps over the lazy dog',
};