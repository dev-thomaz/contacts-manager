import { useDispatch } from "react-redux";
import { ContactState, handleGetContactById } from "../../features/contact/contact-slice";
import { handleEditContact } from "../../features/modal/modal-slice";
import { ActionArea, ContactImg, ContactName, Container } from "./styles";

type ContactProps = {
    name?: string;
    email?: string;
    group?: string;
    picture?: string;
    id?:number;
}
export function Contact({name = 'Nome', email = 'email', group = 'ativos', picture = 'https://xsgames.co/randomusers/avatar.php?g=male', id= 0}: ContactProps){
    const dispatch = useDispatch()
    function handleCLickEdit(){
        const contact: ContactState = {
            name,
            group,
            email,
            id
        }
        dispatch(handleGetContactById(id))
         dispatch(handleEditContact(contact))
    }
    return(
      <Container>
        <ContactImg>
        <img src={picture} alt="" />
        </ContactImg>
        <ContactName>
            <span> {name}  </span>
            <span> {email} </span>
        </ContactName>

    <ActionArea onClick={handleCLickEdit}>
        <span>Editar</span>
    </ActionArea>
      </Container>
    )
}