import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Navbar, Button } from 'snakepit';

const Header = () => (
  <Navbar sticky>
    <Wrapper>
      <Link to="/">Snakepit</Link>
      <Link to="/docs/getting-started/">
        <Button color="primary" outline>Get Started</Button>
      </Link>
    </Wrapper>
  </Navbar>
);
export default Header;
