import React from "react";
import { PercentageCircularProgress } from "./PercentageCircularProgress";

export default {
  title: "Lamarck/PercentageCircularProgress",
  component: PercentageCircularProgress,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <PercentageCircularProgress />;

export const Base = Template.bind({});
Base.args = {
  variant: "contained",
  label: "Move",
};
