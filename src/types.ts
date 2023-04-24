import { Product } from "./models/product"

export interface CartItem extends Product {
    quantity: number
}

export interface CartState {
    items: CartItem[]
    total: number
}

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export interface AddToCartAction {
    type: ActionTypes.ADD_TO_CART
    payload: Product
}

export interface RemoveFromCartAction {
    type: ActionTypes.REMOVE_FROM_CART
    payload: CartItem
}

export type CartAction = AddToCartAction | RemoveFromCartAction


