import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Contact, Header, Modal, Searchbar, Segment } from "../../components";
import { ContactState } from "../../features/contact/contact-slice";
import { handleChangeGroup, handleCreateMockupContacts } from "../../features/contact/contact-slice";
import { handleChangeSegmentSelected } from "../../features/segmentSelected/segmentSelected-slice";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ContactArea, Container, EmptyContactList } from "./styles";

export function Home() {
    const showModal = useAppSelector((state: RootState) => state.modal.showModal);
    const modalType = useAppSelector((state: RootState) => state.modal.modalType);
    const contacts = useAppSelector((state: RootState) => state.contacts)
    const segments = useAppSelector((state: RootState) => state.segments)
    const segmentSelected = useAppSelector((state: RootState) => state.segmentSelected)
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

    return (
        <>
            <Modal showModal={showModal} type={modalType} />
            <Header />
            <Container>
                <Segment />
                <Searchbar />
                <ContactArea>

                    {contacts.filteredContacts.length > 0 ?
                        contacts.filteredContacts.map((contact: ContactState) => {
                            const { name, email, id, surname } = contact
                            return (
                                <Contact
                                    name={name}
                                    email={email}
                                    key={id}
                                    id={id}
                                    surname={surname}
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