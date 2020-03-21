import React from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MPNavbar() {
    return (
      <div id="container">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Morum OSS | Manage Poll</Navbar.Brand>
        </Navbar>
      </div>
    );
  }