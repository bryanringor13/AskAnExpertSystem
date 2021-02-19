import React from 'react';
import { LmInfoAlert } from './LmInfoAlert';

export default {
  title: 'Lamarck/LmInfoAlert',
  component: LmInfoAlert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmInfoAlert {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};