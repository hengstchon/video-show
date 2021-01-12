import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Player from "./Player"

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/player/:vid" component={Player} />
    </Switch>
  </main>
)
