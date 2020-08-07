import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 270,
    height: 240,
    backgroundColor: `#ddd`
  },
  media: {
    height: 140,
    backgroundSize: `contain`,
    backgroundColor: `black`
  },
  time: {
    fontSize: 12,
    position: `absolute`,
    marginTop: -25,
    marginLeft: 234,
    paddingLeft: 2,
    paddingRight: 2,
    color: `#ddd`,
    backgroundColor: `#333`,
    border: `1px solid #333`,
    borderRadius: 3
  },
  content: {
    paddingTop: 8
  },
  title: {
    whiteSpace: `nowrap`,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    "&:hover, &:focus": {
      whiteSpace: `normal`
    }
  },
  info: {
    color: `#666`
  }
});

export default ({ info }) => {
  const { title, add_time, views, favorites, duration, img_src } = info;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/video/${title}`}>
        <CardMedia
          className={classes.media}
          image={img_src}
          title="Paella dish"
        />
        <Typography className={classes.time}>{duration}</Typography>
      </Link>

      <CardContent className={classes.content}>
        <Typography gutterBottom variant="body2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="caption" className={classes.info}>
          <div>添加时间: {add_time}</div>
          <div>查看: {views}</div>
          <div>收藏: {favorites}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};
