import {ITransaction} from "../interface.ts";

export interface ITransactionsContext {
    transactions: ITransaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: ICreateTransaction) => Promise<void>;
}

export interface ICreateTransaction {
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
}