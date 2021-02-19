import React from 'react';

import { LmTypography } from './LmTypography';

export default {
  title: 'Lamarck/LmTypography',
  component: LmTypography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTypography {...args} />;

export const Header1 = Template.bind({});
Header1.args = {
  variant: 'h1',
  label: 'h1 The quick brown fox jumps over the lazy dog',
};

export const Header2 = Template.bind({});
Header2.args = {
    variant: 'h2', 
     label: 'h2 The quick brown fox jumps over the lazy dog',
};

export const Header3 = Template.bind({});
Header3.args = {
  variant: 'h3',
  label: 'h3 The quick brown fox jumps over the lazy dog',
};


export const body16med = Template.bind({});
body16med.args = {
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