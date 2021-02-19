import React from 'react';
import { SideBarAuthorInfo } from './SideBarAuthorInfo';

export default {
  title: 'Lamarck/SideBarAuthorInfo',
  component: SideBarAuthorInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SideBarAuthorInfo {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Move',
   
};