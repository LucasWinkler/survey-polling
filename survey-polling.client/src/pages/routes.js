import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import Users from './Users';

// import TempNav from '../components/TempNav';

export default () => (
  <Router>
    {/* <TempNav /> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/users' component={Users} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
