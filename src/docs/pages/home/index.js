import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Button } from 'snakepit';

const HomePage = () => {
  return(
    <Wrapper>
      <h1>Home</h1>
      <Link to="/docs/getting-started/">Getting Started</Link>

      <div className="mt-3">
        <Button color="primary">Primary</Button>
        <Button color="accent">Accent</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
      </div>

      <div className="mt-3">
        <Button color="primary" outline>Primary</Button>
        <Button color="accent" outline>Accent</Button>
        <Button color="info" outline>Info</Button>
        <Button color="success" outline>Success</Button>
        <Button color="danger" outline>Danger</Button>
        <Button color="warning" outline>Warning</Button>
      </div>

      <div className="mt-3">
        <Button color="primary" inverse>Primary</Button>
        <Button color="accent" inverse>Accent</Button>
        <Button color="info" inverse>Info</Button>
        <Button color="success" inverse>Success</Button>
        <Button color="danger" inverse>Danger</Button>
        <Button color="warning" inverse>Warning</Button>
      </div>
    </Wrapper>

  );
};
export default HomePage;
