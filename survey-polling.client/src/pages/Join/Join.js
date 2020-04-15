import React, { useState, useEffect } from 'react';

import './Join.scss';
import logo from '../../assets/images/morum_logo.png';
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

      <div className='container_join__wrapper'>
      <img src={logo} alt='Morum OSS Logo' className='home__logo' />
        <h1 className='join__title'>Please enter the pin:</h1>
        <form onSubmit={joinLobby}>
          <input
            className="txtPin"
            type='text'
            value={pin}
            onChange={e => setPin(e.target.value)}
            name='lobbyPin'
            id='lobbyPin'
            maxLength='6'
            placeholder="123456789"
          />
          <br></br>
          <input
            type='submit'
            value='Submit'
            className='btn btn--colour-blue'
            id="btnSubmit"
            onClick={joinLobby}
          />
        </form>
      </div>
    </div>
  );
}
