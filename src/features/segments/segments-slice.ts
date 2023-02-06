import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type modalTypeProps = 'create' | 'edit'

interface SegmentState{
   label:string,
   value:string,
}

const initialState: SegmentState[] = [
    {label: 'Ativos', value: 'active'},
    {label: 'Excluídos', value: 'deleted'},
].sort((a: SegmentState, b: SegmentState) => a.label > b.label ? 1 : ((b.label > a.label) ? -1 : 0))

export const segmentSlice = createSlice({
    name: 'segment',
    initialState,
    reducers: {
        handleCreateSegment: (state, {payload}: PayloadAction<SegmentState>) => {
           state.push(payload)

           localStorage.setItem('@contactManager:SEGMENTS', JSON.stringify(state))
        },
        
    }
})

export const {handleCreateSegment} = segmentSlice.actions;
export const segmentReducer = segmentSlice.reducer;