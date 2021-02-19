import React from 'react';
import { LmSingleAccordion } from './LmSingleAccordion';

export default {
  title: 'Lamarck/LmSingleAccordion',
  component: LmSingleAccordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSingleAccordion {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
