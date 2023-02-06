import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Contact, Header, Modal, Searchbar, Segment } from "../../components";
import { ContactState } from "../../features/contact/contact-slice";
import { handleChangeGroup, handleCreateMockupContacts } from "../../features/contact/contact-slice";
import { handleCreateSegment } from "../../features/segments/segments-slice";
import { handleChangeSegmentSelected, SegmentSelectedState } from "../../features/segmentSelected/segmentSelected-slice";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ContactArea, Container, CreateNewSegmentForm, EmptyContactList, SegmentArea } from "./styles";

export function Home() {
    const showModal = useAppSelector((state: RootState) => state.modal.showModal);
    const modalType = useAppSelector((state: RootState) => state.modal.modalType);
    const contacts = useAppSelector((state: RootState) => state.contacts)
    const segments = useAppSelector((state: RootState) => state.segments)
    const segmentSelected = useAppSelector((state: RootState) => state.segmentSelected)
    const [creatingNewSegment, setCreatingNewSegment] = useState(false)
    const [newSegmentInputValue, setNewSegmentInputValue] = useState<string>('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleChangeSegmentSelected(segmentSelected));
        dispatch(handleChangeGroup(segmentSelected.value))
    }, [contacts.contacts])
    useEffect(() => {
        dispatch(handleChangeSegmentSelected(segments[0]));
        if (contacts.contacts.length < 1) {
            dispatch(handleCreateMockupContacts())
        }
    }, [])

    function createNewGroup(){
       const payload = {label: newSegmentInputValue, value: newSegmentInputValue} as SegmentSelectedState;
       if(payload){
           dispatch(handleCreateSegment(payload))
        }
        setCreatingNewSegment(false)
        setNewSegmentInputValue('')
    }

    return (
        <>
            <Modal showModal={showModal} type={modalType} />
            <Header />
            <Container>
                <SegmentArea>
                    <Segment />
                    <button onClick={() => setCreatingNewSegment(true)}>Criar novo grupo</button>
                </SegmentArea>
                {
                        creatingNewSegment && 
                        <CreateNewSegmentForm>
                        <input placeholder="Digite o nome do novo grupo" value={newSegmentInputValue} onChange={(e) => setNewSegmentInputValue(e.target.value)} />
                        <button onClick={() => createNewGroup()} disabled={newSegmentInputValue === ''}>criar</button>
                        <button onClick={() => setCreatingNewSegment(false)}>cancelar</button>
                        </CreateNewSegmentForm>
                    }
                <Searchbar />
                <ContactArea>

                    {contacts.filteredContacts.length > 0 ?
                        contacts.filteredContacts.map((contact: ContactState) => {
                            const { name, email, id } = contact
                            return (
                                <Contact
                                    name={name}
                                    email={email}
                                    key={id}
                                    id={id}
                                    picture={`https://xsgames.co/randomusers/assets/avatars/pixel/${id}.jpg`}
                                />
                            )
                        }) : <EmptyContactList>
                            <span>oops! nenhum contato encontrado :(</span>
                        </EmptyContactList>
                    }
                </ContactArea>

            </Container>
        </>
    )
}