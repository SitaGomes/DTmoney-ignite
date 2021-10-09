import { useContext } from "react"
import { TransactionContext } from "TransactionContext"

export function useTransactionContext() {
    const value = useContext(TransactionContext)

    return value
}