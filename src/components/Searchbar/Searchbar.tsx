import { useDispatch } from "react-redux";
import { handleChangeGroup, handleSearchContact } from "../../features/contact/contact-slice";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { Container } from "./styles";

export function Searchbar(){
    const dispatch = useDispatch()
    const segmentSelected = useAppSelector((state: RootState) => state.segmentSelected)

    function handleKeyup(value: React.KeyboardEvent<HTMLInputElement>){
        let payload = (value.target as HTMLInputElement).value;
        payload !== '' ? dispatch(handleSearchContact(payload)) :  dispatch(handleChangeGroup(segmentSelected.value))
    }

    return(
        <Container  >
        <input placeholder="Digite o nome de um contato" type="text" onKeyUp={handleKeyup}  />
       
        
       </Container>
    )
}