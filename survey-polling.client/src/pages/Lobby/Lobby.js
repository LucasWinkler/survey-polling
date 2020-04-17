import React, { useState, useEffect } from 'react';
import {
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel,
} from '@microsoft/signalr';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import config from '../../config';

import './Lobby.scss';

export default function Lobby(props) {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [hubConnection, setHubConnection] = useState({});
  const [userCount, setUserCount] = useState(0);
  const [lobby, setLobby] = useState({
    id: 0,
    pin: '', // '241573'
    poll: {
      id: 0,
      hostId: 0,
      title: '',
      questions: [{ id: 0, pollId: 0, content: '' }],
    },
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    const updateUserConnectionId = async (connection, connectionId) => {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: localStorage.getItem('userId'),
          connectionId: connectionId,
        }),
      };

      fetch(
        config.apiUrl + 'user/' + localStorage.getItem('userId'),
        requestOptions
      )
        .then(async (response) => {
          if (!response.ok) {
            const error = response.status;
            return Promise.reject(error);
          }
          console.log('here ' + location.state.lobby.pin);
          connection
            .invoke('JoinLobby', location.state.lobby.pin)
            .catch((err) => console.log(err));
          console.log('here2');
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    };

    const createHubConnection = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(config.hubUrl)
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      const startHubConnection = async () => {
        try {
          await connection.start();
          console.assert(connection.state === HubConnectionState.Connected);
          console.log('Connection successful');

          connection.on('userConnected', (connectionId) => {
            updateUserConnectionId(connection, connectionId);
          });

          connection.on('userJoined', (count) => {
            console.log('UserCount: ' + count);
            setUserCount(count);
          });

          setHubConnection(connection);
        } catch (err) {
          console.assert(connection.state === HubConnectionState.Disconnected);
          console.log('Error while establishing connection: ' + err);
          setTimeout(() => startHubConnection(), 5000);
        }
      };

      await startHubConnection();
    };

    setLobby(location.state.lobby);

    if (id != location.state.lobby.id) {
      history.push('/join');
      return;
    }

    createHubConnection();
  }, []);

  useEffect(() => {
    console.log(userCount);
  }, [userCount]);

  return (
    <div className='lobby'>
      <div className='container lobby__wrapper'>
        <h1 className='lobby__title'>{lobby.poll.title}</h1>
        <h2 className='lobby__pin'>The lobby pin is: {lobby.pin}</h2>
        <h2 className='lobby__waiting'>Waiting on your host to start...</h2>
        <h2 className='lobby__count'>Users: {userCount}</h2>
      </div>
    </div>
  );
}
