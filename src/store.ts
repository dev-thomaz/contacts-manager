import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./features/contact/contact-slice";
import { modalReducer } from "./features/modal/modal-slice";
import { segmentReducer } from "./features/segments/segments-slice";
import { segmentSelectedReducer } from "./features/segmentSelected/segmentSelected-slice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        contacts: contactReducer,
        segments: segmentReducer,
        segmentSelected: segmentSelectedReducer
    }
})



export type RootState = ReturnType<typeof store.getState> 