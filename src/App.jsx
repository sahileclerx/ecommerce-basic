import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Product from './components/Product';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop/:type/:term" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
