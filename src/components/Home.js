import React from "react";
import { Container } from "@material-ui/core";

import Navigation from "./Navigation";
import Content from "./Content";
import TopJumper from "./TopJumper";

export default () => {
  return (
    <Container>
      <Navigation />
      <Content />
      <TopJumper />
    </Container>
  );
};
