import React from 'react'
import { Container } from 'Components/TransactionsTable/styles'

export const TransactionsTable: React.FC = () => {
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
