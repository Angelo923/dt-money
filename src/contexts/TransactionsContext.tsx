import {createContext, useEffect, useState} from 'react';
import {ITransaction, ITransactionsProvider} from '../interface.ts';
import {ICreateTransaction, ITransactionsContext} from "./interface.ts";
import {api} from "../lib/axios.ts";

export const TransactionsContext = createContext({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    async function fetchTransactions (query?: string) {
        const response = await api.get('transactions', {
           params: {
               _sort: 'createdAt',
               _order: 'desc',
               q: query,
           }
        });

        setTransactions(response.data);

    }

    async function createTransaction (data: ICreateTransaction) {
        const {description, type, category, price} = data;

        const response = await api.post('transactions', {
            //...data, pode ser feito assim, para não precisar passar cada campo
            description,
            type,
            category,
            price,
            createdAt: new Date(),
        })

        setTransactions(state => [response.data, ...state]);
    }

    useEffect(()=> {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
                createTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}