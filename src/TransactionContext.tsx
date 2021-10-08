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

    function createNewTransaction(newTransaction: NewTransaction) {

        api.post('/transactions', newTransaction)
    }

    return(
        <TransactionContext.Provider value={{transactionsData, createNewTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}