import {createContext, useEffect, useState} from 'react';
import {ITransaction, ITransactionsProvider} from '../interface.ts';
import {ITransactionsContext} from "./interface.ts";


export const TransactionsContext = createContext({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    async function fetchTransactions (query?: string) {
        const url = new URL('http://localhost:3000/transactions')

        if (query) {
           url.searchParams.append('q', query);
        }

        const response = await fetch(url);
        const data = await response.json();

        setTransactions(data);

    }
    useEffect(()=> {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}