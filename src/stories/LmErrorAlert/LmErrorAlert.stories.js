import React from 'react';
import { LmErrorAlert } from './LmErrorAlert';

export default {
  title: 'Lamarck/LmErrorAlert',
  component: LmErrorAlert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmErrorAlert {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};