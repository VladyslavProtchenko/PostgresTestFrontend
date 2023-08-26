import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'receipt',
    initialState: {
        currentReceipt:null,
        receipts:[],
    },
    reducers: {
        setReceipt(state,action){
            state.currentReceipt = action.payload
        },
    },
})

export const { setReceipt,setFirstProduct } = dataSlice.actions
export default dataSlice.reducer


