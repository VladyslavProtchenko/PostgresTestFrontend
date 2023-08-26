import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'products',
    initialState: {
        products:[],
    },
    reducers: {
        setProduct(state,action){},
    },
})

export const { setProduct } = dataSlice.actions

export default dataSlice.reducer