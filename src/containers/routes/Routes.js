import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../../pages/homePage";
import InvalidUrl from "../../pages/invalidUrl";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={InvalidUrl} />
    </Switch>
  );
};

export default Routes;
