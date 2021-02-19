import React from 'react';

import { LmTextField } from './LmTextField';

export default {
  title: 'Lamarck/LmTextField',
  component: LmTextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Standard TextField',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary TextField',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  label: 'TextField',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'TextField',
};
