import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Pages
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Lobby from './Lobby/Lobby';
import Poll from './Poll/Poll';
import PollOver from './PollOver/PollOver';
import TestManagePoll from './ManagePoll/ManagePoll';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/join' component={Join} />
      <Route exact path='/lobby/:id' component={Lobby} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/dashboard/poll/:id' component={Poll} />
      <Route exact path='/poll-over' component={PollOver} />
      <Route exact path='/manage-poll' component={TestManagePoll} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
