import React from "react";
import { LMBrainGrowthGraph } from "./LMBrainGrowthGraph";

export default {
  title: "Lamarck/LMBrainGrowthGraph",
  component: LMBrainGrowthGraph,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LMBrainGrowthGraph {...args} />;

export const Base = Template.bind({});
Base.args = {
  variant: "contained",
  label: "Move",
};
