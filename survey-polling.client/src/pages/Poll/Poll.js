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

  //Use State for the input
  const [questionFields, setQuestionFields] = useState(
    [{ question: null }]
  );

  const [optionFields, setOptionFields] = useState(
    [{ option: null }]
  );

  const [qError, setqError] = useState('');
  const [opError, setopError] = useState('');

  
  // Question Handling /////////////////////////////////////////////
  const addQuestion = function() {
    const qFields = [...questionFields];
    qFields.push({ question: null });
    setQuestionFields(qFields);
    setqError("");
  };

  const deleteQuestion=function(i) {
    const qFields = [...questionFields];

    if(qFields.length === 1){
      setqError("You cannot delete this textbox");
    }
    else{
      setqError("");
      qFields.splice(i, 1);
      setQuestionFields(qFields);
    }
  };

  //Option Handling /////////////////////////////////////////////
  const addOptions = function() {
    const oFields = [...optionFields];
    oFields.push({ option: null });
    setOptionFields(oFields);
    setopError("");
    console.log(oFields);
  };

  const deleteOptions = function(i){
    const oFields = [...optionFields];

    if(oFields.length === 1){
      setopError("You cannot delete this option textbox");
    }
    else{
      setopError("");
      oFields.splice(i,1);
      setOptionFields(oFields);
    }

  };

  //On change handling /////////////////////////////////////////////
  const handleQuestionChange = function(i, event) {
    const qFields = [...questionFields];
    qFields[i].value = event.target.value;
    setQuestionFields(qFields);
  };

  const handleOptionsChange = function(j, event) {
    const oFields = [...optionFields];
    oFields[j].value = event.target.value;
    setOptionFields(oFields);
  };

  // Saveing a poll/////////////////////////////////////////////
  const savePoll = function(){

  };

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

            <button
            id="btnExit" 
            className='btn'>
            Exit
            </button>
            <button 
            id="btnSave"
            className='btn btn--colour-blue'>
            Save
            </button>
          
          </div>
        </div>
      </nav>
      <div className='columns'>
        <div className='poll__questions'>
          <h2 className='poll__heading'>Questions</h2>
          <br></br>
          <p id="qError">{qError}</p>
          <form onSubmit={addQuestion}>
          {questionFields.map((questionField, i) => {
            return (
              <div key={`${questionField}-${i}`}>
                <input
                  id={'txtInputField',i}
                  data-idx={i}
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
            <p id="opError">{opError}</p>
            {optionFields.map((optionField, j) => {
              return (
                <div key={`${optionField}-${j}`}>
                  <input
                    data-idx={j}
                    id="txtInputQuestion"
                    className="txtInputQuestion"
                    type="text"
                    placeholder={'Option '+ (j+1)}
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
