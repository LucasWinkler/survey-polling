import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/morum_logo.png';
import config from '../../config';
import './Dashboard.scss';

export default function Dashboard(props) {
  const history = useHistory();

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    getPolls();
  }, []);

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

  const getPolls = event => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(config.apiUrl + 'poll', requestOptions)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        console.log(data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>

    <nav className='nav'>
        <div className='nav__items'>
          <img className='img__logo' src={logo}></img>
          <div className='nav__items_left'>
            <h2 className='title'>Morum OSS | Teacher Dashboard</h2>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="row">
      <div className="column">
      <section className='create__poll_sec'>
      <br></br>
      <div className="poll-container">
        <h2 className="create_poll_title">Create a new poll</h2>
        <br></br>
        <input
        type='button'
        value='New'
        className='btn btn--colour-blue'
        onClick={createPoll} />
      </div>
    </section>
      </div>
    </div>

    </div>
  );
}
