import React from 'react';
import { AuthorInfoCard } from './AuthorInfoCard';

export default {
  title: 'Lamarck/AuthorInfoCard',
  component: AuthorInfoCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AuthorInfoCard {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
