import React from 'react';
import { CardView } from './CardView';

export default {
  title: 'Lamarck/CardView',
  component: CardView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CardView {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
