import {ITransaction} from "../interface.ts";

export interface ITransactionsContext {
    transactions: ITransaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}