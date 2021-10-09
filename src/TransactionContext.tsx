import {createContext, useEffect, useState} from 'react'
import {NewTransaction, Transaction, TransactionContextData} from 'Interfaces'
import { api } from 'Services/api'

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionProvider: React.FC = ({children}) => {

    const [transactionsData, setTransactionsData] = useState<Transaction[]>([])

    useEffect(() => {
        
        api.get('transactions')
            .then((res) => setTransactionsData(res.data.transactions))
    
    }, [])

    async function createNewTransaction(newTransaction: NewTransaction) {
        const response = await api.post('/transactions', {...newTransaction, createdAt: new Date()})
        
        const {transaction} = response.data
    
        setTransactionsData([...transactionsData, transaction])
    }

    return(
        <TransactionContext.Provider value={{transactionsData, createNewTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}