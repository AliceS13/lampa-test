import { useGetProductsQuery } from "../../store/api/products.api"
import ProductListItem from "../ProductListItem/ProductListItem"
import "./productList.css"

const ProductList = () => {
  const { data, isLoading, isError } = useGetProductsQuery('')
  console.log(data)

  return (
    <div>
      {isLoading && <span>Loading products...</span>}
      {isError && <span className="error">Something went wrong...</span>}
      <div className="product-list">
        {data?.map(product => {
          return <ProductListItem product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default ProductList
