import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop/:type/:term" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
