import React from 'react';
import {Wrapper} from 'snakepit';

const Docs = props => {

  const {
    children
  } = props;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Docs;
