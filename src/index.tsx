import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './Pages/Home';
import {GlobalStyles} from 'Styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    
    <>
      <GlobalStyles />
      <Home />
    </>

  </React.StrictMode>,
  document.getElementById('root')
);

