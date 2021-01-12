import React from "react"
import { useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import ReactHlsPlayer from "react-hls-player"
import { getUrl } from "../utils"

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  player: {
    maxHeight: `85vh`
  }
}))

export default () => {
  const { vid } = useParams()
  const url = getUrl(vid)
  const classes = useStyles()
  const videoInfos = JSON.parse(localStorage.getItem("videoInfos"))
  const title = videoInfos.find(i => i.vid === parseInt(vid)).title

  return (
    <>
      <div className={classes.toolbar} />
      <h2>{title}</h2>
      <ReactHlsPlayer
        url={url}
        autoplay={false}
        controls={true}
        className={classes.player}
      />
    </>
  )
}
