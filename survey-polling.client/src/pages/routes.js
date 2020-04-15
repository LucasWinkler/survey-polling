import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Vote is for testing purposes
import Vote from '../components/Vote/Vote';

import Home from './Home/Home';
import Join from './Join/Join';
import Lobby from './Lobby/Lobby';
import Dashboard from './Dashboard/Dashboard';
import Poll from './Poll/Poll';
import PollOver from './PollOver/PollOver';
import Manager from './Manager/Manager';

export default () => (
  <Router>
    <Switch>
      {/* /Vote is for Testing purposes it will just be a component not a page */}
      <Route exact path='/Vote' render={props => <Vote {...props} />} />
      <Route
        exact
        path='/'
        render={props => <Home {...props} title='Morum OSS | Home' />}
      />
      <Route
        exact
        path='/join'
        render={props => <Join {...props} title='Morum OSS | Join Poll' />}
      />
      <Route
        exact
        path='/lobby/:id'
        render={props => <Lobby {...props} title='Morum OSS | Lobby' />}
      />
      <Route
        exact
        path='/dashboard'
        render={props => <Dashboard {...props} title='Morum OSS | Dashboard' />}
      />
      <Route
        exact
        path='/dashboard/poll/:id'
        render={props => <Poll {...props} title='Morum OSS | Manage Poll' />}
      />
      <Route
        exact
        path='/poll-over'
        render={props => <PollOver {...props} title='Morum OSS | Poll Over' />}
        />
      <Route
        exact
        path='/manager'
        render={props => <Manager {...props} title='Morum OSS | Poll Manager' />}
        />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
