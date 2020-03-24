import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../config';

import './Dashboard.scss';

export default function Dashboard(props) {
  const history = useHistory();

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const createPoll = event => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hostId: parseInt(localStorage.getItem('userId')),
        title: 'A poll for testing the API'
      })
    };

    fetch(config.apiUrl + 'poll', requestOptions)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        history.push('/dashboard/poll/' + data.id);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <input
        type='button'
        value='Create Poll'
        className='btn btn--colour-blue'
        onClick={createPoll}
      />
    </div>
  );
}
