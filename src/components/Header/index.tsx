import {HeaderContainer, HeaderContent, NewTransactionsButton} from "./styles.ts";

import logoImg from '../../assets/Logo.svg';
import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";

function Header (){
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img
                        src={logoImg}
                        alt="logo da aplicação dois triangulos verdes a 45 graus um do outro apontando para direita"
                    />
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
                        </Dialog.Trigger>
                        <NewTransactionModal />
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}

export default Header;