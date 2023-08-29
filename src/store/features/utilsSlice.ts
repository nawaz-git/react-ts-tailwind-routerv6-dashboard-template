import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sideBarStatus: true
}

export const utilsSlice = createSlice({
    name: 'utilsReducer',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sideBarStatus = !state.sideBarStatus
        }
    }
})

export const { toggleSidebar } = utilsSlice.actions
export default utilsSlice.reducer