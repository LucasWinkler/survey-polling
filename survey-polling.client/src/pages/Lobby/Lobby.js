import React, { useState, useEffect } from 'react';
import {
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel
} from '@microsoft/signalr';
import Config from '../../config';

import './Lobby.scss';

export default function Lobby(props) {
  const { lobbyId } = props.match.params;
  const [hubConnection, setHubConnection] = useState({});
  const [pin, setPin] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [poll, setPoll] = useState({
    id: Number,
    hostId: Number,
    title: String,
    questions: [{ id: Number, pollId: Number, content: String }]
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    createHubConnection();
  }, []);

  const createHubConnection = async () => {
    const connection = new HubConnectionBuilder()
      .withUrl(Config.hubUrl)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    const startHubConnection = async () => {
      try {
        await connection.start();
        console.assert(connection.state === HubConnectionState.Connected);
        console.log('Connection successful');

        connection.on('userJoined', userCount => {
          console.log(userCount);
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

  return (
    <div className='lobby'>
      <div className='container lobby__wrapper'>
        <h1 className='lobby__title'>Poll title here</h1>
        <h2 className='lobby__pin'>The lobby pin is: 000000</h2>
        <h2 className='lobby__waiting'>Waiting on your host to start...</h2>
      </div>
    </div>
  );
}
