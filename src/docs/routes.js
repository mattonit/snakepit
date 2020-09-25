import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home';
import GettingStarted from './pages/getting-started';
import DocsTemplate from './templates/docs';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <DocsTemplate>
      <Route path="/docs/getting-started/" component={GettingStarted} />
    </DocsTemplate>
  </Switch>
);

export default Routes;
