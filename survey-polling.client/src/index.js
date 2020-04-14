import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Import base styles before component styles from routes
import './styles/main.scss';

import Routes from './pages/routes';
<<<<<<< HEAD
import Vote from './pages/Student/pages/Vote/Vote';
import Chat from './components/Chat/Chat';
import Student from './pages/Student/Student';
import DocumentedPollManager from './pages/Teacher/pages/Saved Polls/DocumentedPollManager'


=======

>>>>>>> 66bb1fee7b0a5c41ecad1705bcabe588fd587da7
ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
