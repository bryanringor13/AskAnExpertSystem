
import React from 'react';
import { LmPrevAndNextBar } from './LmPrevAndNextBar';


export default {
  title: 'Lamarck/LmPrevAndNextBar',
  component: LmPrevAndNextBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmPrevAndNextBar {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Here',
   
};
