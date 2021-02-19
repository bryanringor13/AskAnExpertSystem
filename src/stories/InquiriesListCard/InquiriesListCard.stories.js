import React from 'react';
import { InquiriesListCard } from './InquiriesListCard';

export default {
  title: 'Lamarck/InquiriesListCard',
  component: InquiriesListCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InquiriesListCard {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};