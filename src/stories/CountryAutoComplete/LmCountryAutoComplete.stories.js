import React from 'react';

import {  LmCountryAutoComplete } from './LmCountryAutoComplete';

export default {
  title: 'Lamarck/LmCountryAutoComplete',
  component: LmCountryAutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmCountryAutoComplete {...args} />;

export const CountrySearch = Template.bind({});
CountrySearch.args = {
    disabled: false,
    label:  'Select a Country',
   
};

