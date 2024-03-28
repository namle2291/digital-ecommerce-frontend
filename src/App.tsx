import { Routes, Route } from 'react-router-dom';

import './App.scss';
import DefaultLayout from './layouts/Home/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Blog from './pages/Blog';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import OnlyHeader from './layouts/Home/OnlyHeader';
import { useEffect } from 'react';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <div className="font-poppins">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index path="/" element={<Home />} />
                </Route>
                <Route path="/" element={<OnlyHeader />}>
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/account" element={<MyAccount />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
