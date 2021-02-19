import React from 'react';

import {  LMAssignSME } from './LMAssignSME';
export default {
  title: 'Lamarck/LMAssignSME',
  component: LMAssignSME,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LMAssignSME {...args} />;

export const AssignSME = Template.bind({});
AssignSME.args = {
    disabled: false,
    label:  'Ask a Question',
   
};
