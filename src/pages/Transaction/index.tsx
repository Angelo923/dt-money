import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {PriceHighLight, TransactionsContainer, TransactionsTable} from "./styles.ts";

function Transactions (){
    return (
        <div>
            <Header/>
            <Summary />

            <TransactionsContainer>
                <SearchForm/>

                <TransactionsTable>
                    <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighLight variant="income">
                            R$ 12.000,00
                            </PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>30/12/2024</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburguer</td>
                        <td>
                            <PriceHighLight variant="outcome">
                               - R$ 59,00
                            </PriceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>31/12/2024</td>
                    </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

export default Transactions;

