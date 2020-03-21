import React from "react";
import { Button, Form, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MangePoll.scss";
import MPNavbar from './../../components/MPNavbar/MPNavbar';

export default function ManagePoll() {

    const addQuestion = (event)=>{
    };

    const addOptions = (event)=>{
    };

    return (
      <div id="container">
        <MPNavbar/>
        <div class="row">
          <div class="questionColumn" style={{}}>
            <h2>Questions</h2>
            <br></br>
            <Form onSubmit={addQuestion}>
              <br></br>
              <div class="input-group mb-3">
                <Form.Control id="txtQuestion" type="text" placeholder="Enter a question" />
              <div class="input-group-append">
                <Button id="btnDelete" variant="danger" type="button">Delete</Button>
              </div>
              <br></br>
            </div>
            <Button id="btnAddQuestion" variant="primary" size="lg" type="submit">Add</Button>
            </Form>
        </div>
        <div class="optionsColumn">
            <h2>Your Question</h2>
            <br></br>
              <Form onSubmit={addOptions}>
              <Form.Control id="txtQuestionOptions" type="text" placeholder="Enter your question" />
              <br></br>
              <Button id="btnAddOption" variant="primary" size="lg" type="submit">Add</Button>
              <br></br>
              <h2>Options</h2>
              <Form.Control id="txtOptions" type="text" placeholder="Option 1" /> 
              <br></br>
              <Button id="btnOptions" variant="primary" size="lg" type="submit">Add</Button>
            </Form>
        </div>
        </div>
      </div>
    );
  }