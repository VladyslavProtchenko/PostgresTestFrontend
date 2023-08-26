import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './productsApi'
import { receiptApi } from './receiptApi'
import { receiptProductsApi } from './receiptProductsApi'
import productsReducer from './productsSlice'
import receiptReducer from './receiptSlice'
import receiptProductsReducer from './receiptProductsSlice'

export const store = configureStore({

    reducer: {
        products: productsReducer,
        receipt: receiptReducer,
        receiptProducts: receiptProductsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [receiptApi.reducerPath]: receiptApi.reducer,
        [receiptProductsApi.reducerPath]: receiptProductsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(receiptApi.middleware)
            .concat(receiptProductsApi.middleware),
})