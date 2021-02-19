import React from 'react';

import {  LmGhostButton } from './LmGhostButton';

export default {
  title: 'Lamarck/LmGhostButton',
  component: LmGhostButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmGhostButton {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
