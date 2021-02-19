import React from 'react';

import {  LmRequestsPopOver} from './LmRequestsPopOver';

export default {
  title: 'Lamarck/LmRequestsPopOver',
  component: LmRequestsPopOver,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmRequestsPopOver {...args} />;

export const MyRequest = Template.bind({});
MyRequest.args = {
    color: "secondary",
    count:  '20',
   
};
