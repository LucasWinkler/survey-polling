import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import Nav from './components/Nav/Nav';

const routing = (
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/users' component={Users} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
