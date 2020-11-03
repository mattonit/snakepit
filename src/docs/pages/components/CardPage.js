import React from 'react';
import {Button, Card, CardContent, CardText, CardTitle, Cell, CellGroup, Heading, Text, Wrapper} from 'motif.js';

const CardPage = props => {
  return (
    <div>
      <CellGroup>
        <Cell>
          <Heading className="mb-1">Card</Heading>
          <Text className="docs-page-desc mt-0">The card is an elegant way to display information in an organized way.</Text>
        </Cell>
      </CellGroup>
      <CellGroup>
        <Cell>
          <Heading size="lg">Example</Heading>
          <Card style={{maxWidth: '20em'}}>
            <CardContent>
              <CardTitle>Example Card</CardTitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
              <Button color="primary">Go somewhere</Button>
            </CardContent>
          </Card>
        </Cell>
      </CellGroup>
    </div>
  );
}

export default CardPage;
