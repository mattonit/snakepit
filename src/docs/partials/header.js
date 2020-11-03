import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavItem, Wrapper } from 'motif.js';

const Header = () => (
  <Navbar sticky>
    <Wrapper>
      <Link to="/">Motif.js</Link>
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
