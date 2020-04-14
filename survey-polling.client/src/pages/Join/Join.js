import React, { useState, useEffect } from 'react';

import './Join.scss';

export default function Join(props) {
  const [pin, setPin] = useState('');

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const joinLobby = event => {
    event.preventDefault();

    // try {
    //   hubConnection.invoke('JoinLobby', pin).catch(err => console.error(err));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className='join'>
      <div className='container join__wrapper'>
        <h1 className='join__title'>Please enter the pin:</h1>
        <form onSubmit={joinLobby}>
          <input
            type='text'
            value={pin}
            onChange={e => setPin(e.target.value)}
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
