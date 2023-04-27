import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import { logout } from "../../store/api/sessionSlice"
import './logoutMenu.css'
import { ReactComponent as CartIcon} from  '../../assets/shopping-cart.svg'

const LogoutMenu = ({ shown, setShown }: { shown: boolean, setShown: (value: boolean) => void }) => {
  const hideMenu = () => setShown(false)
  const menuContainerRef = useRef(null)
  useOnClickOutside(menuContainerRef, hideMenu)
  const dispatch = useAppDispatch()
  const { user, basket } = useAppSelector(state => state.session)
  const onClickLogout = () => {
    dispatch(logout())
    hideMenu()
  }

  return (
    <div className={shown ? "logout-menu shown" : "logout-menu"} ref={menuContainerRef}>
      {user && <div className="username">Hello, {user.firstName} {user.lastName}!</div>}
      <Link to="/cart" className="logout-menu-link" onClick={hideMenu}>
        <CartIcon width={24} />
        Watch my cart ({basket && basket?.totalQuantity})
      </Link>
      <button onClick={onClickLogout} className="button logout">Logout</button>
    </div>
  )
}

export default LogoutMenu