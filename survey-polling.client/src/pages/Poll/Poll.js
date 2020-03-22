import React, { useEffect } from 'react';

import './Poll.scss';
import logo from '../../assets/images/morum_logo.png';
import { Link } from 'react-router-dom';

export default function Poll(props) {
  const { id } = props.match.params;

  useEffect(() => {
    document.title = props.title;
  }, []);

  const addQuestion = event => {};
  const addOptions = event => {};

  return (
    <div id='container poll'>
      <nav className='nav'>
        <img className='nav__logo_icon' src={logo} alt='Morum OSS Logo' />
        <div className='nav__items'>
          <Link to='/dashboard' className='nav__item'>
            Dashboard
          </Link>
          <input
            type='text'
            id='pollTitle'
            name='pollTitle poll__input'
            placeholder='Enter poll title'
          />
          <button className='btn'>Exit</button>
          <button className='btn btn--colour-blue'>Save</button>
        </div>
      </nav>
      <div className='poll__questions'>
        <h2 className='poll__heading'>Questions</h2>
        <form onSubmit={addQuestion}>
          <div className=''>
            <input
              id='txtQuestion'
              name='txtQuestion'
              type='text'
              placeholder='Enter a question'
              className='poll__input'
            />
            <div className=''>
              <button
                id='btnDelete'
                name='btnDelete'
                type='button'
                className='btn'
              >
                Delete
              </button>
            </div>
          </div>
          <button
            id='btnAddQuestion'
            name='btnAddQuestion'
            type='submit'
            className='btn'
          >
            Add
          </button>
        </form>
      </div>
      <div className='poll__settings'>
        <h2 className='poll__heading'>Your Question</h2>
        <form onSubmit={addOptions}>
          <input
            id='txtQuestionOptions'
            type='text'
            placeholder='Enter your question'
            className='poll__input'
          />
          <button
            id='btnAddOption'
            name='btnAddOption'
            type='submit'
            className='btn'
          >
            Add
          </button>
          <h2>Options</h2>
          <input
            type='text'
            id='option1'
            name='option1'
            placeholder='Option 1'
            className='poll__input'
          />
          <button type='submit' className='btn' id='btnOption' name='btnOption'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
