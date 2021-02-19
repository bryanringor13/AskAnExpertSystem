import React from 'react';
import { LmDialog } from './LmDialog';

export default {
  title: 'Lamarck/LmDialog',
  component: LmDialog,
  argTypes: {
    
  },
};

const Template = (args) => <LmDialog {...args} />;

export const Base = Template.bind({});
Base.args = {
};
