import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Truck, Tag } from 'lucide-react';
import { useCart } from '../CartContext';
import { SEO } from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { faqs } from '../data/faqData';
import { getOrganizationSchema, getWebSiteSchema, getFAQPageSchema } from '../utils/schemaGenerator';

export default function Home() {
  const { addToCart } = useCart();
  const [addedFeatured, setAddedFeatured] = useState(false);

  const handleAddFeatured = () => {
    addToCart({
      id: 999,
      name: "Tailored Burgundy Coat",
      price: 2999,
      image: "/images/home_hero.webp"
    });
    setAddedFeatured(true);
    setTimeout(() => setAddedFeatured(false), 1500);
  };

  const homeSchema = [
    getWebSiteSchema(),
    getOrganizationSchema(),
    getFAQPageSchema(faqs.slice(0, 8))
  ];

  return (
    <div className="flex flex-col bg-white text-black">
      <SEO 
        title="CottonCanvas — Premium Sustainable Cotton Clothing & Fashion" 
        description="Discover pure organic cotton clothing designed for everyday comfort and timeless style. Explore our ethical, sustainable fashion collection for men, women & kids." 
        canonical="/"
        keywords="sustainable cotton clothing, organic cotton apparel, ethical fashion, pure cotton shirts, cotton dresses, eco clothing brand"
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col lg:flex-row items-stretch border-b border-gray-200">
        <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center gap-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[.3em]">Premium Essentials</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-black">
              Pure Cotton Clothing<br /><span className="italic text-black">Designed for Life</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md leading-relaxed">
              Discover pure cotton clothing designed for everyday comfort and timeless style. Explore our collection of premium essentials made with care and crafted to last.
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
        </div>

        <div className="lg:w-2/5 p-8 md:p-12 relative bg-gray-50 min-h-[500px]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
          <div className="h-full border border-gray-200 relative z-10 flex flex-col justify-center items-center overflow-hidden bg-gray-100">
             <img 
               src="/images/home_hero.webp" 
               fetchPriority="high"
               decoding="async"
               alt="Tailored burgundy coat with high standing collar" 
               className="object-cover w-full h-full opacity-90 transition-transform duration-500 hover:scale-105"
               width={800}
               height={1000}
             />
             <div className="absolute bottom-8 left-8 right-8 bg-white shadow-2xl p-6 flex flex-col">
               <div className="space-y-4">
                 <div>
                   <p className="text-[10px] text-gray-600 uppercase tracking-tighter mb-1">Featured Outerwear</p>
                   <p className="font-bold text-black text-lg">Tailored Burgundy Coat</p>
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
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black sm:text-4xl">Featured Collections</h2>
            <p className="mt-4 text-lg text-gray-700">Find the perfect cotton outfits for every member of the family.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Category 1 - Men's Collection */}
            <NavLink to="/products" className="group relative overflow-hidden bg-white border border-gray-200 block">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="/images/home_mens.webp" 
                  alt="Men's Collection - everyday cotton essentials and smart casual wear" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
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
            </NavLink>

            {/* Category 2 - Women's Collection */}
            <NavLink to="/products" className="group relative overflow-hidden bg-white border border-gray-200 block">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="/images/home_womens.webp" 
                  alt="Women's Collection - breezy cotton dresses and relaxed tops" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 bg-white border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Women's Collection</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Elegant dresses, relaxed tops, and modern cotton essentials.
                </p>
                <div className="flex items-center text-sm font-bold underline underline-offset-4 text-black">
                  Shop Women <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </NavLink>

            {/* Category 3 - Kids' Collection */}
            <NavLink to="/products" className="group relative overflow-hidden bg-white border border-gray-200 block">
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src="/images/home_kids.webp" 
                  alt="Kids' Collection - soft, durable, and playful cotton clothes" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 bg-white border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Kids' Collection</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Soft, durable, and playful cotton clothes for all-day comfort.
                </p>
                <div className="flex items-center text-sm font-bold underline underline-offset-4 text-black">
                  Shop Kids <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black">Why Choose CottonCanvas</h2>
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
            <h2 className="text-3xl font-serif text-black">What Our Customers Say</h2>
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

      {/* Frequently Asked Questions Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-2">Join Our Community</p>
          <h2 className="text-3xl font-serif leading-tight mb-4">Stay in Touch</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Subscribe to our newsletter for exclusive updates, new arrivals, and special offers.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <label htmlFor="home-newsletter-email" className="sr-only">Email Address for Newsletter</label>
            <input 
              id="home-newsletter-email"
              name="email"
              type="email" 
              placeholder="Email Address" 
              aria-label="Email Address for newsletter"
              autoComplete="email"
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
