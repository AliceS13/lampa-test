import { useAppDispatch } from '../../hooks/redux'
import { Product } from '../../models/product'
import { addOrUpdateProduct } from '../../store/sessionSlice'
import './productListItem.css'

const ProductListItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()

  const onAddToCart = () => {
    dispatch(addOrUpdateProduct({ id: product.id }))
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-text">{product.description}</div>
      <div className="product-price">{product.price}$</div>
      <button className="button" onClick={onAddToCart}>Add to cart</button>
    </div>
  )
}

export default ProductListItem