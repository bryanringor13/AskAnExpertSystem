import React from 'react';

import { LmHeaderProfile } from './LmHeaderProfile';

export default {
  title: 'Lamarck/LmHeaderProfile',
  component: LmHeaderProfile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmHeaderProfile {...args} />;

export const Base1 = Template.bind({});
Base1.args = {
  alt: 'Avatar',
  chars1: 'Billy Bo',
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
};

