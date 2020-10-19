import React from 'react';
import {CellGroup, Wrapper} from 'snakepit';
import {NavLink} from 'react-router-dom';

const Docs = props => {

  const {
    children
  } = props;

  return (
    <Wrapper className="docs-layout my-md-4">
      <div className="docs-sidebar">
        <ul className="p-0">
          <li>
            <strong>Getting Started</strong>
            <ul>
              <li><NavLink to="/docs/getting-started/">Introduction</NavLink></li>
            </ul>
          </li>
          <li>
            <strong>Components</strong>
            <ul>
              <li><NavLink to="/docs/components/button/">Button</NavLink></li>
              <li><NavLink to="/docs/components/card/">Card</NavLink></li>
              <li><NavLink to="/docs/components/navbar/">Navbar</NavLink></li>
            </ul>
          </li>
          <li>
            <strong>Forms</strong>
            <ul>
              <li><NavLink to="/docs/forms/input/">Input</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="docs-content">
      {children}

      </div>
    </Wrapper>
  );
}

export default Docs;
