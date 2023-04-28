import { useAppDispatch } from "../../hooks/redux"
import { CartProduct } from "../../models/cart"
import { addOrUpdateProduct } from "../../store/sessionSlice"
import './cartItem.css'

const CartItem = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch()

  const decrement = () => {
    dispatch(addOrUpdateProduct({
      id: product.id,
      quantity: product.quantity - 1
    }))
  }

  const increment = () => {
    dispatch(addOrUpdateProduct({
      id: product.id,
      quantity: product.quantity + 1
    }))
  }

  return (
    <div className="cart-item">
      <div className="cart-item-title">{product.title}</div>
      <div className="cart-item-price">{product.price}$</div>
      <div className="cart-item-total">{product.total}$</div>
      <div className="counter">
        <button 
          className="button-count" 
          onClick={decrement}>
                -</button>
        <div className="counter-number">{product.quantity}</div>
        <button 
          className="button-count"
          onClick={increment}
        >+</button>
      </div>
    </div>
  )
}

export default CartItem