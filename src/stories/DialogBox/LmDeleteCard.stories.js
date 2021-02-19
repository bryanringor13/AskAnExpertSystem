import React from "react";
import { LmDeleteCardModal } from "./LmDeleteCard";

export default {
  title: "Lamarck/LmDeleteCardModal",
  component: LmDeleteCardModal,
  argTypes: {},
};

const Template = (args) => <LmDeleteCardModal {...args} Items={[]} />;

export const DeleteCard = Template.bind({});
DeleteCard.args = {};
