import React from 'react';
import { PrevAndNextCards } from './PrevAndNextCards';


export default {
  title: 'Lamarck/PrevAndNextCards',
  component: PrevAndNextCards,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PrevAndNextCards {...args} />;

export const Base = Template.bind({});
Base.args = {
    variant: "contained",
    label:  'Here',
   
};
             