import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../models/product'
import { ServerResponse } from '../../models/response'

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: build => ({
        getProducts: build.query<Product[], string>({
            query: () => ({
                url:  `products`,
                params: {
                    limit: 10
                }
            }),
            transformResponse: (response: ServerResponse<Product>) => response.products
        }),
    })
})

export const { useGetProductsQuery } = productsApi