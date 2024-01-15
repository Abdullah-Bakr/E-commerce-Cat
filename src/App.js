import { Route, Routes } from "react-router-dom";
import Header from "./Comp/Header";
import Home from "./Comp/Home";
import "./scss/app.scss";
import About from "./Comp/About";
import Shop from "./Comp/Shop";
import Services from "./Comp/Services";
import ContactUs from "./Comp/ContactUs";
import Footer from "./Comp/Footer";
import Cart from "./Comp/Cart";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
