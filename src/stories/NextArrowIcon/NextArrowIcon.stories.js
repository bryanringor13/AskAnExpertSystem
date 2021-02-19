import React from 'react';
import { NextArrowIcon } from './NextArrowIcon';

export default {
  title: 'Lamarck/NextArrowIcon',
  component: NextArrowIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NextArrowIcon {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
