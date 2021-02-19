import React from 'react';
import { LmMultipleSelectChip } from './LmMultipleSelectChip';

export default {
  title: 'Lamarck/LmMultipleSelectChip',
  component: LmMultipleSelectChip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmMultipleSelectChip {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};



