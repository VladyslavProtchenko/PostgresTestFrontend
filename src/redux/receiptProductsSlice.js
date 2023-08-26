import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'receiptProduct',
    initialState: {
        receiptProducts:[]
    },
    reducers: {
        setreceiptProducts(state,action){
            state.receiptProducts = action.payload
        },
    },
})

export const { setreceiptProducts } = dataSlice.actions
export default dataSlice.reducer

