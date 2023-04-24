import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <Link className="logo" to="/"><img src={logo} alt="" /></Link>
            <Navigation />
        </header>
    )
}

export default Header