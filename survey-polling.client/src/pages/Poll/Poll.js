import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Poll.scss';
import logo from '../../assets/images/morum_logo.png';

export default function Poll(props) {
  const { pollId } = props.match.params;

  const [poll, setPoll] = useState({
    id: Number,
    hostId: Number,
    title: String,
    questions: [{ id: Number, pollId: Number, content: String }]
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const addQuestion = event => {};
  const addOptions = event => {};

  return (
    <div id='container poll'>
      <nav className='nav'>
        <div className='nav__items'>
          <img className='img__logo' src={logo}></img>
          <div className='nav__items_left'>
            <h2 className='title'>Morum OSS | Manage Poll</h2>
          </div>

          <div className='nav__items_right'>
            <Link to='/dashboard' className='nav__dashboard'>
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
        </div>
      </nav>
      <div className='columns'>
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
              className='btn btn--colour-blue'
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
              className='btn btn--colour-blue'
            >
              Add
            </button>
            <br></br>
            <h2>Options</h2>
            <input
              type='text'
              id='option1'
              name='option1'
              placeholder='Option 1'
              className='poll__input'
            />
            <button
              type='submit'
              className='btn btn--colour-blue'
              id='btnOption'
              name='btnOption'
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
