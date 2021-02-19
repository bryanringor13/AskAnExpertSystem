import React from 'react';
import { LmSearchView } from './LmSearchView';

export default {
  title: 'Lamarck/LmSearchView',
  component: LmSearchView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSearchView {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
