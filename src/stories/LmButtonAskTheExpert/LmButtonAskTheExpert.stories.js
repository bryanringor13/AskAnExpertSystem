import React from 'react';

import { LmButtonAskTheExpert } from './LmButtonAskTheExpert';

export default {
  title: 'Lamarck/LmButtonAskTheExpert',
  component: LmButtonAskTheExpert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmButtonAskTheExpert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'small',
};
 
