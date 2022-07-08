import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Resume from './container/resume';
import Root from './container/root';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      <Redirect to="/" />
    </HashRouter>
  );
};

export default Router;
