import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu, X, Facebook, Twitter, Instagram, CheckCircle } from 'lucide-react';
import { useCart } from '../CartContext';

const Cart = React.lazy(() => import('./Cart'));
const CheckoutModal = React.lazy(() => import('./CheckoutModal'));

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const handleFooterNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-black bg-white selection:bg-black selection:text-white">
      {/* Accessible Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:text-sm focus:font-bold focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav 
        aria-label="Main Navigation" 
        className="bg-white border-b border-gray-200 sticky top-0 z-40 h-20 flex items-center shrink-0"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <NavLink to="/" className="flex flex-col items-start gap-0 hover:opacity-80 transition-opacity" aria-label="CottonCanvas Home">
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
                    `transition-colors hover:text-black py-1 ${
                      isActive ? "text-black border-b-2 border-black font-semibold" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              type="button" 
              onClick={() => {
                if (isLoggedIn) {
                  setIsLoggedIn(false);
                } else {
                  setShowLoginModal(true);
                }
              }}
              className="hidden sm:block px-5 py-2 text-xs font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              {isLoggedIn ? "Account" : "Log In"}
            </button>

            <button 
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative"
              aria-label={`Shopping bag containing ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none transition-colors cursor-pointer"
              >
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open main menu"}</span>
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
          <div id="mobile-navigation" className="absolute top-20 left-0 w-full md:hidden bg-white border-b border-gray-200 shadow-xl z-50">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wider ${
                      isActive
                        ? "bg-gray-100 text-black font-bold"
                        : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200 flex gap-4">
                <button 
                  type="button" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowLoginModal(true);
                  }}
                  className="flex-1 px-5 py-3 text-xs font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors text-center"
                >
                  {isLoggedIn ? "Account Profile" : "Log In"}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with anchor for skip-link */}
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col focus:outline-none">
        <Outlet />
      </main>

      <React.Suspense fallback={null}>
        <Cart />
        <CheckoutModal />
      </React.Suspense>

      {/* Login / Customer Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white max-w-md w-full border border-gray-200 p-8 shadow-2xl relative" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
            <button 
              type="button" 
              onClick={() => setShowLoginModal(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 id="login-modal-title" className="text-2xl font-serif text-black mb-2">Welcome Back</h2>
            <p className="text-gray-600 text-sm mb-6">Log in to track orders, manage addresses, and view member perks.</p>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-login-email" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="modal-login-email"
                  name="email"
                  autoComplete="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required 
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 p-3 text-sm focus:border-black outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto" role="contentinfo">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[11rem]">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Men's Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Classic shirts & outerwear</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">
              View Collection
            </NavLink>
          </div>
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Women's Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Elegant dresses & tops</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">
              View Collection
            </NavLink>
          </div>
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex-1 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Kids' Collection</h3>
            <p className="text-xs text-gray-600 italic mb-4">Durable soft playwear</p>
            <NavLink to="/products" className="text-sm font-bold underline underline-offset-4 mt-auto w-fit hover:text-black transition-colors">
              View Collection
            </NavLink>
          </div>
          <div className="p-8 md:p-12 bg-black text-white flex flex-col justify-center gap-2 flex-[1.5]">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Join Our Community</p>
            <p className="text-sm font-serif leading-tight mb-2">Get 15% off your first order by subscribing.</p>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-green-400 text-xs py-2">
                <CheckCircle className="w-4 h-4" /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleFooterNewsletter} className="flex">
                <label htmlFor="footer-newsletter-email" className="sr-only">Email Address for Newsletter</label>
                <input 
                  id="footer-newsletter-email"
                  name="email"
                  type="email" 
                  autoComplete="email"
                  placeholder="Email Address" 
                  aria-label="Email Address for newsletter" 
                  className="bg-gray-800 border-none px-4 py-3 text-xs w-full focus:ring-0 text-white placeholder-white/50 outline-none" 
                  required
                />
                <button 
                  type="submit" 
                  className="bg-white text-black px-6 font-bold text-xs hover:bg-gray-100 transition-colors uppercase tracking-widest shrink-0 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-gray-200 max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
           <p>&copy; {new Date().getFullYear()} CottonCanvas. All rights reserved.</p>
           <div className="flex gap-6 uppercase tracking-wider font-medium items-center">
             <NavLink to="/about" className="hover:text-black transition-colors">About Us</NavLink>
             <NavLink to="/faq" className="hover:text-black transition-colors">FAQs</NavLink>
             <NavLink to="/contact" className="hover:text-black transition-colors">Customer Care</NavLink>
             <div className="flex gap-4 border-l border-gray-200 pl-6 text-gray-700">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit CottonCanvas Facebook" 
                  className="hover:text-black transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit CottonCanvas Instagram" 
                  className="hover:text-black transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit CottonCanvas Twitter" 
                  className="hover:text-black transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
