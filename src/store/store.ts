import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'
import session from './sessionSlice'
import products from './productsSlice'

const storeBasketInSessionStorage: Middleware = () => next => action => {
  if (action.type.includes('cart/') && action.meta.requestStatus === 'fulfilled') {
    sessionStorage.setItem('basket', JSON.stringify(action.payload))
  }
  return next(action)
}

const storeUserInSessionStorage: Middleware = () => next => action => {
  if (action.type.includes('user/login') && action.meta.requestStatus === 'fulfilled') {
    sessionStorage.setItem('user', JSON.stringify(action.payload))
  }
  return next(action)
}

const rootReducer = combineReducers({
  session,
  products
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(storeBasketInSessionStorage).concat(storeUserInSessionStorage)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']