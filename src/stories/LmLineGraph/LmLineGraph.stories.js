import React from 'react';
import { LmLineGraph } from './LmLineGraph';

export default {
  title: 'Lamarck/LmLineGraph',
  component: LmLineGraph,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmLineGraph {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
