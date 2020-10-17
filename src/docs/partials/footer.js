import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Text } from 'snakepit';

const Footer = () => (
    <footer className="docs-footer p-3 p-md-5 mt-5 bg-light text-center">
      <Text>Snakepit &copy; { new Date().getFullYear() }</Text>
    </footer>
);
export default Footer;
