import { Container } from 'Components/Dashboard/style'
import { Summary } from 'Components/Summary'
import { TransactionsTable } from 'Components/TransactionsTable'
import React from 'react'

export const Dashboard: React.FC = () => {

    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
