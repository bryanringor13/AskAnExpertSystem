import React from 'react';

import {  LmSelectTopicButton } from './LmSelectTopicButton';

export default {
  title: 'Lamarck/LmSelectTopicButton',
  component: LmSelectTopicButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSelectTopicButton {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Select Topic',
   size: 'small'
};
