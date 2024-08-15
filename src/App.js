import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// import pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop"
import Contact from "./pages/contact/Contact"

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
