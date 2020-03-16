import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import Nav from './components/Nav/Nav';

ReactDOM.render(
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/users' component={Users} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
