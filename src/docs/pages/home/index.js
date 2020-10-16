import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'snakepit';

const HomePage = () => {
  return(
    <div>
      <h1>Home</h1>
      <Link to="/docs/getting-started/">Getting Started</Link>

      <div style={{marginTop: 20}}>
        <Button className="btn-primary">Primary</Button>
        <Button className="btn-accent">Accent</Button>
        <Button className="btn-info">Info</Button>
        <Button className="btn-success">Success</Button>
        <Button className="btn-danger">Danger</Button>
        <Button className="btn-warning">Warning</Button>
      </div>

      <div style={{marginTop: 20}}>
        <Button className="btn-outline-primary">Primary</Button>
        <Button className="btn-outline-accent">Accent</Button>
        <Button className="btn-outline-info">Info</Button>
        <Button className="btn-outline-success">Success</Button>
        <Button className="btn-outline-danger">Danger</Button>
        <Button className="btn-outline-warning">Warning</Button>
      </div>

      <div style={{marginTop: 20}}>
        <Button className="btn-inverse-primary">Primary</Button>
        <Button className="btn-inverse-accent">Accent</Button>
        <Button className="btn-inverse-info">Info</Button>
        <Button className="btn-inverse-success">Success</Button>
        <Button className="btn-inverse-danger">Danger</Button>
        <Button className="btn-inverse-warning">Warning</Button>
      </div>
    </div>

  );
};
export default HomePage;
