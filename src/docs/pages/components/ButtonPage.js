import React from 'react';
import { Button, Cell, CellGroup, Heading, Text } from 'motif.js';

const ButtonPage = props => {
  return(
    <div>
      <CellGroup>
        <Cell>
          <Heading className="mb-1">Button</Heading>
          <Text className="docs-page-desc mt-0">Buttons are best used to allow the user to take an action. They are mostly used inside forms, dialogs, and more.</Text>
        </Cell>
      </CellGroup>
      <CellGroup className="mb-3">
        <Cell>
          <Heading level="2" size="md">Solid Buttons</Heading>

          <Button color="primary">Primary</Button>
          <Button color="accent">Accent</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
        </Cell>
      </CellGroup>
      <CellGroup className="mb-3">
        <Cell>
          <Heading level="2" size="md">Outline Buttons</Heading>

          <Button outline color="primary">Primary</Button>
          <Button outline color="accent">Accent</Button>
          <Button outline color="info">Info</Button>
          <Button outline color="success">Success</Button>
          <Button outline color="danger">Danger</Button>
          <Button outline color="warning">Warning</Button>
        </Cell>
      </CellGroup>
      <CellGroup className="mb-3">
        <Cell>
          <Heading level="2" size="md">Inversed Buttons</Heading>

          <Button inverse color="primary">Primary</Button>
          <Button inverse color="accent">Accent</Button>
          <Button inverse color="info">Info</Button>
          <Button inverse color="success">Success</Button>
          <Button inverse color="danger">Danger</Button>
          <Button inverse color="warning">Warning</Button>
        </Cell>
      </CellGroup>
      <CellGroup className="mb-3">
        <Cell>
          <Heading level="2" size="md">Sizes</Heading>

          <Button size="sm" color="primary">Primary</Button>
          <Button color="primary">Primary</Button>
          <Button size="lg" color="primary">Primary</Button>
        </Cell>
      </CellGroup>
    </div>
  );
}

export default ButtonPage;
