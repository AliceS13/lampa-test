import { Product } from '../../models/product'
import './productListItem.css'

const ProductListItem = ({ product }: { product: Product }) => {
    return (
        <div className="product">
            <div className="product-image">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-text">{product.description}</div>
            <div className="product-price">{product.price}$</div>
            <button className="button">Add to cart</button>
        </div>
    )
}

export default ProductListItem