import React from 'react';

import {  LmTopicsSubTopics } from './LmTopicsSubTopics';

export default {
  title: 'Lamarck/LmTopicsSubTopics',
  component: LmTopicsSubTopics,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTopicsSubTopics {...args} />;

export const TopicAndSubtopic = Template.bind({});
TopicAndSubtopic.args = {
    variant: "contained",
    label:  'Move',
   
};