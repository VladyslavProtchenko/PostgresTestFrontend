import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl  = `http://localhost:8080/api/`;

export const receiptProductsApi = createApi({
    reducerPath: 'receiptProductsApi',
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({

        getReceiptProducts: builder.query({
            query: (id) => `receiptProduct?id=${id}`,
            providesTags: (result) =>
                result
                ? [...result?.map(({ id }) => ({ type: 'Products', id })), 'Products']
                : ['Products'], 
        }),

        createReceiptProduct: builder.mutation({
            query: (data) =>({
                url: 'receiptProduct', 
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),

        getOneReceiptProduct: builder.query({
            query: (id) => `receiptProduct/${id}`,
        }),

        updateReceiptProduct: builder.mutation({
            query: (data) =>({
                url: 'receiptProduct', 
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),
        
        deleteReceiptProduct: builder.mutation({
            query: (data) =>({
                url: 'receiptProduct', 
                method: 'DELETE',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),
    }),
})

export const { 
    useGetReceiptProductsQuery, 
    useCreateReceiptProductMutation, 
    useGetOneReceiptProductQuery, 
    useUpdateReceiptProductMutation, 
    useDeleteReceiptProductMutation 
} = receiptProductsApi;