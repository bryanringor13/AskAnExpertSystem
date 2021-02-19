import React from 'react';
import { LmSuccessAlert } from './LmSuccessAlert';

export default {
  title: 'Lamarck/LmSuccessAlert',
  component: LmSuccessAlert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSuccessAlert {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};