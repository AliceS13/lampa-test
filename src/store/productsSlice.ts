import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../models/product"
import { dummyJsonSdk } from "../api/dummyJsonSdk"

type ProductsStateType = {
    products?: Product[],
    categories?: string[],
    isLoading: boolean
    error?: string
    selectedCategory: string | null
}

export const loadProducts = createAsyncThunk(
  "products/get",
  async function (_, { getState }) {
    const category = (getState() as { products: ProductsStateType }).products.selectedCategory

    return dummyJsonSdk.products.getByCategory(category)
  }
)

export const getCategories = createAsyncThunk("categories/get", dummyJsonSdk.category.getAll)

const initialState: ProductsStateType = {
  products: [],
  categories: [],
  error: "",
  isLoading: false,
  selectedCategory: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(loadProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false,
      state.error = ""
      state.products = payload.products
    })
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
    })
  }
})

export const { setCategory } = productsSlice.actions 

export default productsSlice.reducer