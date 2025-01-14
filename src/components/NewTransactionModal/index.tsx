import * as Dialog from '@radix-ui/react-dialog';
import {CloseButton, Content, Overlay, TransactionType, TransactionTypeButton} from './styles.ts';
import {ArrowCircleDown, ArrowCircleUp, X} from 'phosphor-react';
import * as z from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {TransactionsContext} from "../../contexts/TransactionsContext.tsx";
import {useContextSelector} from "use-context-selector";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormImputs =z.infer<typeof newTransactionFormSchema>;

function NewTransactionModal() {
    const createTransaction  = useContextSelector(
        TransactionsContext,
        (context)=> {
            return context.createTransaction;
    });
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormImputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        }
    })

    async function handleCreateNewTransactionModal(data: NewTransactionFormImputs) {
        const {description, type, category, price} = data;

        await createTransaction({
                description,
                type,
                category,
                price,
            })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay/>

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransactionModal)}>
                    <input
                        type='text'
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    <input
                        type='number'
                        placeholder='Preço'
                        required
                        {...register('price', {valueAsNumber: true})}
                    />
                    <input
                        type='text'
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field })=> {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton
                                        variant='income'
                                        value='income'
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton
                                        variant='outcome'
                                        value='outcome'
                                    >
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                    >
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}

export default NewTransactionModal