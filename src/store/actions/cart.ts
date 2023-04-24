import { ActionTypes, Product, CartItem, CartAction } from '../../types'

export const addToCart = (product: Product): CartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  }
}

export const removeFromCart = (item: CartItem): CartAction => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: item,
  }
}
