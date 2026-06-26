import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, ShieldCheck, CheckCircle2, ShoppingBag, ArrowRight, Loader2, Sparkles, Send } from 'lucide-react';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'processing' | 'success'>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [orderId] = useState(() => `CC-${Math.floor(100000 + Math.random() * 900000)}`);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.05; // 5% GST on organic cotton garments
  const shipping = subtotal >= 4000 ? 0 : 250; // Free shipping above ₹4,000, otherwise ₹250 flat courier charge
  const grandTotal = subtotal + gst + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in your contact information and shipping address.");
      return;
    }
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleDone = () => {
    clearCart();
    setStep('info');
    setIsCheckoutOpen(false);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => step !== 'processing' && setIsCheckoutOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            id="checkout-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative bg-white text-black w-full max-w-4xl rounded-none shadow-2xl border border-gray-200 z-10 overflow-hidden flex flex-col md:flex-row font-sans"
            id="checkout-modal-panel"
          >
            {/* Left Block - Checkout Action Forms */}
            <div className="flex-1 p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-black animate-ping"></span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-700">Secure Checkout Gate</p>
                </div>
                {step !== 'processing' && (
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    aria-label="Close checkout"
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-black"
                    id="close-checkout-btn"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {step === 'info' && (
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-serif font-light text-black tracking-tight mb-2">Complete Your Purchase</h2>
                    <p className="text-xs text-gray-700 uppercase tracking-widest font-mono">Premium Organic Canvas Delivery</p>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-100 pb-2">1. Delivery Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="checkout-name" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="checkout-name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Aanya Sharma"
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="checkout-email" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="checkout-email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="aanya@cottoncanvas.in"
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-100 pb-2">2. Shipping Destination</h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="checkout-address" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Street Address</label>
                        <input
                          required
                          type="text"
                          name="address"
                          id="checkout-address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Flat 402, Sector 21"
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="checkout-city" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">City</label>
                          <input
                            required
                            type="text"
                            name="city"
                            id="checkout-city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="New Delhi"
                            className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="checkout-zip" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">PIN Code</label>
                          <input
                            required
                            type="text"
                            name="zip"
                            id="checkout-zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            placeholder="110001"
                            className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* High Class Card Input with Mock details */}
                  <div className="space-y-4 bg-gray-50 p-4 border border-gray-200">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-2"><CreditCard className="w-4 h-4" /> 3. Secure Premium Payment</h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="checkout-card" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Card Number (Mock authorized)</label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="checkout-card"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="4111 •••• •••• 9988"
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black bg-white outline-none text-xs tracking-widest transition-colors placeholder-gray-400"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="checkout-expiry" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Expiry Date</label>
                          <input
                            type="text"
                            name="expiry"
                            id="checkout-expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM / YY"
                            className="w-full px-4 py-3 border border-gray-200 focus:border-black bg-white outline-none text-xs tracking-wider transition-colors placeholder-gray-400"
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="checkout-cvv" className="text-[10px] font-bold uppercase tracking-wider text-gray-700">CVV</label>
                          <input
                            type="password"
                            name="cvv"
                            id="checkout-cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            placeholder="•••"
                            className="w-full px-4 py-3 border border-gray-200 focus:border-black bg-white outline-none text-xs tracking-widest transition-colors placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Place Order CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white hover:bg-gray-900 transition-colors uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center gap-2 mt-8 shadow-md"
                    id="place-order-submit"
                  >
                    Confirm Order & Pay ₹{grandTotal.toLocaleString('en-IN')}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>VERIFIED 256-BIT ENCRYPTED SSL GATEWAY</span>
                  </div>
                </form>
              )}

              {step === 'processing' && (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                  <Loader2 className="w-12 h-12 text-black animate-spin duration-1000" />
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-black">Authenticating Secure Funds</h3>
                    <p className="text-xs text-gray-700 uppercase tracking-widest font-mono">Reserving items of ethical production</p>
                  </div>
                  <p className="text-xs text-gray-600 max-w-sm">We are finalizing your premium cotton package on our secure Cloud network...</p>
                </div>
              )}

              {step === 'success' && (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-8">
                  <div className="p-4 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-16 h-16 animate-bounce" />
                  </div>
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-black text-white text-[9px] font-bold tracking-[0.25em] uppercase">Order Confirmed</span>
                    <h3 className="font-serif text-3xl text-black">A Royal Purchase!</h3>
                    <p className="text-sm text-gray-600">
                      Thank you for choosing conscious craftsmanship, <strong className="font-medium text-black">{formData.name}</strong>.
                    </p>
                  </div>

                  {/* Summary of dispatch */}
                  <div className="border border-gray-200 p-6 text-left w-full space-y-3 bg-gray-50 font-mono text-xs">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400 uppercase tracking-wider">Order Code</span>
                      <span className="font-bold text-black">{orderId}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400 uppercase tracking-wider">Destination</span>
                      <span className="text-black text-right line-clamp-1">{formData.address}, {formData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase tracking-wider">Amount Paid</span>
                      <span className="text-emerald-700 font-bold">₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed max-w-md">
                    An elegant verification message has been sent to <strong className="text-black font-medium">{formData.email}</strong>. Live order package dispatch estimates are around 2-4 royal business days.
                  </p>

                  <button
                    onClick={handleDone}
                    className="w-full max-w-sm py-4 bg-black text-white uppercase tracking-widest text-xs font-bold hover:bg-gray-900 transition-colors shadow-lg flex items-center justify-center gap-2"
                    id="finish-order-btn"
                  >
                    Return to Collection
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Block - Royal Order Item Summary */}
            <div className="w-full md:w-[320px] bg-gray-50 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 border-gray-200">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-700 mb-4">Investment Summary</h4>
                  <div className="space-y-4 max-h-[250px] md:max-h-[400px] overflow-y-auto pr-1">
                    {cartItems.length === 0 ? (
                      <p className="text-xs text-gray-700 italic">No sustainable garments in basket.</p>
                    ) : (
                      cartItems.map(item => (
                        <div key={item.id} className="flex gap-3 text-xs border-b border-gray-200 pb-3">
                          <div className="w-12 h-16 bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover" 
                                referrerPolicy="no-referrer" 
                                width={48}
                                height={64}
                                loading="lazy"
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-black truncate leading-tight">{item.name}</p>
                            <p className="text-[10px] text-gray-700 font-mono mt-1">₹{item.price.toLocaleString('en-IN')} × {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-black">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Sub-charges calculations */}
                <div className="space-y-3 pt-4 border-t border-gray-200 text-xs">
                  <div className="flex justify-between text-gray-750">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-750">
                    <span>GST (5%)</span>
                    <span className="font-medium text-black">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-750">
                    <span>Royal Safe-Post Carriage</span>
                    <span className="font-medium text-black">
                      {shipping === 0 ? (
                        <span className="text-emerald-700 font-bold uppercase text-[9px] tracking-wider">Free Shipping</span>
                      ) : (
                        `₹${shipping.toLocaleString('en-IN')}`
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Summary Bracket */}
              <div className="pt-6 border-t border-gray-300 mt-6 md:mt-0 space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-wider text-black">Grand Total</span>
                  <span className="text-2xl font-serif text-black font-semibold">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[9px] text-gray-700 font-mono text-right italic">VAT and premium insurance included</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
