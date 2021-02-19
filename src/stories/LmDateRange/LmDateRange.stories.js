import React from 'react';
import { LmDateRange } from './LmDateRange';

export default {
  title: 'Lamarck/LmDateRange',
  component: LmDateRange,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmDateRange {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
