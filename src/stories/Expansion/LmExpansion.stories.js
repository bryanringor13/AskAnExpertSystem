import React from 'react';

import { LmExpansion } from './LmExpansion';


export default {
  title: 'Lamarck/LmExpansion',
  component: LmExpansion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LmExpansion {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {
  expanded: true,
//   onChange: onChange,
  square: true,
};

// export const Max1 = Template.bind({});
// Max1.args = {
//   max: 10,
//   color: 'primary',
//   badgeContent: 20,
// };

// export const Dot = Template.bind({});
// Dot.args = {
//   badgeContent: 10,
//   color: 'secondary',
//   variant: 'dot',
// };