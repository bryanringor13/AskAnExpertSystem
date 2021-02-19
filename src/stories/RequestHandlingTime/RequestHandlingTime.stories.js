import React from 'react';
import { RequestHandlingTime } from './RequestHandlingTime';

export default {
  title: 'Lamarck/RequestHandlingTime',
  component: RequestHandlingTime,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <RequestHandlingTime {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
