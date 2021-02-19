import React from 'react';

import {  LmAutocomplete } from './LmAutocomplete';

export default {
  title: 'Lamarck/LmAutocomplete',
  component: LmAutocomplete,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmAutocomplete {...args} />;

export const TopicsExample = Template.bind({});
TopicsExample.args = {
    disabled: false,
    label:  'Click here',
   
};

