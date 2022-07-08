import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Resume from './container/resume';
import Root from './container/root';
import { ROUTER } from '@common/constants/router';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={ROUTER.root} component={Root} />
        <Route exact path={ROUTER.resume} component={Resume} />
      </Switch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
};

export default Router;
