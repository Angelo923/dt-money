import {useCallback, useEffect, useState} from 'react';
import {ITransaction, ITransactionsProvider} from '../interface.ts';
import {ICreateTransaction, ITransactionsContext} from "./interface.ts";
import {api} from "../lib/axios.ts";
import {createContext} from "use-context-selector";

export const TransactionsContext = createContext({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        });

        setTransactions(response.data);

        },
        [],
    )

    const createTransaction = useCallback(async (data: ICreateTransaction) => {
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
        },
        [],
    )

    useEffect(()=> {
        fetchTransactions()
    }, [fetchTransactions])

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