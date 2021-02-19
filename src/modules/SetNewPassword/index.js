import React from "react";
import { Container } from "reactstrap";
import SetNewPassword from "./components/SetNewPassword";

const defaults = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <SetNewPassword />
      </Container>
    </React.Fragment>
  );
};

export default defaults;
