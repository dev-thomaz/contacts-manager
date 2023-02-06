import { useDispatch } from "react-redux";
import { PlusIcon, UserIcon } from "../svg";
import { AddContactButton, AddContactText, Container, Content, TitleContent } from "./styles";
import { handleCreateContact } from "../../features/modal/modal-slice";
export function Header(){
const dispatch = useDispatch()
function handleCLickCreate(){
     dispatch(handleCreateContact())
}

    return(
        <Container>
            <Content>
                <TitleContent>
                <UserIcon fill="#fff"></UserIcon>
            <h2>Contact Manager</h2>
                </TitleContent>
                <AddContactButton onClick={handleCLickCreate}>
               <PlusIcon width="30px" height="30px" />
               <AddContactText>
               Adicionar contato
               </AddContactText>
                </AddContactButton>
            </Content>
        </Container>
    )
}