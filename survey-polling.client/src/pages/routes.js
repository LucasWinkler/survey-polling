import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NotFound from './Shared/NotFound';
import Home from './Shared/Home';
import About from './Shared/About';
import Users from './Shared/Users';
import TeacherHome from './Teacher';
import StudentHome from './Student';

export default () => (
  <Router>
    <Switch>
      <Redirect exact from='/home' to='/' />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/dashboard' component={TeacherHome} />
      <Route exact path='/lobby' component={StudentHome} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);
