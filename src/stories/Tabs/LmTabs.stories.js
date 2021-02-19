import React from "react";

import { LmTabs } from "./LmTabs";

export default {
  title: "Lamarck/LmTabs",
  component: LmTabs,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const tabs = [
  {
    label: "RELATED",
    hasIcon: false,
    content: [{ value: "test1" }, { value: "test2" }],
  },
  {
    label: "REQUEST",
    hasIcon: true,
    content: [
      {
        value: "test3",
        user: "First, Last Name",
        salutation: "SME user job title",
      },
      {
        value: "test4",
        user: "First, Last Name",
        salutation: "SME user job title",
      },
    ],
  },
];
const Template = (args) => <LmTabs tabs={tabs} badgeContent={4} />;

export const Base = Template.bind({});
Base.args = {};
