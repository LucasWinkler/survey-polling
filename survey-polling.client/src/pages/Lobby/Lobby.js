import React, { useState, useEffect } from 'react';
import {
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel
} from '@microsoft/signalr';
import Config from '../../config';

import './Lobby.scss';

export default function Lobby() {
  const [hubConnection, setHubConnection] = useState({});
  const [poll, setPoll] = useState('');

  useEffect(() => {
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

          connection.on('pollActive', poll => {
            console.log(poll);
            setPoll(poll);
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

    createHubConnection();
  }, []);

  const setFakePoll = () => {
    try {
      hubConnection
        .invoke('ActivatePoll', 'Fake poll started')
        .catch(err => console.error(err));
    } catch (err) {
      console.log(err);
    }
  };

  const joinPoll = () => {
    console.log('fake joined poll');
  };

  return (
    <div className='lobby'>
      <div className='container lobby__wrapper'>
        {poll.length <= 0 ? (
          <>
            <h1 className='lobby__title'>Waiting for a poll...</h1>
            <button className='btn btn--orange' onClick={setFakePoll}>
              Invoke Fake Poll Event
            </button>
          </>
        ) : (
          <>
            <h1 className='lobby__title'>Poll: Fake poll</h1>
            <button className='btn btn--orange' onClick={joinPoll}>
              Join
            </button>
          </>
        )}
      </div>
    </div>
  );
}
