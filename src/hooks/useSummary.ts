import {useContext} from "react";
import {TransactionsContext} from "../contexts/TransactionsContext.tsx";

function useSummary() {
    const { transactions } = useContext(TransactionsContext)
    /*    Array de Objetos necessários
        {
            income: 0,
            outcome: 0,
            total: 0
        }*/
    return transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        },

        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )
}

export default useSummary;