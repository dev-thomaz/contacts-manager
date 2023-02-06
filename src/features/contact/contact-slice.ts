import { createSlice, current, PayloadAction, } from "@reduxjs/toolkit"

export interface ContactState {
    name: string,
    surname?: string,
    email: string,
    group: string,
    id?: number,
}
const storagedContacts = localStorage.getItem('@contactManager:CONTACTS');
const initialState = {
    contacts: [] as ContactState[],
    filteredContacts: [] as ContactState[],
    contact: {} as ContactState,
}

initialState.contacts = storagedContacts ? JSON.parse(storagedContacts) as ContactState[] : []

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        handleCreateNewContact: (state, { payload }: PayloadAction<ContactState>) => {

            let newContact = payload
            const nameWords = newContact.name.split(' ')
            for (let i = 0; i < nameWords.length; i++) {
                nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].slice(1);
            }
            newContact.name = nameWords.join(' ')
            const surnameWords = newContact.surname ? newContact.surname.split(' ') : []
            for (let i = 0; i < surnameWords.length; i++) {
                surnameWords[i] = surnameWords[i][0].toUpperCase() + surnameWords[i].slice(1);
            }
            newContact.surname = newContact.surname ? surnameWords.join(' ')  : '';
            newContact.id = state.contacts.length + 1
            state.contacts.push(payload)
            localStorage.setItem('@contactManager:CONTACTS', JSON.stringify([]))
            localStorage.setItem('@contactManager:CONTACTS', JSON.stringify(state.contacts.sort((a: ContactState, b: ContactState) => a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))))
        },
        handleChangeGroup: (state, { payload }: PayloadAction<string>) => {
            state.filteredContacts = state.contacts.filter((contact) => contact.group === payload).sort((a: ContactState, b: ContactState) => a.name > b.name ? 1 : -1)
        },
        handleGetContactById: (state, { payload }: PayloadAction<number>) => {
            state.contact = state.contacts.find((cntct: ContactState) => cntct.id === payload) as ContactState

        },
        handleClearContactSelected: (state) => {
            state.contact = {} as ContactState
        },
        handleEditContact: (state, { payload }: PayloadAction<ContactState>) => {
            let contactpayload = payload
            const nameWords = contactpayload.name.split(' ')
            for (let i = 0; i < nameWords.length; i++) {
                nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].slice(1);
            }
            contactpayload.name = nameWords.join(' ')
            const surnameWords = contactpayload.surname ? contactpayload.surname.split(' ') : []
            for (let i = 0; i < surnameWords.length; i++) {
                surnameWords[i] = surnameWords[i][0].toUpperCase() + surnameWords[i].slice(1);
            }
            contactpayload.surname = contactpayload.surname ? surnameWords.join(' ')  : '';
            contactpayload.id = state.contact.id;
           const i = state.contacts.findIndex((contact) => contact.id === contactpayload.id) 
           state.contacts[i] = contactpayload;
           localStorage.setItem('@contactManager:CONTACTS', JSON.stringify([]))
           localStorage.setItem('@contactManager:CONTACTS', JSON.stringify(state.contacts.sort((a: ContactState, b: ContactState) => a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))))
        },
        handleCreateMockupContacts: (state) => {
            const contactsStateStorage = localStorage.getItem('@contactManager:CONTACTS')
            if (!contactsStateStorage?.length) {
            [{ name: 'Thomaz', surname: 'Bittencourt', email: 'dev.thomaz@gmail.com', group: 'active', id: 1 },
            { name: 'Theo', surname: 'Arena', email: 'theo.arena@evolutto.com', group: 'active', id: 3 },
            { name: 'Omar', surname: 'Alves', email: 'omar.alves@evolutto.com', group: 'active', id: 2 },
            { name: 'Marines', surname: 'Artigas', email: 'marines.artigas@templum.com.br', group: 'active', id: 4 },].map((contact) => {
                state.contacts.push(contact)
            })
                localStorage.setItem('@contactManager:CONTACTS', JSON.stringify(state.contacts))
            }
        },

        handleSearchContact: (state, {payload}: PayloadAction<string>) => {
          
                const filter = payload.toUpperCase();
                state.filteredContacts = state.contacts.filter((contact) => contact.name.toUpperCase().indexOf(filter) > -1)
               
            
        }

    }
})

export const { handleCreateNewContact, handleChangeGroup, handleGetContactById, handleCreateMockupContacts, handleClearContactSelected, handleEditContact, handleSearchContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;