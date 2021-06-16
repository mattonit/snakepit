import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './partials/header';
import Routes from './routes';
import Footer from './partials/footer';

import '../scss/motif.scss';
import './scss/docs.scss';

ReactDOM.render(
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>,
  document.querySelector('#root'),
);
