import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getSrc } from "../utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: 270,
    height: 240
  },
  media: {
    height: 140,
    backgroundSize: "contain",
    backgroundColor: "black"
  },
  time: {
    position: "absolute",
    marginTop: -23,
    marginLeft: 230,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
    color: "#ddd",
    backgroundColor: "#333"
  }
}));

export default ({ cat, page, info }) => {
  const { title, addTime, views, favorites, duration, imgsrc, vhref } = info;
  const classes = useStyles();

  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    getSrc(vhref).then(src => {
      setVideoSrc(src);
    });
  }, [vhref]);

  const media = (
    <>
      <CardMedia className={classes.media} image={imgsrc} />
      <Typography className={classes.time} variant="caption">
        {duration}
      </Typography>
    </>
  );

  return (
    <Card className={classes.root}>
      {videoSrc ? (
        <Link href={videoSrc} target="_blank" rel="noopener">
          {media}
        </Link>
      ) : (
        <>{media}</>
      )}

      <CardContent style={{ paddingTop: 8 }}>
        <Typography
          noWrap
          gutterBottom
          variant="body2"
          title={title}
          color="secondary"
        >
          {title}
        </Typography>
        <Typography variant="caption">
          <div>添加时间: {addTime}</div>
          <div>查看: {views}</div>
          <div>收藏: {favorites}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};

