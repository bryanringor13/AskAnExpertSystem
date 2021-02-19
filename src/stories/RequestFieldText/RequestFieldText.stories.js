import React from 'react';
import { RequestFieldText } from './RequestFieldText';

export default {
  title: 'Lamarck/RequestFieldText',
  component: RequestFieldText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <RequestFieldText {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};