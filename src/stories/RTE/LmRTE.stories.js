import React from 'react';
import { LmRTE } from './LmRTE';

export default {
  title: 'Lamarck/LmRTE',
  component: LmRTE,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmRTE {...args} />;

export const Base = Template.bind({});
Base.args = {
    color: "textSecondary",
    variant:  'h5',
   
};
