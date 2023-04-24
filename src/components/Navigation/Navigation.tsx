import { Link } from "react-router-dom"
import './navigation.css'
import cart from '../../assets/shopping-cart.svg'

const Navigation = () => {
    const links: Array<{ title: string, href: string, icon?: any }> = [
        {
            title: 'Products',
            href: '/products'
        },
        {
            title: 'cart',
            href: '/cart',
            icon: cart
        }
    ]

    return (
        <nav className="nav">
            {links.map((link, idx) => {
                return (
                    <Link className="nav-link" to={link.href} key={idx}>
                        {link.icon && <img src={link.icon} alt="" />}
                        {link.title}
                    </Link>

                )
            })}
        </nav>
    )
}

export default Navigation