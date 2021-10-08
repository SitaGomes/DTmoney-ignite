import {createContext, useEffect, useState} from 'react'
import {Transaction} from 'Interfaces'
import { api } from 'Services/api'

export const TransactionContext = createContext<Transaction[]>([])

export const TransactionProvider: React.FC = ({children}) => {

    const [transactionsData, setTransactionsData] = useState<Transaction[]>([])

    useEffect(() => {
        
        api.get('transactions')
            .then((res) => setTransactionsData(res.data.transactions))
    
    }, [])

    return(
        <TransactionContext.Provider value={transactionsData}>
            {children}
        </TransactionContext.Provider>
    )
}