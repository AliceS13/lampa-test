import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import './index.css'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App
