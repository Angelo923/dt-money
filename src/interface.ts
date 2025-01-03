import {ReactNode} from "react";

export interface ITransaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createdAt: string;
}

export interface ITransactionsProvider {
    children: ReactNode;
}