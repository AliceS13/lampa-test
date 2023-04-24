import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import './index.css'
const App = () => {
  return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={ <ProductsPage />} />
          <Route path="/cart" element={ <CartPage />} />
        </Routes>
      </div>
  );
};

export default App;
