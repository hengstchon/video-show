import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Player from "./Player"

export default () => (
  <main>
    <Switch>
      <Route path="/player/:vid" component={Player} />
      <Route path="/" component={Home} />
    </Switch>
  </main>
)
