import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

import Routes from './pages/routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
