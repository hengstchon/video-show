import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import QierPlayer from "qier-player";
import { getSrc } from "../utils";

export default ({ info }) => {
  const { title, v_href } = info;
  const [src, setSrc] = useState("");

  useEffect(() => {
    getSrc(v_href).then(src => {
      setSrc(src);
    });
  }, [v_href]);

  return (
    <Container maxWidth="lg" style={{ height: `100vh` }}>
      <Typography style={{ marginTop: "20px" }}>{title}</Typography>
      <br />
      {src && <QierPlayer width={`100%`} height={`80%`} srcOrigin={src} />}
      <br />
      <Grid container justify="flex-end">
        <a href={src} download style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" component="span">
            Download
          </Button>
        </a>
      </Grid>
    </Container>
  );
};
