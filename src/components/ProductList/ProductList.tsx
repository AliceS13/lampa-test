import { useAppSelector } from "../../hooks/redux"
import ProductListItem from "../ProductListItem/ProductListItem"
import "./productList.css"

const ProductList = () => {
  const { products } = useAppSelector(state => state.products)

  return (
    <div className="product-list wrap">
      {products?.map(product => {
        return <ProductListItem product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductList
