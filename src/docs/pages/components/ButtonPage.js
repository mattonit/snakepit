import React from 'react';
import { Cell, CellGroup, Heading, Text } from 'snakepit';

const ButtonPage = props => {
  return(
    <div>
      <CellGroup>
        <Cell>
          <Heading className="mb-1">Button</Heading>
          <Text className="docs-page-desc mt-0">Buttons are best used to allow the user to take an action. They are mostly used inside forms, dialogs, and more.</Text>
        </Cell>
      </CellGroup>
    </div>
  );
}

export default ButtonPage;
