import React from 'react';
import { LmActionBars } from './LmActionBars';

export default {
  title: 'Lamarck/LmActionBars',
  component: LmActionBars,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmActionBars {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
    size: "small",
    selectedCards: [1]
   
};
