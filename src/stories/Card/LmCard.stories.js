import React from 'react';
import { LmCard } from './LmCard';

export default {
  title: 'Lamarck/LmCard',
  component: LmCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmCard {...args} />;

export const Base = Template.bind({});
Base.args = {
    color: "textSecondary",
    variant:  'h5',
   
};
