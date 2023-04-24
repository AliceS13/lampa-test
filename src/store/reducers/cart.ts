import { ActionTypes, CartState, CartAction } from '../../types';

const initialState: CartState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const existingCartItem = state.items.find((item) => item.id === action.payload.id);

            if (existingCartItem) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === existingCartItem.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    total: state.total + existingCartItem.price,
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    total: state.total + action.payload.price,
                };
            }
        case ActionTypes.REMOVE_FROM_CART:
            const itemToRemove = state.items.find((item) => item.id === action.payload.id);

            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    return {
                        ...state,
                        items: state.items.map((item) =>
                            item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
                        ),
                        total: state.total - itemToRemove.price,
                    };
                } else {
                    return {
                        ...state,
                        items: state.items.filter((item) => item.id !== itemToRemove.id),
                        total: state.total - itemToRemove.price,
                    };
                }
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default cartReducer;
