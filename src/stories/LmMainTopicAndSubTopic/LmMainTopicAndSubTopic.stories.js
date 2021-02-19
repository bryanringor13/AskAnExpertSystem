import React from 'react';
import { LmMainTopicAndSubTopic } from './LmMainTopicAndSubTopic';

export default {
  title: 'Lamarck/LmMainTopicAndSubTopic',
  component: LmMainTopicAndSubTopic,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmMainTopicAndSubTopic {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};