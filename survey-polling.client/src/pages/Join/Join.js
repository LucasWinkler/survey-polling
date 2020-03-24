import React, { useState, useEffect } from 'react';

import './Join.scss';

export default function Join(props) {
  const [pin, setPin] = useState('');

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

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
          <input
            type='submit'
            value='Submit'
            className='btn btn--colour-blue'
          />
        </form>
      </div>
    </div>
  );
}
