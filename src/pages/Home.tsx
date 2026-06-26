import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Truck, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../CartContext';
import { SEO } from '../components/SEO';

export default function Home() {
  const { addToCart } = useCart();
  const [addedFeatured, setAddedFeatured] = useState(false);

  const handleAddFeatured = () => {
    addToCart({
      id: 999,
      name: "Everyday Premium Cotton",
      price: 2999,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&h=300&fm=webp&q=70"
    });
    setAddedFeatured(true);
    setTimeout(() => setAddedFeatured(false), 1500);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CottonCanvas",
    "url": "https://cottoncanvascloths.netlify.app/",
    "description": "Everyday Comfort. Timeless Style. Premium cotton clothing for men, women and kids.",
    "publisher": {
      "@type": "Organization",
      "name": "CottonCanvas"
    }
  };

  return (
    <div className="flex flex-col bg-white text-black">
      <SEO 
        title="Cotton Canvas - Premium Cotton Clothing & Fashion" 
        description="Discover premium quality clothing at Cotton Canvas. Explore stylish apparel, modern fashion trends, and comfortable everyday wear for every lifestyle." 
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col lg:flex-row items-stretch border-b border-gray-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center gap-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[.3em]">Premium Essentials</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-black">
              Pure Organic Cotton Clothing<br /><span className="italic text-black">Designed for Life</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md leading-relaxed">
              Discover one of the finest sustainable cotton clothing brands bringing you premium, bio-derived eco friendly fashion. Blending comfort, quality, and contemporary style, CottonCanvas makes garments that feel as good as they look.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink 
              to="/products"
              className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-[.2em] shadow-lg text-center hover:bg-opacity-90 transition-all"
            >
              Shop Now
            </NavLink>
            <NavLink 
              to="/about"
              className="border border-gray-200 bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-[.2em] hover:bg-gray-50 transition-colors text-center"
            >
              Explore Collection
            </NavLink>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/5 p-8 md:p-12 relative bg-gray-50 min-h-[500px]"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
          <div className="h-full border border-gray-200 relative z-10 flex flex-col justify-center items-center overflow-hidden bg-gray-100">
             <img 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=75" 
               srcSet="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=480&q=70 480w, https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=75 800w"
               sizes="(max-width: 640px) 480px, 800px"
               fetchPriority="high"
               decoding="async"
               alt="A woman modeling sustainable clothing brands premium organic cotton clothing" 
               className="object-cover w-full h-full opacity-90 transition-all duration-700 hover:scale-105"
               width={800}
               height={1000}
             />
             <div className="absolute bottom-8 left-8 right-8 bg-white shadow-2xl p-6 flex flex-col">
               <div className="space-y-4">
                 <div>
                   <p className="text-[10px] text-gray-600 uppercase tracking-tighter mb-1">Featured</p>
                   <p className="font-bold text-black text-lg">Everyday Premium Cotton</p>
                 </div>
                 <button 
                   onClick={handleAddFeatured}
                   className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
                 >
                   {addedFeatured ? "Added to Cart" : "Add to Cart — ₹2,999"}
                 </button>
               </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black sm:text-4xl">Our Premium Cotton Clothing Collections</h2>
            <p className="mt-4 text-lg text-gray-700">Find the perfect pure cotton outfits for every member of the family.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Category 1 */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 cursor-pointer">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="https://textile-export.b-cdn.net/images/800/20231101/16988319171647512920-Structured%2003%20(5).png" 
                  alt="Men's Cotton Clothing" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  width={400}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="p-8 bg-white border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Men's Collection</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Classic shirts, comfortable t-shirts, and versatile cotton outerwear.
                </p>
                <div className="flex items-center text-sm font-bold underline underline-offset-4 text-black">
                  Shop Men <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 cursor-pointer">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="https://kavyastyleplus.com/cdn/shop/collections/Crown_20Sayuri_20Indo_20Western_20Pair_20_282_29.jpg?v=1756291988&width=400" 
                  alt="Women's Cotton Clothing" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  width={400}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="p-8 bg-white border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Women's Collection</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Elegant dresses, relaxed tops, and modern organic cotton essentials.
                </p>
                <div className="flex items-center text-sm font-bold underline underline-offset-4 text-black">
                  Shop Women <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 cursor-pointer">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg" 
                  alt="Kids' Cotton Clothing" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  width={400}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="p-8 bg-white border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Kids' Collection</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Soft, durable, and playful organic cotton apparel designed for active kids.
                </p>
                <div className="flex items-center text-sm font-bold underline underline-offset-4 text-black">
                  Shop Kids <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black">Why Choose Our Cotton Clothing Brand</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-gray-200 text-center flex flex-col items-center shadow-sm">
              <div className="bg-black bg-opacity-10 p-4 mb-6">
                <ShieldCheck className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">Premium Materials</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We source high-quality premium cotton for maximum comfort and lasting durability.</p>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 text-center flex flex-col items-center shadow-sm">
              <div className="bg-black bg-opacity-10 p-4 mb-6">
                <Leaf className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">Sustainable</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Our production process focuses on reducing waste and promoting responsible fashion.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 text-center flex flex-col items-center shadow-sm">
              <div className="bg-black bg-opacity-10 p-4 mb-6">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">Affordable Luxury</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Experience stylish, high-quality clothing without the premium price tag.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 text-center flex flex-col items-center shadow-sm">
              <div className="bg-black bg-opacity-10 p-4 mb-6">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">Fast Delivery</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Enjoy quick and reliable shipping across the country directly to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black">Reviews of Our Organic Cotton Clothing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-black mb-6">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  "The quality is amazing. My CottonCanvas shirts have become wardrobe staples."
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-sm">Sarah M.</p>
                <p className="text-xs text-gray-600">Verified Buyer</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-black mb-6">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  "Comfortable, stylish, and affordable. Highly recommended!"
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-sm">David R.</p>
                <p className="text-xs text-gray-600">Verified Buyer</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-black mb-6">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  "Love their sustainable approach and excellent customer service."
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-sm">Priya K.</p>
                <p className="text-xs text-gray-600">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-2">Join Our Community</p>
          <h2 className="text-3xl font-serif leading-tight mb-4">Stay Updated on New Cotton Clothing Trends</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Receive exclusive offers, fashion tips, and early access to new collections.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Email Address" 
              aria-label="Email Address for newsletter"
              className="flex-grow px-5 py-3 bg-gray-800 border border-gray-800 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-black px-8 py-3 font-bold uppercase tracking-[.2em] text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
