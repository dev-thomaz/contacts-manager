import { useDispatch } from "react-redux";
import { handleDismissModal } from "../../features/modal/modal-slice";
import { Container, FormContainer, InputsArea, ModalActionButton, ModalContainer, ModalFooter } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { ContactState, handleClearContactSelected, handleCreateNewContact, handleEditContact } from "../../features/contact/contact-slice";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { useEffect, useState } from "react";




type ModalTypeProps = 'create' | 'edit'
type ModalProps = {
    showModal: boolean,
    type?: ModalTypeProps,
}

export function Modal({ showModal = false, type }: ModalProps) {
    const contacts = useAppSelector((state: RootState) => state.contacts)
    const modal = useAppSelector((state: RootState) => state.modal)
    const segments = useAppSelector((state: RootState) => state.segments)
    const dispatch = useDispatch()
    const [nameField, setNameField] = useState('');
    const [surnameField, setSurameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [groupField, setGroupField] = useState(segments[0].value);




    useEffect(() => {
        setGroupField(segments[0].value)
        if (type === 'edit') {
            const { contact } = contacts;
            setNameField(contact.name)
            contact.surname && setSurameField(contact.surname)
            setEmailField(contact.email)
            setGroupField(contact.group)
            
        }
    }, [modal])

 

    function handleSubmitContact() {
        const payload = {
           name: nameField, 
           surname: surnameField,
           group: groupField,
           email: emailField
        } as ContactState
        
        dispatch(handleCreateNewContact(payload))
        dispatch(handleDismissModal());
        setNameField('')
        setSurameField('')
        setEmailField('')
        setGroupField('')
    }

    function handleEditContactSubmit() {
        const payload = {
            name: nameField, 
            surname: surnameField,
            group: groupField,
            email: emailField
         } as ContactState
        
        dispatch(handleEditContact(payload))
        dispatch(handleClearContactSelected())
        handleDismiss()
    }

    function handleDismiss() {
        dispatch(handleDismissModal())
        dispatch(handleClearContactSelected())
        setNameField('')
        setSurameField('')
        setEmailField('')
        setGroupField('')
    }

    function disableButtonRule() {
        return (nameField === '' || surnameField === '' || emailField === '' )
    }

    return (
        <Container show={showModal}>
            <ModalContainer>
                {type === "create" ? <h2>Criar Contato</h2>
                    : <h2>editar Contato</h2>
                }

                <FormContainer onSubmit={type === 'create' ? handleSubmitContact : handleEditContactSubmit}>
                    <InputsArea>
                        <span>nome</span>
                        <input type="text" placeholder="Nome" name="name" value={nameField} onChange={e => setNameField(e.target.value)} />
                        <span>sobrenome</span>
                        <input type="text" placeholder="Sobrenome" name="surname" value={surnameField} onChange={e => setSurameField(e.target.value)} />
                        <span>email</span>
                        <input type="text" placeholder="email" name="email" value={emailField} onChange={e => setEmailField(e.target.value)} />
                        <span>grupo</span>
                        <select  value={groupField} name="group" onChange={e => setGroupField(e.target.value)} >
                                   {segments.map((segment) => {
                                    const {value, label} = segment
                                    return(
                                        <option key={value}  value={value}>{label}</option>
                                    )
                                   })}
                                </select>
                    </InputsArea>

                    <ModalFooter>
                        <ModalActionButton color={defaultTheme.primary} type="submit" disabled={disableButtonRule()} >
                          {type === 'create' ? 'Criar' : 'Editar'}
                        </ModalActionButton>
                        <ModalActionButton type="button" color={defaultTheme["red-700"]} onClick={handleDismiss} >
                            <span>Cancelar</span>
                        </ModalActionButton>
                    </ModalFooter>
                </FormContainer>

            </ModalContainer>
        </Container>
    )
}