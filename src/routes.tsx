import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListAllUsers from './pages/ListAllUsers';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListAllUsers} />
    </Switch>
  );
}

export default Routes;
