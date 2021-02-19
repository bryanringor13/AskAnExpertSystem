import React from 'react';
import { LmSubTopicNavigations } from './LmSubTopicNavigations';

export default {
  title: 'Lamarck/LmSubTopicNavigations',
  component: LmSubTopicNavigations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSubTopicNavigations {...args} />;

export const SubTopic = Template.bind({});
SubTopic.args = {
    variant: "contained",
    label:  '',
   
};