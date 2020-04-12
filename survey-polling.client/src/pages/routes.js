import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NotFound from './Shared/NotFound/NotFound';
import Home from './Shared/Home/Home';
import About from './Shared/About/About';
import Users from './Shared/Users/Users';
import Dashboard from './Teacher/Teacher';
import Lobby from './Student/Student';
import Voting from './Student/pages/Vote/Vote';
import DocumentedPollManager from './Teacher/pages/Saved Polls/DocumentedPollManager';

export default () => (
  <Router>
    <Switch>
      <Redirect exact from='/home' to='/' />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/lobby' component={Lobby} />
      <Route exact path='/vote' component={Voting} />
      <Route exact path='/manager' component={DocumentedPollManager}/>
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);
