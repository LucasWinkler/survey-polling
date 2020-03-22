import React, { useState } from 'react';
import {
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel
} from '@microsoft/signalr';
import Config from '../../config';

import './Lobby.scss';

export default function Lobby(props) {
  const { id } = props.match.params;
  const [hubConnection, setHubConnection] = useState({});
  const [pin, setPin] = useState('');
  const [poll, setPoll] = useState({
    id: Number,
    hostId: Number,
    title: String,
    questions: [{ id: Number, pollId: Number, content: String }]
  });

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

        connection.on('userJoined', message => {
          console.log(message);
          setPoll(message);
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

  const joinPoll = event => {
    event.preventDefault();

    console.log('Submitting pin: ' + pin);

    // try {
    //   hubConnection.invoke('JoinLobby', pin).catch(err => console.error(err));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className='lobby'>
      <div className='container lobby__wrapper'>
        <h1 className='lobby__title'>Please enter the pin:</h1>
        <form onSubmit={joinPoll}>
          <input
            type='text'
            value={pin}
            onChange={e => setPin(e.target.value)}
            name='lobbyPin'
            id='lobbyPin'
          />
          <input type='submit' value='Submit' className='btn btn--blue' />
        </form>
      </div>
    </div>
  );
}
