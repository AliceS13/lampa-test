import { Product } from "./product"

export type Pagination = {
  total: number
  skip: number
  limit: number
}

export type ProductsResponse = Pagination & {
  products: Product[]
}

export type UserResponse = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}
