import React from 'react';
import {Wrapper} from 'snakepit';
import {Link} from "react-router-dom";

const Docs = props => {

  const {
    children
  } = props;

  return (
    <Wrapper wide className="docs-layout my-md-4">
      <div className="docs-sidebar">
        <ul>
          <li>
            <strong>Getting Started</strong>
          </li>
          <li>
            <strong>Components</strong>
            <ul>
              <li><Link>Button</Link></li>
              <li><Link>Heading</Link></li>
              <li><Link>Navbar</Link></li>
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
