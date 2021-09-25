export interface Transaction {
    title: string;
    price: number;
    createdAt: string;
    category: string;
    type: string
}

export interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export interface NewTransactionModalProps {
    isModalOPen: boolean;
    onRequestCloseModal: () => void;
}
