import React from 'react';
import { LmSingleAccordion3 } from './LmSingleAccordion3';

export default {
  title: 'Lamarck/LmSingleAccordion3',
  component: LmSingleAccordion3,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSingleAccordion3 {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
