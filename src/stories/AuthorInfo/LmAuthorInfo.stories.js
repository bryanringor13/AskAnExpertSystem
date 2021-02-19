import React from 'react';

import { LmAuthorInfo } from './LmAuthorInfo';

export default {
  title: 'Lamarck/LmAuthorInfo',
  component: LmAuthorInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmAuthorInfo {...args} />;

export const Base1 = Template.bind({});
Base1.args = {
  alt: 'Avatar',
  chars1: 'Billy Bo',
  subtitle: 'Away...',
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
};

