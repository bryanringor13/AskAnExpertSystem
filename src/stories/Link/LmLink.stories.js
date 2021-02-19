import React from 'react';

import { LmLink } from './LmLink';

export default {
  title: 'Lamarck/LmLink',
  component: LmLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmLink {...args} />;

export const Link = Template.bind({});
Link.args = {
  label: 'Forgot your password',
};