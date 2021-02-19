import React from 'react';

import { Button } from './testButton';

export default {
  title: 'Example/testButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Text',
};
