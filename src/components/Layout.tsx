import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../CartContext';
import Cart from './Cart';
import CheckoutModal from './CheckoutModal';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-black bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20 flex items-center shrink-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <NavLink to="/" className="flex flex-col items-start gap-0 hover:opacity-80 transition-opacity">
              <span className="text-xl md:text-2xl font-bold tracking-tight uppercase border-b-2 border-black leading-none pb-0.5">CottonCanvas</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-60 mt-1 hidden sm:block">Everyday Comfort • Timeless Style</span>
            </NavLink>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-[13px] font-medium uppercase tracking-wider text-gray-700">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-black ${
                      isActive ? "text-black border-b border-black" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button type="button" className="hidden sm:block px-5 py-2 text-xs font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors">Log In</button>
            <button 
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="hidden sm:flex w-10 h-10 bg-gray-100 rounded-full items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full md:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-sm font-medium uppercase tracking-wider ${
                      isActive
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200 flex gap-4">
                <button type="button" className="flex-1 px-5 py-3 text-xs font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors text-center">Log In</button>
                <button 
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer relative"
                  aria-label="Open Cart"
                >
                  <ShoppingBag className="w-5 h-5 text-black" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <Cart />
      <CheckoutModal />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[11rem]">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Men's Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Classic shirts & outerwear</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">View More</NavLink>
          </div>
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Women's Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Elegant dresses & tops</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">View More</NavLink>
          </div>
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Kids' Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Durable soft playwear</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">View More</NavLink>
          </div>
          <div className="p-8 md:p-12 bg-black text-white flex flex-col justify-center gap-2 flex-[1.5]">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Join Our Community</p>
            <p className="text-sm font-serif leading-tight mb-2">Get 15% off your first order by subscribing.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input type="email" placeholder="Email Address" aria-label="Email Address for newsletter" className="bg-gray-800 border-none px-4 py-3 text-xs w-full focus:ring-0 text-white placeholder-white/50 outline-none" />
              <button type="submit" className="bg-white text-black px-6 font-bold text-xs hover:bg-gray-100 transition-colors uppercase tracking-widest">Submit</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
           <p>&copy; {new Date().getFullYear()} CottonCanvas. All rights reserved.</p>
           <div className="flex gap-6 uppercase tracking-wider font-medium">
             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-black transition-colors">Terms</a>
             <div className="flex gap-4 border-l border-gray-200 pl-6 text-gray-700">
                <a href="#" aria-label="Facebook" className="hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
