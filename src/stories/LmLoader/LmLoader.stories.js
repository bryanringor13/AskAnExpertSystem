import React from 'react';
import { LmLoader } from './LmLoader';

export default {
  title: 'Lamarck/LmLoader',
  component: LmLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmLoader {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
