import Header from '../../components/Header';
import Summary from '../../components/Summary';
import {PriceHighLight, TransactionsContainer, TransactionsTable} from './styles.ts';
import {dateFormatter, priceFormatter} from "../../utils/formatter.ts";
import {TransactionsContext} from "../../contexts/TransactionsContext.tsx";
import {useContextSelector} from "use-context-selector";
import {SearchForm} from "./components/SearchForm";

function Transactions(){
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    })

    return (
        <div>
            <Header/>
            <Summary />

            <TransactionsContainer>
                <SearchForm/>

                <TransactionsTable>
                    <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                            <td width='50%'>{transaction.description}</td>
                                <td>
                                    <PriceHighLight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

export default Transactions;

