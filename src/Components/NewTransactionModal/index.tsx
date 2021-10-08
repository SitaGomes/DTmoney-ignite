import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { NewTransactionModalProps } from 'Interfaces'

import { Container, TransactionCategoryContainer, RadioBox } from 'Components/NewTransactionModal/style'

import CloseModal from 'Assets/SVG/close.svg'
import Income from 'Assets/SVG/income.svg'
import Outcome from 'Assets/SVG/outcome.svg'
import { useTransactionContext } from 'Hooks/useTransactionContext'


export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({isModalOPen, onRequestCloseModal}) => {
    
    const { createNewTransaction } = useTransactionContext()
    
    const [title, setTitle] = useState('' as string)
    const [price, setPrice] = useState(0 as number)
    const [category, setCategory] = useState('' as string)
    const [type, setType] = useState('deposit' as string)

    async function handleNewTransaction(e: FormEvent) {
        e.preventDefault()

        if (title.trim() === '' || category.trim() === '') {
            return alert('Por favor prencha todos os dados')
        }

        await createNewTransaction({
            category,
            price, 
            title,
            type
        })

        setTitle('')
        setPrice(0)
        setCategory('')
        setType('deposit')

        onRequestCloseModal()
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

                <input type="text" 
                    placeholder="Titulo" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                    type="number" placeholder="Preço"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />

                <TransactionCategoryContainer>
                    <RadioBox
                        onClick={() => {setType('deposit')}}
                        isSelected={type === 'deposit'}
                        selectedColor='green'
                    >
                        <img src={Income} alt="Entrada" />
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox
                        onClick={() => {setType('withdraw')}}
                        isSelected={type === 'withdraw'}
                        selectedColor='red'
                    >
                        <img src={Outcome} alt="Saída" />
                        <span>Saídas</span>
                    </RadioBox>
                    
                </TransactionCategoryContainer>

                <input 
                    type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}