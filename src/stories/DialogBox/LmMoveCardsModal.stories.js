import React from "react";
import { LmMoveCardsModal } from "./LmMoveCardsModal";

export default {
  title: "Lamarck/LmMoveCardsModal",
  component: LmMoveCardsModal,
  argTypes: {},
};

const Template = (args) => <LmMoveCardsModal {...args} moveItems={[]} />;

export const MoveCard = Template.bind({});
MoveCard.args = {};
