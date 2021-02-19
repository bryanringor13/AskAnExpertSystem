import React from "react";
import { Container } from "reactstrap";
import ForgotPassword from "./components/ForgotPassword";

const defaults = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <ForgotPassword />
      </Container>
    </React.Fragment>
  );
};

export default defaults;
