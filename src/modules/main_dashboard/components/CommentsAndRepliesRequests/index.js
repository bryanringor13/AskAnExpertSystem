import React from "react";
import { Container } from "reactstrap";
import CommentsAndRepliesRequests from "./components/CommentsAndRepliesRequests";

const Default = () => {
  return (
    <React.Fragment>
      <Container>
        <CommentsAndRepliesRequests />
      </Container>
    </React.Fragment>
  );
};

export default Default;
