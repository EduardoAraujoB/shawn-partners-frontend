import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={Home} />
    </Switch>
  );
}

export default Routes;
