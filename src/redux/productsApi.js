import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl  = `http://localhost:8080/api/`;

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => `product`,
        }),

        createProduct: builder.mutation({
            query: (data) =>({
                url: 'product', 
                method: 'POST',
                body: data,
            })
        }),

        getOneProduct: builder.query({
            query: (id) => `product/${id}`,
        }),

        updateProduct: builder.mutation({
            query: (data) =>({
                url: 'product', 
                method: 'PUT',
                body: data,
            })
        }),
        
        deleteProduct: builder.mutation({
            query: (data) =>({
                url: 'product', 
                method: 'DELETE',
                body: data,
            })
        }),
    }),
})

export const { 
    useGetProductsQuery, 
    useCreateProductMutation, 
    useGetOneProductQuery, 
    useUpdateProductMutation, 
    useDeleteProductMutation 
} = productsApi;