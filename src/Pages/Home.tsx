import React, { useState } from 'react';
import Modal from 'react-modal'

import { GlobalStyles } from 'Styles/globalStyles';

import { Dashboard } from 'Components/Dashboard';
import { Header } from 'Components/Header';
import { NewTransactionModal } from 'Components/NewTransactionModal';

export const Home: React.FC = () => {
  Modal.setAppElement('#root')
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

  function handleOpenTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return(
    <>
      <Header onOpenNewTransaction={handleOpenTransactionModal}/>
      <Dashboard />


      {/* Extra Components */}
      <>
        <NewTransactionModal
          isModalOPen={isNewTransactionModalOpen}
          onRequestCloseModal={handleCloseTransactionModal}
        />
        <GlobalStyles />
      </>


    </>
  )
}


