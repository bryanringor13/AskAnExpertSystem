import React from "react";
import { HeaderIcon } from "./HeaderIcon";

export default {
  title: "Lamarck/HeaderIcon",
  component: HeaderIcon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <HeaderIcon create={true} share={true} file={true} more={true} {...args} />
);

export const Base = Template.bind({});
Base.args = {
  variant: "contained",
  label: "Move",
};
