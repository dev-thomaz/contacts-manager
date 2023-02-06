import { createSlice, current, PayloadAction } from "@reduxjs/toolkit"


export interface SegmentSelectedState{
   label:string,
   value:string,
}

const initialState: SegmentSelectedState = {} as SegmentSelectedState


   

export const segmentSelectedSlice = createSlice({
    name: 'segmentSelected',
    initialState,
    reducers: {
        handleChangeSegmentSelected: (state, {payload}: PayloadAction<SegmentSelectedState>) => {
           return state = payload
        }
    }
})

export const {handleChangeSegmentSelected} = segmentSelectedSlice.actions;
export const segmentSelectedReducer = segmentSelectedSlice.reducer;