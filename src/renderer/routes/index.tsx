import React from 'react';
import { Route, Switch } from 'react-router';
import Start from '../pages/Start';
import Workspace from '../pages/Workspace';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Start} />
    <Route path="/workspace" component={Workspace} />
  </Switch>
);

export default Routes;
