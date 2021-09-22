import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs'

import {Home} from './Pages/Home';

createServer({
  routes() {
    this.namespace = '/api'

    this.get('/transactions', () => [
      {
        id: Math.random,
        title: 'Nova SSD',
        category: 'Withdraw',
        price: 1000,
        date: new Date(),
      }
    ])
  }
})

ReactDOM.render(
  <React.StrictMode>
    
    <Home />

  </React.StrictMode>,
  document.getElementById('root')
);

