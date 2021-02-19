import React from 'react';
import { LmTopicNavigations } from './LmTopicNavigations';

export default {
  title: 'Lamarck/LmTopicNavigations',
  component: LmTopicNavigations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTopicNavigations {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};

