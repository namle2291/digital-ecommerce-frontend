import { Routes, Route } from "react-router-dom";

import "./App.scss";
import DefaultLayout from "./layouts/Home/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import MyAccount from "./pages/MyAccount";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="font-poppins h-[1000px]">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
