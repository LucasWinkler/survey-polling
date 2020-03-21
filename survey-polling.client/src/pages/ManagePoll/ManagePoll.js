import React from "react";
import { Navbar, Button, Form } from 'react-bootstrap';
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
          <div class="questionColumn">
            <h2>Questions</h2>
            <Form onSubmit={addQuestion}>
              <Button variant="primary" type="submit">Add</Button>
            </Form>
        </div>
        <div class="optionsColumn">
            <h2>Your Question</h2>
            <Form onSubmit={addOptions}>
              <Button variant="primary" type="submit">Add</Button>
            </Form>
        </div>
        </div>
      </div>
    );
  }