import React from 'react';

import { GlobalStyles } from 'Styles/globalStyles';

import { Dashboard } from 'Components/Dashboard';
import { Header } from 'Components/Header';

export const Home: React.FC = () => {

  return(
    <>
  
      <Header />
      <Dashboard />
      <GlobalStyles />
  
    </>
  )
}


