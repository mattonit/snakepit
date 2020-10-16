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
          <Button tag="a" href="/" color="primary">asd</Button>
          <Button color="primary" inverse>asd</Button>
          <Button color="primary" outline>asd</Button>
        </span>
      </Wrapper>
    </Navbar>
    <Routes />
  </Router>
);
export default Docs;
