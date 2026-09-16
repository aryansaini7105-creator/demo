import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import { Sparkles, CheckCircle } from 'lucide-react';
import { useCart } from '../CartContext';
import { SEO } from '../components/SEO';
import { getCollectionPageSchema, getBreadcrumbSchema, getSingleProductSchema } from '../utils/schemaGenerator';

export default function Products() {
  const { addToCart, buyNow } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const handleAddToCart = (product: any) => {
    const size = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : 'Free Size');
    addToCart({
      id: product.id,
      name: `${product.name} - ${size}`,
      price: product.price,
      image: product.image
    });
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  const handleBuyNow = (product: any) => {
    const size = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : 'Free Size');
    buyNow({
      id: product.id,
      name: `${product.name} - ${size}`,
      price: product.price,
      image: product.image
    });
  };

  // Google Search Central & Merchant Rich Results Schemas
  const productsSchemas = [
    getCollectionPageSchema(products),
    getBreadcrumbSchema([
      { name: "Products", path: "/products" }
    ]),
    ...products.map(p => getSingleProductSchema(p))
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <SEO 
        title="Shop Premium Certified Organic Cotton Clothing | CottonCanvas"
        description="Browse the full sustainable clothing collection from CottonCanvas. Pure organic cotton t-shirts, dresses, hoodies, jackets & joggers crafted for timeless style."
        canonical="/products"
        type="product"
        keywords="organic cotton clothing, pure cotton t shirts, cotton hoodies, sustainable dresses, eco friendly fashion store"
        schema={productsSchemas}
      />

      {/* Header Banner */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-4 text-black">The Monarch Collection</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-6 tracking-tight">
            Premium Certified Organic Cotton Clothing
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Organic Cotton T-Shirts, Dresses, Joggers & Custom Printed Outfits
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Explore our curated line of premium certified eco-fashion garments. Styled with modern fluid silhouettes, premium material weights, and deep-seated sustainability.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" id="products-grid-list">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 flex flex-col hover:shadow-2xl transition-all duration-500 group"
                id={`product-card-${product.id}`}
              >
                {/* Product Image Frame */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={`Premium sustainable ${product.name} crafted from soft certified cotton`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    width={400}
                    height={500}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle Top Tags */}
                  {product.price > 80 && (
                    <span className="absolute top-4 left-4 bg-black text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                      Royal Luxury
                    </span>
                  )}
                </div>
                
                {/* Info and Actions Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg font-medium text-black group-hover:text-amber-900 transition-colors duration-300">{product.name}</h3>
                    <span className="font-mono text-sm font-semibold text-black bg-gray-150 px-2 py-0.5">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  
                  <p className="text-xs text-gray-700 mb-6 flex-grow leading-relaxed font-light md:h-12 overflow-hidden line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="space-y-6 pt-4 border-t border-gray-100">
                    {/* Interactive Size Selector Block */}
                    {product.sizes && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-black uppercase tracking-widest">Select Size</span>
                          <span className="text-[10px] text-gray-600 font-mono">
                            Selected: {selectedSizes[product.id] || product.sizes[0]}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map(size => {
                            const isSelected = (selectedSizes[product.id] || product.sizes[0]) === size;
                            return (
                              <button 
                                key={size} 
                                type="button"
                                onClick={() => setSelectedSizes(prev => ({ ...prev, [product.id]: size }))}
                                aria-label={`Select size ${size} for ${product.name}`}
                                className={`inline-flex items-center justify-center w-8 h-8 border text-[11px] font-mono transition-all duration-300 cursor-pointer ${
                                  isSelected 
                                    ? "border-black bg-black text-white scale-110 shadow-sm" 
                                    : "border-gray-200 text-gray-700 hover:border-black hover:text-black bg-white"
                                }`}
                              >
                                {size}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    {/* Color Swatch Information */}
                    {product.colors && (
                      <div>
                        <span className="text-[10px] font-bold text-black uppercase tracking-widest block mb-2">Royal Weave Tones</span>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-600 font-light">
                          {product.colors.join(' • ')}
                        </div>
                      </div>
                    )}
                    
                    {/* Dual Action Functional Row */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-white border border-black text-black py-3 px-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        id={`add-to-cart-btn-${product.id}`}
                      >
                        {addedId === product.id ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-black hover:text-white" />
                            Added
                          </>
                        ) : (
                          "Add to Bag"
                        )}
                      </button>
                      
                      <button 
                        onClick={() => handleBuyNow(product)}
                        className="bg-black text-white py-3 px-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-900 active:bg-gray-950 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        id={`buy-now-btn-${product.id}`}
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
