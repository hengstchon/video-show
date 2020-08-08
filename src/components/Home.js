import React from "react";
import { Container, Grid } from "@material-ui/core";

import Pagination from "./Pagination";
import VideoCard from "./VideoCard";

export default ({ data, currentPage }) => {
  const postsPerPage = 12;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentVideos = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPage = Math.ceil(data.length / postsPerPage);

  return (
    <Container>
      <Grid container justify="center">
        <h3>共 {data.length} 部</h3>
      </Grid>

      <Grid container justify="space-evenly" spacing={3}>
        {currentVideos.map(info => (
          <Grid item key={info.id}>
            <VideoCard info={info} />
          </Grid>
        ))}
      </Grid>

      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </Container>
  );
};
