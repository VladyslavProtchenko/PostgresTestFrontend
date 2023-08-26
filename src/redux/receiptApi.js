import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl  = `http://localhost:8080/api/`;

export const receiptApi = createApi({
    reducerPath: 'receiptApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({

        getReceipts: builder.query({
            query: () => `receipt`,
        }),

        createReceipt: builder.mutation({
            query: (data) =>({
                url: 'receipt', 
                method: 'POST',
                body: data,
            })
        }),

        getOpenReceipt: builder.query({
            query: () => `receipt/open`,
        }),

        getOneReceit: builder.query({
            query: (id) => `receipt/${id}`,
        }),

        updateReceipt: builder.mutation({
            query: (data) =>({
                url: 'receipt', 
                method: 'PUT',
                body: data,
            })
        }),
        
        deleteReceipt: builder.mutation({
            query: (data) =>({
                url: 'receipt', 
                method: 'DELETE',
                body: data,
            })
        }),
    }),
})

export const { 
    useGetReceiptsQuery, 
    useCreateReceiptMutation, 
    useGetOneReceiptQuery, 
    useGetOpenReceiptQuery,
    useUpdateReceiptMutation, 
    useDeleteReceiptMutation 
} = receiptApi;