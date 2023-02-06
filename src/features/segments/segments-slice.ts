import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type modalTypeProps = 'create' | 'edit'

interface SegmentState {
    label: string,
    value: string,
}
const storageSegments = localStorage.getItem('@contactManager:SEGMENTS')
const initialState: SegmentState[] = storageSegments ? JSON.parse(storageSegments).sort(
    (a: SegmentState, b: SegmentState) => a.label.toLocaleLowerCase() > b.label.toLocaleLowerCase() ? 1 : ((b.label.toLocaleLowerCase() > a.label.toLocaleLowerCase()) ? -1 : 0))
    :
    [
        { label: 'ATIVOS', value: 'active' },
        { label: 'EXCLUÍDOS', value: 'deleted' },
    ].sort((a: SegmentState, b: SegmentState) => a.label > b.label ? 1 : ((b.label > a.label) ? -1 : 0))

export const segmentSlice = createSlice({
    name: 'segment',
    initialState,
    reducers: {
        handleCreateSegment: (state, { payload }: PayloadAction<SegmentState>) => {
            const label = payload.label.toUpperCase() as string;
            const newSegment = {
                value: payload.value.toUpperCase(),
                label: payload.label.toUpperCase(),
            } as SegmentState
            const checkNewSegment =  state.filter((segment) => segment.label.toUpperCase().indexOf(label) > -1)
           
            checkNewSegment.length < 1 && state.push(newSegment)
            state = state.sort(
                (a: SegmentState, b: SegmentState) => a.label.toLocaleLowerCase() > b.label.toLocaleLowerCase() ? 1 : ((b.label.toLocaleLowerCase() > a.label.toLocaleLowerCase()) ? -1 : 0))
            localStorage.setItem('@contactManager:SEGMENTS', JSON.stringify(state))
        },

    }
})

export const { handleCreateSegment } = segmentSlice.actions;
export const segmentReducer = segmentSlice.reducer;