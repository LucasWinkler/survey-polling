import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/morum_logo.png';

import './styles.scss';

export default function Home() {
  return (
    <div className='container home'>
      <img src={logo} alt='Morum OSS Logo' className='home__logo' />
      <h2 className='home__title'>SIGN IN AS</h2>
      <Link to='/dashboard' className='home__btn home__btn--orange'>
        Teacher
      </Link>
      <Link to='/lobby' className='home__btn  home__btn--blue'>
        Student
      </Link>
      <p className='home__temp'>
        Note: This is temporary as the login process will happen before this
        widget starts. This widget is only a component of the final application.
      </p>
    </div>
  );
}
