import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { NewsArticle } from "@/features/NewsArticle";

export const AppRoutes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/news/:slug">
        <NewsArticle exampleProp="News Article" />
      </Route>
    </Switch>
  </Router>
);
