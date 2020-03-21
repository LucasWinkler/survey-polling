import React from "react";
import { Navbar, Form, Button, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MPNavbar.scss';
import icon from '../../assets/images/morum_logo.png';

export default function MPNavbar() {
    return (
      <div id="container">
      <Navbar bg="light" expand="lg">
        <img id="imgIcon" src={icon}/> 
        <Navbar.Brand id="brand">Morum OSS | Manage Poll</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <Button id="btnStart" color="primary" size="lg">Start</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }