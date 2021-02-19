import React from "react";
import { LMRequestHandlingGraph } from "./LMRequestHandlingGraph";

export default {
  title: "Lamarck/LMRequestHandlingGraph",
  component: LMRequestHandlingGraph,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LMRequestHandlingGraph {...args} />;

export const Base = Template.bind({});
Base.args = {
  variant: "contained",
  label: "Move",
};
