import React from 'react';
import { LinkAnswerCard } from './LinkAnswerCard';

export default {
  title: 'Lamarck/LinkAnswerCard',
  component: LinkAnswerCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LinkAnswerCard {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};
