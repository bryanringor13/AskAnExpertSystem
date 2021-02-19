import React from "react";

import { LMMenu } from "./LMMenu";

export default {
  title: "Lamarck/LMMenu",
  component: LMMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LMMenu {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: "secondary",
  count: "20",
};
