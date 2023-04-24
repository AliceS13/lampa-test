import { Product } from "./product"

export interface ServerResponse<T> {
    products: T[]
    total: number
    skip: number
    limit: number
}

