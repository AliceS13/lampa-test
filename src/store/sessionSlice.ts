import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Cart, CartProduct } from '../models/cart'
import { UserResponse } from '../models/response'
import { dummyJsonSdk } from '../api/dummyJsonSdk'

type SessionSlice = {
  user?: UserResponse
  basket?: Cart
}

type PartCartProduct = {
  id: number,
  quantity?: number
}


export const loginUser = createAsyncThunk(
  'user/login',
  async function (userCredentials: { username: string, password: string }) {
    return dummyJsonSdk.user.login(userCredentials.username, userCredentials.password)
  }
)

export const addOrUpdateProduct = createAsyncThunk(
  'cart/addOrUpdateProduct',
  async (productToAddOrUpdate: PartCartProduct, { getState }) => {
    const { session } = getState() as { session: SessionSlice }
    const { basket } = session

    // such business logic looks complicated due to limitations of dummyjson api
    if (basket) {
      // clonning because basket is state
      let productsInCart = structuredClone(basket.products) as Array<PartCartProduct | CartProduct>
      const currentProduct = productsInCart.find((p) => p.id === productToAddOrUpdate.id)

      if (currentProduct) { // modifiyng quantity
        if (typeof productToAddOrUpdate.quantity === 'undefined') { // we are adding product which exist, so increment quantity
          currentProduct.quantity = currentProduct.quantity ? currentProduct.quantity + 1 : 1
        } else if (productToAddOrUpdate.quantity === 0) { // quantity becames zero, so remove product from cart
          productsInCart = productsInCart.filter((p) => p.id !== productToAddOrUpdate.id)
        } else { // just modify quantity
          currentProduct.quantity = productToAddOrUpdate.quantity
        }
      } else { // no this product in cart, so need to add
        productsInCart.push({ id: productToAddOrUpdate.id, quantity: 1 })
      }

      return dummyJsonSdk.cart.updateCartProducts(productsInCart)
    } else {
      return dummyJsonSdk.cart.addCartProduct(productToAddOrUpdate)
    }
  }
)

const cartRaw = sessionStorage.getItem('basket')
const cartFromSessionStorage = cartRaw ? JSON.parse(cartRaw) : undefined
const userRaw = sessionStorage.getItem('user')
const userFromSessionStorage = userRaw ? JSON.parse(userRaw) : undefined

const initialState: SessionSlice = {
  user: userFromSessionStorage,
  basket: cartFromSessionStorage
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined
      sessionStorage.removeItem('user')
    }
  },
  extraReducers(builder) {
    builder.addCase(addOrUpdateProduct.fulfilled, (state, { payload }) => {
      state.basket = payload
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload
    })
  },
})

export default sessionSlice.reducer
export const { logout } = sessionSlice.actions
