import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

import Routes from './pages/routes';
import Vote from './pages/Student/pages/Vote/Vote';
import Chat from './components/Chat/Chat';
import Student from './pages/Student/Student';


ReactDOM.render(<Vote />, document.getElementById('root'));
serviceWorker.unregister();
