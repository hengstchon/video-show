import React from "react";
import { Container } from "@material-ui/core";

import Navigation from "./Navigation";
import Content from "./Content";

export default () => {
  return (
    <Container>
      <Navigation />
      <Content />
    </Container>
  );
};
