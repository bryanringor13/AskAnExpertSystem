import React from 'react';
import { LmArtificialProcess } from './LmArtificialProcess';

export default {
  title: 'Lamarck/LmArtificialProcess',
  component: LmArtificialProcess,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmArtificialProcess {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};