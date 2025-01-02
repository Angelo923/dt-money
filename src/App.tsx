import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './styles/themes/default.ts';
import {GlobalStyle} from './styles/global.ts';
import Transaction from './pages/Transaction';
import {TransactionsProvider} from "./contexts/TransactionsContext.tsx";

function App() {
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <TransactionsProvider>
                <Transaction />
            </TransactionsProvider>
        </ThemeProvider>
    )
}

export default App
