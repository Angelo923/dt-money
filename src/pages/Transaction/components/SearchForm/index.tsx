import {SearchFormContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";

function SearchForm () {
    return (
        <SearchFormContainer>
            <input
                type="text"
                placeholder="Busque por transações"
            />
            <button type="submit">
                <MagnifyingGlass size="20" />
                Buscar
            </button>
        </SearchFormContainer>
    )
}

export default SearchForm;