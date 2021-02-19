import React from 'react';
import { LmSwitch } from './LmSwitch';

export default {
  title: 'Lamarck/LmSwitch',
  component: LmSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSwitch {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
