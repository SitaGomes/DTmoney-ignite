import React, { useContext } from 'react'
import { Container } from 'Components/Summary/style'

import Income from 'Assets/SVG/income.svg'
import Outcome from 'Assets/SVG/outcome.svg'
import Total from 'Assets/SVG/total.svg'
import { TransactionContext } from 'TransactionContext'

export const Summary: React.FC = () => {

    const {transactionsData} = useContext(TransactionContext)

    const summary = transactionsData.reduce((acc, transaction) => {
        
        switch(transaction.type) {
            case 'deposit':
                acc.deposit += transaction.price
                acc.total += transaction.price
                break

            case 'withdraw':
                acc.withdraw += transaction.price
                acc.total -= transaction.price
                break

            default: 
                break 
        }

        return acc
        
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })



    return (
        
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Income} alt="Entradas" />
                </header>
                <strong>   
                    {
                        new Intl.NumberFormat('pt-Br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposit)
                    }
                </strong>
            </div>
            
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Outcome} alt="Saídas" />
                </header>
                <strong> 
                    -  
                    {
                        new Intl.NumberFormat('pt-Br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraw)
                    }
                </strong>
            </div>
            
            <div>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Saídas" />
                </header>
                <strong>   
                    {
                        new Intl.NumberFormat('pt-Br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>

        </Container>
    )
}
