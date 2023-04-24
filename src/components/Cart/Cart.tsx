import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cart';
import { CartItem } from '../../types';
import { RootState } from '../../store';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {/* {cart.items.map((item) => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
            <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
          </li>
        ))} */}
      </ul>
      <div>Total: {cart.total}</div>
    </div>
  );
};

export default Cart;
