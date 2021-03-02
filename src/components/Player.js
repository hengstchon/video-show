import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ReactHlsPlayer from 'react-hls-player'
import { getUrl } from '../utils'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  player: {
    maxHeight: `85vh`,
    marginTop: `20px`,
  },
  link: {
    fontSize: `20px`,
    color: `inherit`,
    marginRight: `10px`,
    textDecoration: `none`,
  },
}))

export default () => {
  const { vid } = useParams()
  const { url, oriUrl } = getUrl(vid)
  const classes = useStyles()
  const videoInfos = JSON.parse(localStorage.getItem('videoInfos'))
  const title = videoInfos.find(i => i.vid === parseInt(vid)).title

  return (
    <>
      <div className={classes.toolbar} />
      <h2>{title}</h2>
      <div>
        <a className={classes.link} href={`mpv://${oriUrl}`}>
          mpv
        </a>
        <a className={classes.link} href={`nplayer-${oriUrl}`}>
          nplayer
        </a>
        <a
          className={classes.link}
          href={`intent:${oriUrl}#Intent;package=com.mxtech.videoplayer.pro;S.title=${title};end`}
        >
          mxplayer
        </a>
        <a className={classes.link} href={`vlc://${oriUrl}`}>
          vlc
        </a>
      </div>
      <ReactHlsPlayer
        url={url}
        autoplay={false}
        controls={true}
        className={classes.player}
      />
    </>
  )
}
