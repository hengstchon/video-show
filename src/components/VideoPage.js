import React from "react";
import { Container, Typography } from "@material-ui/core";
import QierPlayer from "qier-player";

export default ({ info }) => {
  const { title, video_src } = info;
  return (
    <Container maxWidth="lg" style={{ height: `100vh` }}>
      <Typography style={{ marginTop: "20px" }}>{title}</Typography>
      <br />
      <QierPlayer width={`100%`} height={`80%`} srcOrigin={video_src} />
    </Container>
  );
};
