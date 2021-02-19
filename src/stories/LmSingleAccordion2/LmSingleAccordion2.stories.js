import React from 'react';
import { LmSingleAccordion2 } from './LmSingleAccordion2';

export default {
  title: 'Lamarck/LmSingleAccordion2',
  component: LmSingleAccordion2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSingleAccordion2 {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
