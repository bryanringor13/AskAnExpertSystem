import React from 'react';
import { InquiriesResponse } from './InquiriesResponse';

export default {
  title: 'Lamarck/InquiriesResponse',
  component: InquiriesResponse,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InquiriesResponse {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
