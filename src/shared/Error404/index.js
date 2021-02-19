import React from "react";
import { Container } from "reactstrap";
import Error404 from "./components/Error404";

const Default = () => {
  return (
    <React.Fragment>
      <Container>
        <Error404 />
      </Container>
    </React.Fragment>
  );
};

export default Default;
