import { Dashboard } from 'Components/Dashboard';
import { Header } from 'Components/Header';
import { GlobalStyles } from 'Styles/globalStyles';
import React from 'react';

export const Home: React.FC = () => {

  return(
    <>
  
      <Header />
      <Dashboard />
      <GlobalStyles />
  
    </>
  )
}


