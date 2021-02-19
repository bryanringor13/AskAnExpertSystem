import React from 'react';
import { SurveySection } from './SurveySection';

export default {
  title: 'Lamarck/SurveySection',
  component: SurveySection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SurveySection {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
