import React, { useEffect, useState } from 'react'
import { Container } from 'Components/TransactionsTable/styles'

import {TransactionsData} from 'Interfaces'
import { api } from 'Services/api'

export const TransactionsTable: React.FC = () => {

    const [TransactionsData, setTransactionsData] = useState<TransactionsData[]>([])

    useEffect(() => {
        
        api.get('transactions')
            .then((res) => setTransactionsData(res.data))
    
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
                    <tr>
                        <td>Criação de posts para Social Media</td>
                        <td className="deposit">R$400,00</td>
                        <td>Entrada</td>
                        <td>20/09/2021</td>
                    </tr>

                    <tr>
                        <td>Criação de website</td>
                        <td className="deposit">R$1000,00</td>
                        <td>Entrada</td>
                        <td>20/09/2021</td>
                    </tr>

                    <tr>
                        <td>Subway</td>
                        <td className="withdraw">- R$200,00</td>
                        <td>Saída</td>
                        <td>20/09/2021</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    )
}
