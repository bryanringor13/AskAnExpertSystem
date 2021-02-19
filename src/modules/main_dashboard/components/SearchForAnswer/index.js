import React from "react";
import { Container } from "reactstrap";
import SearchForAnswer from "./components/RequestForReview";

const Default = () => {
  return (
    <React.Fragment>
      <Container>
        <SearchForAnswer />
      </Container>
    </React.Fragment>
  );
};

export default Default;
