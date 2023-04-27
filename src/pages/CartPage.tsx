import Cart from "../components/Cart/Cart"
import OrderForm from "../components/OrderForm/OrderForm"

const CartPage = () => {
  return (
    <div className="cart-wrap">
      <Cart />
      <OrderForm />
    </div>
  )
}

export default CartPage