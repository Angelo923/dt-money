import {SearchFormContainer} from './styles.ts';
import {MagnifyingGlass} from 'phosphor-react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {TransactionsContext} from "../../../../contexts/TransactionsContext.tsx";
import {useContextSelector} from "use-context-selector";
import {memo} from "react";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormImputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent () {
    const fetchTransactions = useContextSelector(
        TransactionsContext, (context) => {
        return context.fetchTransactions;
        },
    );

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormImputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormImputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type='text'
                placeholder='Busque por transações'
                {...register('query')}
            />
            <button
                type='submit'
                disabled={isSubmitting}
            >
                <MagnifyingGlass size='20' />
                Buscar
            </button>
        </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormComponent);