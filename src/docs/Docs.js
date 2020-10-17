import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';
import Header from './partials/header';
import Footer from './partials/footer';

const Docs = () => (
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>
);
export default Docs;
