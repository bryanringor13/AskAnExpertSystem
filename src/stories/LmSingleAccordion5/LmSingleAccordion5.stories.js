import React from 'react';
import { LmSingleAccordion5 } from './LmSingleAccordion5';

export default {
  title: 'Lamarck/LmSingleAccordion5',
  component: LmSingleAccordion5,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSingleAccordion5 {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
