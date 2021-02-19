import React from "react";

import { LMModal } from "./LMModal";

export default {
  title: "Lamarck/LMModal",
  component: LMModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <LMModal
    openModal={true}
    title={"test"}
    body={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    {...args}
  />
);

export const Modal = Template.bind({});
Modal.args = {
  disabled: false,
  label: "Ask a Question",
};
