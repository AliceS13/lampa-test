import { useState } from "react"
import { useGetProductsCategoriesQuery, useGetProductsQuery } from "../../store/api/products.api"
import ProductListItem from "../ProductListItem/ProductListItem"
import "./productList.css"

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const { data, isLoading, isError } = useGetProductsQuery(selectedCategory)
  const { data: categoriesData } = useGetProductsCategoriesQuery("")

  const setAllCategories = () => {
    setSelectedCategory("")
  }

  return (
    <div>
      <div className="categories">
        <div className="subtitle">Choose category</div>
        <div
          className={selectedCategory === "" ? "category checked" : "category"}
          onClick={setAllCategories}
        >All products</div>
        {categoriesData?.map((category, idx) => {
          return (
            <>
              <label
                className={category === selectedCategory ? "category checked" : "category"}
                key={idx}
                htmlFor={`category_${idx}`}
              >
                <input
                  type="radio"
                  name="category"
                  id={`category_${idx}`}
                  checked={category === selectedCategory}
                  onChange={() => setSelectedCategory(category)}
                  className="hidden"
                />
                {category}
              </label>
            </>
          )
        })}
      </div>
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
