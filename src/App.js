import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import NotFound from "./components/NotFound";

export default () => {
  return (
    <Switch>
      <Route exact path={`/`}>
        <Redirect to="/page/1" />
      </Route>
      <Route path={`/page/:page/video/:id`} component={VideoPage} />
      <Route path={`/page/:page`} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};
