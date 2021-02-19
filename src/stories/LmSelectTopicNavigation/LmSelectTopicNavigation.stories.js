import React from 'react';
import { LmSelectTopicNavigation } from './LmSelectTopicNavigation';

export default {
  title: 'Lamarck/LmSelectTopicNavigation',
  component: LmSelectTopicNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSelectTopicNavigation {...args} />;

export const SelectTopic = Template.bind({});
SelectTopic.args = {
    variant: "contained",
    label:  '',
   
};