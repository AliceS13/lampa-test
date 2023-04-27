import { useState } from "react"
import { Link } from "react-router-dom"
import {ReactComponent as UserIcon} from '../../assets/user.svg'
import { useAppSelector } from "../../hooks/redux"
import LogoutMenu from "../LogoutMenu/LogoutMenu"
import './avatar.css'

const Avatar = () => {
  const { user } = useAppSelector(state => state.session)
  const [menuShown, setMenuShown] = useState(false)

  return (
    <>
      {user ?
        <div className="avatar" onClick={() => setMenuShown(true)}>
          <img src={user.image} alt="" />
        </div> :
        <Link to="/auth" className="auth-link">
          <UserIcon width={24} />
        </Link>
      }
      {user && <LogoutMenu shown={menuShown} setShown={setMenuShown} />}
    </>
  )
}

export default Avatar