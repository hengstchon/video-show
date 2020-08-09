import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    position: `absolute`,
    marginTop: -23,
    marginLeft: 230,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
    color: `#ddd`,
    backgroundColor: `#333`
  },
  title: {
    "&:hover, &:focus": {
      whiteSpace: `normal`
    }
  }
});

export default ({ info }) => {
  const { id, title, addTime, views, favorites, duration, imgsrc } = info;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/page/${useParams().page}/video/${id}`}>
        <CardMedia className={classes.media} image={imgsrc} title={title} />
        <Typography className={classes.time} variant="caption">
          {duration}
        </Typography>
      </Link>

      <CardContent style={{ paddingTop: 8 }}>
        <Typography
          noWrap
          gutterBottom
          variant="body2"
          color="textPrimary"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.info}
        >
          <div>添加时间: {addTime}</div>
          <div>查看: {views}</div>
          <div>收藏: {favorites}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};
