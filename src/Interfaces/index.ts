export interface TransactionContextData {
    transactionsData: Transaction[],
    createNewTransaction: (newTransaction: NewTransaction) => Promise<void>,
}

export interface Transaction {
    title: string;
    price: number;
    createdAt: string;
    category: string;
    type: string
}

export type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>

export interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export interface NewTransactionModalProps {
    isModalOPen: boolean;
    onRequestCloseModal: () => void;
}
