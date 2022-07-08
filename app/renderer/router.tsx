import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Root from './container/root';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
      </Switch>
      <Redirect to="/" />
    </HashRouter>
  );
};

export default Router;
