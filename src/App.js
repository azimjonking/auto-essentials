import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// import pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop"
import Contact from "./pages/contact/Contact"
import Myaccount from './pages/myaccount/Myaccount'
import Cart from "./pages/cart/Cart"
import Checkout from './pages/checkout/Checkout'
import Details from './pages/details/Details'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myaccount' element={<Myaccount />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
