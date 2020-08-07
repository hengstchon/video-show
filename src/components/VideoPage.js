import React from "react";
import QierPlayer from "qier-player";

export default ({ info }) => {
  const { title, video_src } = info;
  return (
    <div>
      <div>Title: {title}</div>
      <div>{video_src}</div>
      <br />
      <QierPlayer width={`100%`} height={`800px`} srcOrigin={video_src} />
    </div>
  );
};
