import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

<<<<<<< HEAD
import NotFound from './Shared/NotFound/NotFound';
import Home from './Shared/Home/Home';
import About from './Shared/About/About';
import Users from './Shared/Users/Users';
import Dashboard from './Teacher/Teacher';
import Lobby from './Student/Student';
import Voting from './Student/pages/Vote/Vote';
import DocumentedPollManager from './Teacher/pages/Saved Polls/DocumentedPollManager';
=======
// Vote is for testing purposes
import Vote from '../components/Vote/Vote';

import Home from './Home/Home';
import Join from './Join/Join';
import Lobby from './Lobby/Lobby';
import Dashboard from './Dashboard/Dashboard';
import Poll from './Poll/Poll';
import PollOver from './PollOver/PollOver';
>>>>>>> 66bb1fee7b0a5c41ecad1705bcabe588fd587da7

export default () => (
  <Router>
    <Switch>
<<<<<<< HEAD
      <Redirect exact from='/home' to='/' />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/lobby' component={Lobby} />
      <Route exact path='/vote' component={Voting} />
      <Route exact path='/manager' component={DocumentedPollManager}/>
      <Route path='*' component={NotFound} />
=======
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
      <Redirect from='*' to='/' />
>>>>>>> 66bb1fee7b0a5c41ecad1705bcabe588fd587da7
    </Switch>
  </Router>
);
