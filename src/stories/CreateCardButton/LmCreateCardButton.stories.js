import React from 'react';

import { LmCreateCardButton } from './LmCreateCardButton';

export default {
  title: 'Lamarck/LmCreateCardButton',
  component: LmCreateCardButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmCreateCardButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  primary: true,
  label: 'CREATE A CARD',
};
