import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import QierPlayer from "qier-player";
import { getSrc } from "../utils";

export default () => {
  const videoInfos = JSON.parse(localStorage.getItem("videoInfos"));
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const id = query.get("id");
  const info = videoInfos.find(info => info.id === parseInt(id));
  const { title, vhref } = info;
  const [src, setSrc] = useState("");

  useEffect(() => {
    getSrc(vhref).then(src => {
      setSrc(src);
    });
  }, [vhref]);

  return (
    <Paper variant="outlined" style={{ padding: `1em 0` }}>
      <Typography>{title}</Typography>

      <br />
      {src && <QierPlayer width={`100%`} height={`70vh`} srcOrigin={src} />}

      <br />
      <Grid container justify="flex-end">
        <a href={src} download style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" component="span">
            Download
          </Button>
        </a>
      </Grid>
    </Paper>
  );
};
