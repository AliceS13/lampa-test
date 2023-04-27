import { Link } from "react-router-dom"
import './header.css'
import logo from '../../assets/logo11.png'
import { ReactComponent as CartIcon } from '../../assets/cart_white.svg'
import { useAppSelector } from "../../hooks/redux"
import Avatar from "../Avatar/Avatar"

const Header = () => {
  const { basket } = useAppSelector(state => state.session)

  return (
    <header className="header">
      <Link className="logo" to="/"><img src={logo} alt="" />
        {/* Store */}
      </Link>
      <div className="header-nav">
        <Avatar />
        <Link to="/cart" className="cart-button">
          {basket?.total !== 0 && <div className="total">{basket?.total}$</div>}
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header