import React from 'react';

import { LmButton } from './LmButton';

export default {
  title: 'Lamarck/LmButton',
  component: LmButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Login',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Sign Up',
  variant: 'outlined'
};

export const Text = Template.bind({});
Text.args = {
  primary: true,
  label: 'ADD INVISIBLE QUESTION',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};
