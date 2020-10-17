import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Wrapper, Navbar, Button } from 'snakepit';
import Routes from './routes';

const Docs = () => (
  <Router>
    <Navbar>
      <Wrapper>
        <Link to="/">Snakepit</Link>
        <Link to="/docs/getting-started/">
          <Button color="primary" outline>Get Started</Button>
        </Link>
      </Wrapper>
    </Navbar>
    <Routes />
  </Router>
);
export default Docs;
