import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'

import {Home} from './Pages/Home';

createServer({

  models: {
    transaction: Model, //! Transaction database model
  },

  seeds(server) {
    //? Inicializing the fake database
    server.db.loadData({
      transactions: [
        { 
          id: Math.random(),
          title: 'MacBook M1',
          price: 8000,
          type: 'withdraw',
          category: 'Dev',
          createdAt: new Date('01-09-2021')
        },
        { 
          id: Math.random(),
          title: 'Freelance de website',
          price: 1000,
          category: 'Dev',
          type: 'deposit',
          createdAt: new Date('10-09-2021')
        }
      ]
    })
  },

  routes() {
    this.namespace = '/api'

    this.get('/transactions', () => {
      return this.schema.all('transaction') 
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data) //? creating new Transaction

    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    
    <Home />

  </React.StrictMode>,
  document.getElementById('root')
);

