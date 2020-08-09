import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import QierPlayer from "qier-player";
import { getSrc } from "../utils";

export default () => {
  const videoInfos = JSON.parse(localStorage.getItem("videoInfos"));
  const id = useParams().id;
  const info = videoInfos.find(info => info.id === parseInt(id));
  const { title, vhref } = info;
  const [src, setSrc] = useState("");

  useEffect(() => {
    getSrc(vhref).then(src => {
      setSrc(src);
    });
  }, [vhref]);

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
