import React from 'react';
import { LmEditModal } from './LmEditModal';

export default {
  title: 'Lamarck/LmEditModal',
  component: LmEditModal,
  argTypes: {
    
  },
};

const Template = (args) => <LmEditModal {...args} />;

export const ConfirmCard = Template.bind({});
ConfirmCard.args = {
};
