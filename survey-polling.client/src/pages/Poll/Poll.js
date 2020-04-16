import React, { useState, useEffect, useReducer } from 'react';
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




  //Testing the dynamic input fields
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

  const deleteOptions = (event,i)=>{
    const values = [...optionFields];
    values.splice(i,1);
    setOptionFields(values);
  }


  function handleQuestionChange(i, event) {
    const values = [...questionFields];
    values[i].value = event.target.value;
    setQuestionFields(values);
  }

  function handleOptionsChange(i, event) {
    const values = [...optionFields];
    values[i].value = event.target.value;
    setOptionFields(values);
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
          <br></br>
          <form onSubmit={addQuestion}>
          {questionFields.map((questionField, i) => {
            return (
              <div key={`${questionField}-${i}`}>
                <input
                  id="txtInputQuestion"
                  className="txtInputQuestion"
                  type="text"
                  placeholder="Enter a question"
                  value={questionField.value || ""}
                  onChange={event => handleQuestionChange(i, event)}
                />
                <button 
                id="btnDelete"
                className="btn btn--colour-red"
                name="btnDeleteQuestion"
                type="button" 
                onClick={() => deleteQuestion(i)}>
                  Delete
                </button>
                <br></br>
                <br></br>
              </div>
            );
          })}
          <button
          id="btnAddQuestion"
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
          <br></br>
          <form onSubmit={addOptions}>
            <input
              id='txtQuestionOptions'
              type='text'
              placeholder='Enter your question'
              className='poll__input'
            />
            <br></br>
            <br></br>
            <h2>Answers</h2>
                        <br></br>
            {optionFields.map((optionField, j) => {
              return (
                <div key={`${optionField}-${j}`}>
                  <input
                    id="txtInputQuestion"
                    className="txtInputQuestion"
                    type="text"
                    placeholder={'Option '+ j}
                    value={optionField.value || ""}
                    onChange={event => handleOptionsChange(j, event)}
                  />
                  <button 
                  id="btnDelete"
                  className="btn btn--colour-red"
                  name="btnDeleteOption"
                  type="button" 
                  onClick={() => deleteOptions(j)}>
                    Delete
                  </button>
                  <br></br>
                  <br></br>
                </div>
              );
            })}
            
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
