import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper, CellGroup, Cell, Heading, Button, Text} from 'snakepit';

const HomePage = () => {
  return (
    <div>
      <section className="docs-intro">

      </section>
      <Wrapper>

        <Heading level="1">Home</Heading>
        <Text>Snakepit - modern UI library for React.js</Text>
        <Link to="/docs/getting-started/">Getting Started</Link>

        <CellGroup>
          <Cell size="16" className="mt-3">
            <Button color="primary">Primary</Button>
            <Button color="accent">Accent</Button>
            <Button color="info">Info</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
          </Cell>

          <Cell size="16" className="mt-3">
            <Button color="primary" outline>Primary</Button>
            <Button color="accent" outline>Accent</Button>
            <Button color="info" outline>Info</Button>
            <Button color="success" outline>Success</Button>
            <Button color="danger" outline>Danger</Button>
            <Button color="warning" outline>Warning</Button>
          </Cell>

          <Cell size="16" className="mt-3">
            <Button color="primary" inverse>Primary</Button>
            <Button color="accent" inverse>Accent</Button>
            <Button color="info" inverse>Info</Button>
            <Button color="success" inverse>Success</Button>
            <Button color="danger" inverse>Danger</Button>
            <Button color="warning" inverse>Warning</Button>
          </Cell>

        </CellGroup>

      </Wrapper>
    </div>

  );
};
export default HomePage;
