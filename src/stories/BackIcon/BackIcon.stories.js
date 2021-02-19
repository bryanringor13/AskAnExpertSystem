import React from 'react';
import { BackIcon } from './BackIcon';

export default {
  title: 'Lamarck/BackIcon',
  component: BackIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <BackIcon {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
