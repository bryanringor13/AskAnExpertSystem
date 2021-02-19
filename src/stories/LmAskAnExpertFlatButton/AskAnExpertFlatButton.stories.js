import React from 'react';
import { AskAnExpertFlatButton } from './AskAnExpertFlatButton';

export default {
  title: 'Lamarck/AskAnExpertFlatButton',
  component: AskAnExpertFlatButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AskAnExpertFlatButton {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
