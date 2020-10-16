import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper, Navbar, Button } from 'snakepit';
import Routes from './routes';

const Docs = () => (
  <Router>
    <Navbar>
      <Wrapper>
        Snakepit
        <span>
          <Button className="btn-primary">asd</Button>
          <Button className="btn-inverse-primary">asd</Button>
        </span>
      </Wrapper>
    </Navbar>
    <Routes />
  </Router>
);
export default Docs;
