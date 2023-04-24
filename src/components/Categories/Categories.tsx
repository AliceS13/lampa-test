import { useState } from "react"
import { useGetProductsCategoriesQuery } from "../../store/api/products.api"
import './categories.css'

const Categories = () => {
    const { data } = useGetProductsCategoriesQuery("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    
    const setAllCategories = () => {
        setSelectedCategory("")    
    }

    return (
        <div className="categories">
            <div className="subtitle">Choose category</div>
            <div 
                className={selectedCategory === "" ? "category checked" : "category"}
                onClick={setAllCategories}
            >All products</div>
            {data?.map((category, idx) => {
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
    )
}

export default Categories