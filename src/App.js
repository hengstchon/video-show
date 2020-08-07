import React from "react";
import { Route } from "react-router-dom";

import data from "./data/data.json";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";

export default () => {
  return (
    <div className="wrapper">
      <Route
        exact={true}
        path={`/`}
        render={() => <Home data={data} currentPage={1} />}
      />
      <Route
        path={`/page/:page`}
        render={({ match }) => (
          <Home data={data} currentPage={parseInt(match.params.page)} />
        )}
      />
      <Route
        path={`/video/:title`}
        render={({ match }) => (
          <VideoPage info={data.find(d => d.title === match.params.title)} />
        )}
      />
    </div>
  );
};
