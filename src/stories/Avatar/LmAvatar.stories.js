import React from 'react';

import { LmAvatar } from './LmAvatar';

export default {
  title: 'Lamarck/LmAvatar',
  component: LmAvatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmAvatar {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  alt: 'Image Label',
  src: 'https://www.thispersondoesnotexist.com/image',
  size: 'medium',

};

export const Square = Template.bind({});
Square.args = {
  alt: 'Image Label',
  src: 'https://www.thispersondoesnotexist.com/image',
  size: 'medium',
  variant: 'square'

};
