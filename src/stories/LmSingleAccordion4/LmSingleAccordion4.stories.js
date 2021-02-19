import React from 'react';
import { LmSingleAccordion4 } from './LmSingleAccordion4';

export default {
  title: 'Lamarck/LmSingleAccordion4',
  component: LmSingleAccordion4,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSingleAccordion4 {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
