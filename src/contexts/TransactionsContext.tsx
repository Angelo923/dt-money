import {createContext, useEffect, useState} from 'react';
import {ITransaction, ITransactionsContext, ITransactionsProvider} from '../interface.ts';


export const TransactionsContext = createContext({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    async function loadTransactions (){
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();

        setTransactions(data);

    }
    useEffect(()=> {
        loadTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}