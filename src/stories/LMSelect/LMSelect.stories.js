import React from "react";
import { LMSelect } from "./LMSelect";

export default {
  title: "Lamarck/LMSelect",
  component: LMSelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const options = [
  { value: "1", text: "text1" },
  { value: "2", text: "text2" },
];

const Template = (args) => (
  <LMSelect items={options} placeholder={"placeholder"} />
);

export const Base = Template.bind({});
Base.args = {
  color: "textSecondary",
  variant: "h5",
};
