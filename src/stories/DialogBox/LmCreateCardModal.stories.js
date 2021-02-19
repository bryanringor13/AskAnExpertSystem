import React from 'react';
import { LmCreateCardModal } from './LmCreateCardModal';

export default {
  title: 'Lamarck/LmCreateCardModal',
  component: LmCreateCardModal,
  argTypes: {
    
  },
};

const Template = (args) => <LmCreateCardModal {...args} />;

export const ConfirmCard = Template.bind({});
ConfirmCard.args = {
};
