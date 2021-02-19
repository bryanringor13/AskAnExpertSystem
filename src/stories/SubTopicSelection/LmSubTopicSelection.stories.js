import React from 'react';
import { LmSubTopicSelection } from './LmSubTopicSelection';

export default {
  title: 'Lamarck/LmSubTopicSelection',
  component: LmSubTopicSelection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSubTopicSelection {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
