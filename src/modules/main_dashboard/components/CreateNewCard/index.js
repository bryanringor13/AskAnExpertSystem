import React from "react";
import { Container } from "reactstrap";
import CreateNewCard from "./components/CreateNewCard";

const Default = () => {
  return (
    <React.Fragment>
      <Container>
        <CreateNewCard />
      </Container>
    </React.Fragment>
  );
};

export default CreateNewCard;
