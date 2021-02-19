import React from 'react';
import { PreviousAndNextBar } from './PreviousAndNextBar';


export default {
  title: 'Lamarck/PreviousAndNextBar',
  component: PreviousAndNextBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PreviousAndNextBar {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Here',
   
};
             