import { useEffect } from "react"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList/ProductList"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getCategories, loadProducts } from "../store/api/productsSlice"

const ProductsPage = () => {
  const { selectedCategory } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])
    
  useEffect(() => {
    dispatch(loadProducts())
  }, [selectedCategory])

  return (
    <>
      <Categories />
      <ProductList />
    </>
  )
}

export default ProductsPage