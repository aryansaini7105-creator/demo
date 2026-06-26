import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { CartProvider } from './CartContext';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <React.Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white text-xs font-mono uppercase tracking-widest text-gray-500">
            <span className="animate-pulse">Loading...</span>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}
