import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavItem, Wrapper } from 'snakepit';

const Header = () => (
  <Navbar sticky>
    <Wrapper>
      <Link to="/">Snakepit</Link>
      <Nav>
        <NavItem>
          <Link to="/docs/getting-started/">
            <Button color="primary" outline>Get Started</Button>
          </Link>
        </NavItem>
      </Nav>
    </Wrapper>
  </Navbar>
);
export default Header;
