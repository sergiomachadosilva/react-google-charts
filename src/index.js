import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './dashboard';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container >
      <Dashboard />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
