import React from 'react';
import { LmDiscardModal } from './LmDiscardModal';

export default {
  title: 'Lamarck/LmDiscardModal',
  component: LmDiscardModal,
  argTypes: {
    
  },
};

const Template = (args) => <LmDiscardModal {...args} />;

export const Discard = Template.bind({});
Discard.args = {
};
