import { FormEvent } from 'react'
import Modal from 'react-modal'

import { NewTransactionModalProps } from 'Interfaces'

import { Container } from 'Components/NewTransactionModal/style'

import CloseModal from 'Assets/SVG/close.svg'

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({isModalOPen, onRequestCloseModal}) => {
    
    function handleNewTransaction(e: FormEvent) {
        e.preventDefault()
    }
    
    return(
        <Modal
            isOpen={isModalOPen}
            onRequestClose={onRequestCloseModal}
            className='react-modal-content'
            overlayClassName='react-modal-overlay'
        >
            <button
                className="react-modal-close"
                onClick={onRequestCloseModal}
            >
                <img src={CloseModal} alt="Fechar Modal" />
            </button>
            <Container
                onSubmit={(e) => handleNewTransaction(e)}
            >
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Titulo"/>
                <input type="number" placeholder="Preço"/>
                <input type="text" placeholder="Categoria"/>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}