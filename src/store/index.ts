import { configureStore } from '@reduxjs/toolkit'
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { productsApi } from './api/products.api'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: curryGetDefaultMiddleware => curryGetDefaultMiddleware().concat(productsApi.middleware)
})

// import { combineReducers, createStore } from 'redux';
// import cartReducer from './reducers/cart'
// import { Product } from '../types';

// export interface RootState {
//   products: Product[];
//   cart: ReturnType<typeof cartReducer>;
// }

// const rootReducer = combineReducers({
//   products: (state: Product[] = [], action: { type: any; payload: any; }) => {
//     switch (action.type) {
//       case 'SET_PRODUCTS':
//         return action.payload;
//       default:
//         return state;
//     }
//   },
//   cart: cartReducer,
// });

// const store = createStore(rootReducer);

// export default store;
