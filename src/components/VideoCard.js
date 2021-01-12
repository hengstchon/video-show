import React from "react"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: 270,
    height: 240
  },
  media: {
    height: 140,
    backgroundSize: "contain",
    backgroundColor: "black",
    "&:hover": {
      cursor: "pointer"
    }
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
}))

export default ({ cat, page, info }) => {
  const { title, author, addTime, views, favorites, duration, imgsrc, vid } = info
  const classes = useStyles()

  const media = (
    <>
      <CardMedia className={classes.media} image={imgsrc} />
      <Typography className={classes.time} variant="caption">
        {duration}
      </Typography>
    </>
  )

  return (
    <Card className={classes.root}>
      <Link to={`/player/${vid}`} target="_blank">
        {media}
      </Link>

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
          <div>作者: {author}</div>
          <div>查看: {views}  收藏: {favorites}</div>
        </Typography>
      </CardContent>
    </Card>
  )
}
