import { Cart, CartProduct } from "../../models/cart"
import { ProductsResponse, UserResponse } from "../../models/response"

const API_HOST = 'https://dummyjson.com/'

type PartCartProduct = {
  id: number,
  quantity?: number
}

function get<T>(path: string): Promise<T> {
  return fetch(API_HOST + path).then(r => r.json())
}

function put<T>(path: string, payload: any): Promise<T> {
  return fetch(API_HOST + path, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(r => r.json())
}

function post<T>(path: string, payload: any): Promise<T> {
  return fetch(API_HOST + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(r => r.json())
}

export const dummyJsonSdk = {
  products: {
    getByCategory(category: string | null) {
      const endpoint = `products/${category ? ("category" + "/" + category) : ""}`

      return get<ProductsResponse>(endpoint)
    }
  },
  category: {
    getAll() {
      return get<string[]>('products/categories')
    }
  },
  cart: {
    updateCartProducts(products: Array<CartProduct | PartCartProduct>) {
      // first basket because it's one reachable in API :)
      return put<Cart>('carts/1', {
        userId: 1,
        products
      })
    },
    addCartProduct(product: PartCartProduct) {
      return post<Cart>('carts/add', {
        userId: 1, 
        products: [product]
      })
    }
  },
  user: {
    login(username: string, password: string) {
      return post<UserResponse>('auth/login', {
        username,
        password
      })
    }
  }
}
