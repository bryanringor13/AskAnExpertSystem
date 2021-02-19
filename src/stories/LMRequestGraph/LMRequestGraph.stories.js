import React from "react";
import { LMRequestGraph } from "./LMRequestGraph";

export default {
  title: "Lamarck/LMRequestGraph",
  component: LMRequestGraph,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LMRequestGraph {...args} />;

export const Base = Template.bind({});
Base.args = {
  variant: "contained",
  label: "Move",
};
