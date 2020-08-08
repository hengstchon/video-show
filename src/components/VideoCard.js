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
  const { id, title, add_time, views, favorites, duration, img_src } = info;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/video/${id}`}>
        <CardMedia className={classes.media} image={img_src} title={title} />
        <Typography className={classes.time}>{duration}</Typography>
      </Link>

      <CardContent style={{ paddingTop: 8 }}>
        <Typography
          gutterBottom
          noWrap
          variant="body2"
          className={classes.title}
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          className={classes.info}
          color="textSecondary"
        >
          <div>添加时间: {add_time}</div>
          <div>查看: {views}</div>
          <div>收藏: {favorites}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};
