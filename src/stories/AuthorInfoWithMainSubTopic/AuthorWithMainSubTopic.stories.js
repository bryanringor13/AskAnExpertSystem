import React from 'react';
import { AuthorWithMainSubTopic } from './AuthorWithMainSubTopic';

export default {
  title: 'Lamarck/AuthorWithMainSubTopic',
  component: AuthorWithMainSubTopic,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AuthorWithMainSubTopic {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};