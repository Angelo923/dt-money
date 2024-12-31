import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";
import Transaction from "./pages/Transaction";

function App() {
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Transaction />
        </ThemeProvider>
    )
}

export default App
