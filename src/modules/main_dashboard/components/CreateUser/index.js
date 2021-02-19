import React from "react";
import { Container } from "reactstrap";
import CreateUser from "./components/CreateUser";

const Default = () => {
  return (
    <React.Fragment>
      <Container>
        <CreateUser />
      </Container>
    </React.Fragment>
  );
};

export default Default;
