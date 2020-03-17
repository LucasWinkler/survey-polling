import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

import './Student.scss';

export default function Student() {
  const [hubConnection, setHubConnection] = useState(null);
  const [poll, setPoll] = useState('');

  useEffect(() => {
    const createHubConnection = async () => {
      const hub = new HubConnectionBuilder()
        .withUrl('http://localhost:5000/poll')
        .configureLogging(LogLevel.Information)
        .build();

      try {
        await hub.start();
        console.log('Connection successful!');

        hub.on('pollStarted', poll => {
          console.log(poll);
          setPoll(poll);
        });
      } catch (err) {
        console.log('Error while establishing connection: ' + { err });
      }

      setHubConnection(hub);
    };

    createHubConnection();
  }, []);

  const setFakePoll = () => {
    hubConnection
      .invoke('SendPoll', 'Fake poll started')
      .catch(err => console.error(err));
  };

  const joinPoll = () => {
    console.log('joined poll');
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
