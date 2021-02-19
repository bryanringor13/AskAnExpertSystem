import React from 'react';

import {  LmPagination} from './LmPagination';

export default {
  title: 'Lamarck/LmPagination',
  component: LmPagination,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmPagination {...args} />;

export const Example = Template.bind({});
Example.args = {
    color: "secondary",
    count:  '20',
   
};
