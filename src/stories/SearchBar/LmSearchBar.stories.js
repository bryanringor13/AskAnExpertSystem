import React from 'react';

import {  LmSearchBar } from './LmSearchBar';

export default {
  title: 'Lamarck/LmSearchBar',
  component: LmSearchBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSearchBar {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
    disabled: false,
    label:  'Ask a Question',
   
};
