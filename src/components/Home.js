import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Pagination from "./Pagination";
import VideoCard from "./VideoCard";
import { getInfos, getTotalPage } from "../utils";

export default () => {
  const page = useParams().page || 1;
  let url = `http://91porn.com/v.php?category=tf&viewtype=basic&page=${page}`;

  const [videoInfos, setVideoInfos] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // get all video infos in a page
    getInfos(url).then(d => {
      setVideoInfos(d);
      localStorage.setItem("videoInfos", JSON.stringify(d));
    });
    // get the max page number for pagination
    getTotalPage(url).then(d => setTotalPage(d));
  }, [url]);

  return (
    <Container>
      <Grid container justify="space-evenly" spacing={3}>
        {videoInfos.map(info => (
          <Grid item key={info.id}>
            <VideoCard info={info} />
          </Grid>
        ))}
      </Grid>

      <Pagination currentPage={parseInt(page)} totalPage={totalPage} />
    </Container>
  );
};
