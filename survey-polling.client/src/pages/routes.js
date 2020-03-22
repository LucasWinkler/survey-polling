import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './Home/Home';
import Join from './Join/Join';
import Lobby from './Lobby/Lobby';
import Dashboard from './Dashboard/Dashboard';
import Poll from './Poll/Poll';
import PollOver from './PollOver/PollOver';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/join' component={Join} />
      <Route exact path='/lobby/:id' component={Lobby} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/dashboard/poll/:id' component={Poll} />
      <Route exact path='/poll-over' component={PollOver} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
