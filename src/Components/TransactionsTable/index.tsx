import React, { useEffect, useState } from 'react'
import { Container } from 'Components/TransactionsTable/styles'

import {Transaction} from 'Interfaces'
import { api } from 'Services/api'

export const TransactionsTable: React.FC = () => {

    const [transactionsData, setTransactionsData] = useState<Transaction[]>([])

    useEffect(() => {
        
        api.get('transactions')
            .then((res) => setTransactionsData(res.data.transactions))
    
    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    { transactionsData.map((transaction: Transaction, index) => (

                        <tr key={index}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'deposit' ? `R$ ${transaction.price},00` : `- R$ ${transaction.price},00`}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    
                    ))}

                </tbody>

            </table>
        </Container>
    )
}
