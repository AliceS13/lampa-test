import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCategory } from '../../store/productsSlice'
import './categories.css'

const Categories = () => {
  const { categories, selectedCategory } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const selectCategory = (categoryId: string | null) => dispatch(setCategory(categoryId))

  return (
    <div className="categories wrap">
      {/* <pre>{JSON.stringify(basket, null, 2)}</pre> */}
      <div className="subtitle">Choose category</div>
      <div
        className={selectedCategory ? "category" : "category checked"}
        onClick={() => selectCategory(null)}
      >All products</div>
      {categories?.map((category, idx) => {
        return (
          <label
            className={category === selectedCategory ? "category checked" : "category"}
            key={idx}
            htmlFor={`category_${idx}`}
            onClick={() => selectCategory(category)}
          >
            <input
              type="radio"
              name="category"
              id={`category_${idx}`}
              checked={category === selectedCategory}
              onChange={() => selectCategory(category)}
              className="hidden"
            />
            {category}
          </label>
        )
      })}
    </div>
  )
}

export default Categories