import React, { useState } from 'react';
import Modal from 'react-modal'

import { GlobalStyles } from 'Styles/globalStyles';

import { Dashboard } from 'Components/Dashboard';
import { Header } from 'Components/Header';

export const Home: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

  Modal.setAppElement('#root')

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h1>Cadastrar transação</h1>
      </Modal>

      <GlobalStyles />
    </>
  )
}


