import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Pagination from "./Pagination";
import VideoCard from "./VideoCard";
import { getInfos, getTotalPage } from "../utils";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

export default () => {
  const loc = useLocation();
  const cat = loc.pathname.slice(1) || "hot";
  const query = new URLSearchParams(loc.search);
  const page = query.get("page") || "1";
  let url = `http://91porn.com/v.php?category=${cat}&viewtype=basic&page=${page}`;

  const [videoInfos, setVideoInfos] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    // get all video infos in a page
    getInfos(url).then(d => {
      localStorage.setItem("videoInfos", JSON.stringify(d));
      setTotalPage(getTotalPage());
      setVideoInfos(d);
    });
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <Paper variant="outlined" style={{ padding: `1em 0` }}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={3}>
          {videoInfos.map(info => (
            <Grid item key={info.id}>
              <VideoCard cat={cat} page={page} info={info} />
            </Grid>
          ))}
        </Grid>

        <Pagination
          currentPage={parseInt(page)}
          totalPage={totalPage}
          cat={cat}
        />
      </Paper>
    </>
  );
};
