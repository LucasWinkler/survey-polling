import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/morum_logo.png';

import './Home.scss';

export default function Home(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className='container home'>
      <img src={logo} alt='Morum OSS Logo' className='home__logo' />
      <h2 className='home__title'>SIGN IN AS</h2>
      <div className='home__btn_wrapper'>
        <Link to='/dashboard' className='btn btn--colour-orange'>
          Teacher
        </Link>
        {/* Temp id for testing */}
        <Link to='/lobby/1' className='btn btn--colour-blue'>
          Student
        </Link>
      </div>
      <p className='home__temp'>
        Note: This is temporary as the login process will happen before this
        widget starts. This widget is only a component of the final application.
      </p>
    </div>
  );
}
