import React from "react";

import { LMSnackBar } from "./LMSnackBar";

export default {
  title: "Lamarck/LMSnackBar",
  component: LMSnackBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <LMSnackBar message="Note archived" severity="info" state={false} />
);

export const Example = Template.bind({});
Example.args = {
  color: "secondary",
  count: "20",
};
