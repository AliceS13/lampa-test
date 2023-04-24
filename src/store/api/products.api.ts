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
            query: (category: string) => ({
                url:  `products/${category ? 'category/' + category : ""}`,
                params: {
                    limit: 20
                }
            }),
            transformResponse: (response: ServerResponse<Product>) => response.products
        }),
        getProductsCategories: build.query<string[], string> ({
            query: () => ({
                url: 'products/categories'
            })
        }),
    })
})

export const { useGetProductsQuery, useGetProductsCategoriesQuery } = productsApi