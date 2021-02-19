import React from "react";

import { LmButtonDropdown } from "./LmButtonDropdown";

export default {
  title: "Lamarck/LmButtonDropdown",
  component: LmButtonDropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <LmButtonDropdown
    label1={"PUBLISH AND CLOSE REQUEST"}
    label2={"PUBLISH AS DRAFT"}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "PUBLISH AND CLOSE REQUEST",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Sign Up",
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  primary: true,
  label: "ADD INVISIBLE QUESTION",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};
