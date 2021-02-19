import React from 'react';

import {  LmSearchBarQuestion } from './LmSearchBarQuestion';
export default {
  title: 'Lamarck/LmSearchBarQuestion',
  component: LmSearchBarQuestion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmSearchBarQuestion {...args} />;

export const SearchBarQuestion = Template.bind({});
SearchBarQuestion.args = {
    disabled: false,
    label:  'Ask a Question',
   
};
