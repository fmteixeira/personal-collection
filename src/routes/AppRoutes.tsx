import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { NewsArticle } from "@/features/NewsArticle";
import { routes } from "@/routes/paths";

export const AppRoutes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path={routes.news.route}>
        <NewsArticle exampleProp="News Article" />
      </Route>
    </Switch>
  </Router>
);
