import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper, Navbar } from 'snakepit';
import Routes from './routes';

const Docs = () => (
  <Router>
    <Navbar>
      <Wrapper>
        Snakepit
      </Wrapper>
    </Navbar>
    <Routes />
  </Router>
);
export default Docs;
