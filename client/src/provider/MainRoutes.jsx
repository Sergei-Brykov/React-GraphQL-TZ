import { routes } from "../pages/router";
import { Route } from "react-router-dom";
import React from "react";

export function MainRoutes() {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
