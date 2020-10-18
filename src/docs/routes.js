import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home';
import GettingStarted from './pages/getting-started';
import DocsTemplate from './templates/docs';
import ButtonPage from './pages/components/ButtonPage';
import NavbarPage from './pages/components/NavbarPage';
import CardPage from './pages/components/CardPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <DocsTemplate>
      <Route path="/docs/getting-started/" component={GettingStarted} />
      <Route path="/docs/components/button/" component={ButtonPage} />
      <Route path="/docs/components/card/" component={CardPage} />
      <Route path="/docs/components/navbar/" component={NavbarPage} />
    </DocsTemplate>
  </Switch>
);

export default Routes;
