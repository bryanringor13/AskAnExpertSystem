import React from 'react';

import {  LmSearch } from './LmSearch';

export default {
  title: 'Lamarck/LmSearch',
  component: LmSearch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSearch {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
    disabled: false,
    label:  'Ask a Question',
   
};
