import { useAppSelector } from "../../hooks/redux"
import CartItem from "../CartItem/CartItem"
import './cart.css'

const Cart = () => {
  const { basket: cart } = useAppSelector((state) => state.session)

  return (
    <div className="cart">
      <div className="title">
        Cart
      </div>
      {cart?.products.length === 0 ? 
        <div className="cart-msg">No added products</div> : 
        <div className="cart-table">
          <div className="cart-heading">
            <span>Product name</span>
            <span>Price</span>
            <span>Total</span>
            <span>Quantity</span>
          </div>
          <div className="cart-list">
            {cart?.products.map(product =>
              <CartItem product={product} key={product.id} />
            )}
          </div>
          <div className="cart-total">
            <div className="total-row">
              <span>Quantity</span>
              <span>{cart?.totalQuantity}</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span>{cart?.total}$</span>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Cart
