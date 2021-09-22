export interface TransactionsData {
    title: string;
    price: number;
    data: string;
    category: string;
}

export interface HeaderProps {
    onOpenNewTransaction: () => void;
}