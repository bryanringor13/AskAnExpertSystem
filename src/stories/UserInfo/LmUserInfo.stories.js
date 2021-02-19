import React from 'react';

import { LmUserInfo } from './LmUserInfo';

export default {
  title: 'Lamarck/LmUserInfo',
  component: LmUserInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmUserInfo {...args} />;

export const Base1 = Template.bind({});
Base1.args = {
  alt: 'Avatar',
  chars1: 'Billy Bo',
  updates: 'updated few seconds ago',
  subtitle: 'Adventurer',
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
};

