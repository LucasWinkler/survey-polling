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
import MangePoll from './ManagePoll/ManagePoll';

export default () => (
  <Router>
    <Switch>
      {/* Home:
            - Allows a user to choose the role of a teacher (host) or a student (voter).
            - This is a temporary page as the roles will be predetermined.
        */}
      <Route exact path='/' component={Home} />
      {/* Host dashboard:
            - Will have extra routes for creating/editing polls and viewing results of previously ran polls.
            - Examples:
              -  /dashboard/poll/:id (editing a poll)
       */}
      <Route exact path='/dashboard' component={Dashboard} />
      {/* Waiting room/lobby:
            - Poll id passed from start button in dashboard through props/location state?
            - Displays count of users in lobby.
            - Displays poll title.
       */}
      <Route exact path='/lobby' component={Lobby} />
      {/* Current poll:
            - Poll id is passed down from lobby?
            - Displays current question.
       */}
      <Route exact path='/poll/:id' component={Poll} />\
      {/* Poll Over
            - Simple page saying that the poll is now over.
       */}
      <Route exact path='/poll-over' component={PollOver} />
      {/* Redirect to home instead of a "Not Found" page */}

      <Route exact path='/manage-poll' component={MangePoll} />
      {/* Redirect to home instead of a "Not Found" page */}
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
