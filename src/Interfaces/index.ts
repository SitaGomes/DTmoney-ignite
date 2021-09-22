export interface TransactionsData {
    title: string;
    price: number;
    data: string;
    category: string;
}

export interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export interface NewTransactionModalProps {
    isModalOPen: boolean;
    onRequestCloseModal: () => void;
}