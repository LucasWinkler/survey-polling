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

  const [questionFields, setQuestionFields] = useState(
    [{ value: null }]
  );

  const [optionFields, setOptionFields] = useState(
    [{ value: null }]
  );
  
  
  const addQuestion = event => {
    const values = [...questionFields];
    values.push({ value: null });
    setQuestionFields(values);
  };

  const addOptions = event => {
    const values = [...optionFields];
    values.push({ value: null });
    setOptionFields(values);
  };

  const deleteQuestion = (event,i) =>{
    const values = [...questionFields];
    values.splice(i, 1);
    setQuestionFields(values);
  };


  function handleChange(i, event) {
    const values = [...questionFields];
    values[i].value = event.target.value;
    setQuestionFields(values);
  }


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
          {questionFields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  type="text"
                  placeholder="Enter a question"
                  value={field.value || ""}
                  onChange={e => handleChange(idx, e)}
                />
                <button type="button" onClick={() => deleteQuestion(idx)}>
                  X
                </button>
              </div>
            );
          })}
          <button
          name='btnAddQuestion'
          type='button'
          className='btn btn--colour-blue'
          onClick={() => addQuestion()}
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
            <button
              type='button'
              className='btn btn--colour-blue'
              id='btnOption'
              name='btnOption'
              onClick={() => addOptions()}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
