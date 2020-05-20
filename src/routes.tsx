import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListAllUsers from './pages/ListAllUsers';
import ShowAnUser from './pages/ShowAnUser';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListAllUsers} />
      <Route path="/users/:name" exact component={ShowAnUser} />
    </Switch>
  );
}

export default Routes;
