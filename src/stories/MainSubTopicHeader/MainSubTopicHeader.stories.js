import React from 'react';
import { MainSubTopicHeader } from './MainSubTopicHeader';

export default {
  title: 'Lamarck/MainSubTopicHeader',
  component: MainSubTopicHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MainSubTopicHeader {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};