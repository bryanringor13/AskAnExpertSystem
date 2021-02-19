import React from 'react';

import { LmTextFieldWicon } from './LmTextFieldWicon';


export default {
  title: 'Lamarck/LmTextFieldWicon',
  component: LmTextFieldWicon,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmTextFieldWicon {...args} />;

export const Base = Template.bind({});
Base.args = {
   
};