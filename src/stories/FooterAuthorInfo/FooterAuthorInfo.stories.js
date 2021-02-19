import React from 'react';
import { FooterAuthorInfo } from './FooterAuthorInfo';

export default {
  title: 'Lamarck/FooterAuthorInfo',
  component: FooterAuthorInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <FooterAuthorInfo {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};