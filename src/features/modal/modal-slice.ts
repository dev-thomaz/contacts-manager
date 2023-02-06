import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ContactState } from "../contact/contact-slice"

export type modalTypeProps = 'create' | 'edit'

interface ModalState{
    showModal: boolean,
    modalType: modalTypeProps,
    contact?: ContactState,
}

const initialState: ModalState = {
    showModal: false,
    modalType: 'create',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleCreateContact: (state) => {
            state.showModal = true
            state.modalType = 'create'
        },
        handleEditContact: (state, action: PayloadAction<ContactState>) => {
            state.showModal = true
            state.modalType = 'edit'
            state.contact = action.payload
        },
        handleDismissModal: (state) => {
            state.showModal = false
        }
    }
})

export const {handleCreateContact, handleEditContact, handleDismissModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;