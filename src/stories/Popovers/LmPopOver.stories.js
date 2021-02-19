import React from 'react';

import {  LmPopOver} from './LmPopOver';

export default {
  title: 'Lamarck/LmPopOver',
  component: LmPopOver,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmPopOver {...args} />;

export const Example = Template.bind({});
Example.args = {
    color: "secondary",
    count:  '20',
   
};
