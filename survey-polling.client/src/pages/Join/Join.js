import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../config';

import './Join.scss';

export default function Join(props) {
  const history = useHistory();
  const [pin, setPin] = useState('');

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const createUser = async (callback) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isHost: false,
      }),
    };

    fetch(config.apiUrl + 'user', requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        localStorage.setItem('userId', data.id);
        callback();
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  const joinLobby = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(config.apiUrl + 'lobby/GetLobbyByPin/' + pin, requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        try {
          if (data.id == null) {
            return;
          }

          createUser(() => {
            history.push('/lobby/' + data.id, { lobby: data });
          });
        } catch (err) {
          console.log(err);
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='join'>
      <div className='container join__wrapper'>
        <h1 className='join__title'>Please enter the pin:</h1>
        <form onSubmit={joinLobby}>
          <input
            type='text'
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            name='lobbyPin'
            id='lobbyPin'
            maxLength='6'
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn--colour-blue'
            onClick={joinLobby}
          />
        </form>
      </div>
    </div>
  );
}
