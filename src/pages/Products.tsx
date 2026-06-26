import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import { ShoppingBag, Sparkles, CheckCircle } from 'lucide-react';
import { useCart } from '../CartContext';
import { SEO } from '../components/SEO';

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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "CottonCanvas Products",
    "url": "https://cottoncanvascloths.netlify.app/products",
    "description": "Explore premium cotton clothing including t-shirts, hoodies, dresses, jackets, joggers and cardigans."
  };

  const product1Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Everyday Cotton Hoodie",
    "image": "https://carbonmadras.com/cdn/shop/products/01_3000x_88990341-0a0a-49d1-b48a-4014f4d9b873.png?v=1741364002&width=1200",
    "description": "Comfortable cotton hoodie featuring a modern fit and ultra-soft interior lining.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "ECH001",
    "offers": {
      "@type": "AggregateOffer",
      "url": "",
      "priceCurrency": "INR",
      "lowPrice": "3000",
      "highPrice": "3299",
      "availability": "https://schema.org/InStock",
      "offerCount": "1"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "reviewCount": "2"
    },
    "review": [{
      "@type": "Review",
      "name": "comfortable cotton hoodie",
      "reviewBody": "Excellent fabric and fast delivery .Highly recommended",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "datePublished": "2026-06-06",
      "author": {"@type": "Person", "name": "Priya sharma"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    },{
      "@type": "Review",
      "reviewBody": "Great comfort and fits perfectly.",
      "author": {"@type": "Person", "name": "Anonymous"}
    }]
  };

  const product2Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "CC Classic White Tee",
    "image": "https://chemika-carcosmetics.pl/wp-content/uploads/2025/10/T-shirt_chemika_bialy_2_tlo.jpg",
    "description": "A timeless crew-neck t-shirt made from 100% premium cotton. Soft, breathable, and perfect for everyday wear.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "CCWT001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "1499",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Excellent Everyday T-Shirt",
      "reviewBody": "Premium quality fabric with a comfortable fit. Ideal for daily use",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "datePublished": "2026-04-04",
      "author": {"@type": "Person", "name": "Rahul Sharma"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product3Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "CottonCanvas Denim Jacket",
    "image": "https://theclothingfactory.in/cdn/shop/files/THECLOTHINGFACTORY-09-02-249076.jpg?v=1708491408",
    "description": "A modern take on a classic denim jacket crafted for style and durability.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "CCDJ001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "5999",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Premium Denim Jacket",
      "reviewBody": "Excellent quality and stylish design for all seasons.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "datePublished": "2026-02-19",
      "author": {"@type": "Person", "name": "Aman Singh"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product4Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Women's Relaxed Fit Dress",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&h=1000&fm=png&q=80",
    "description": "Elegant and comfortable cotton dress designed for casual outings and relaxed occasions.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "WRFD001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "4499",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Beautiful and Comfortable",
      "reviewBody": "Great fabric quality and a very flattering fit.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "datePublished": "2026-04-16",
      "author": {"@type": "Person", "name": "Neha Kapoor"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product5Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Kids Adventure Tee",
    "image": "https://storage.googleapis.com/swag-swami-media/2022/07/8069812d-adventure-awaits-kids-t-shirt-black-front.jpg",
    "description": "Soft cotton t-shirt designed for comfort and durability during everyday play.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "KAT001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "999",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Perfect for Kids",
      "reviewBody": "Soft fabric and durable stitching. Kids love wearing it.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "datePublished": "2026-04-07",
      "author": {"@type": "Person", "name": "Sneha Gupta"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product6Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Organic Cotton Joggers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsWPK6ZCM630xp4HZezxb4ZuipJM_K3rZsw&s",
    "description": "Relaxed-fit joggers made from organic cotton for all-day comfort.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "OCJ001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "2799",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Extremely Comfortable",
      "reviewBody": "Great fit and breathable fabric for everyday wear.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "datePublished": "2026-03-20",
      "author": {"@type": "Person", "name": "Karan mehta"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product7Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Monarch Organic Linen Trench",
    "image": "https://monarche.com.au/cdn/shop/files/Monarche_B4_01_2048x.jpg?v=1762487082",
    "description": "A luxurious trench coat crafted from breathable organic linen with a timeless silhouette.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "MOLT001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "8999",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Elegant Premium Trench",
      "reviewBody": "Premium quality linen and exceptional craftsmanship",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5"
      },
      "datePublished": "2026-02-12",
      "author": {"@type": "Person", "name": "Riya Malhotra"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const product8Schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Royal Cotton Ribbed Cardigan",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUdHri4pUb5fE9_La4pTM7e8hkJxX5PinzQ&s",
    "description": "Sophisticated ribbed cardigan crafted from premium cotton for superior comfort and style.",
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "sku": "RCRC001",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "4999",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Stylish and Comfortable",
      "reviewBody": "Beautiful texture and excellent fit for any occasion.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "datePublished": "2026-04-21",
      "author": {"@type": "Person", "name": "Harsh Kaur"},
      "publisher": {"@type": "Organization", "name": "CottonCanvas"}
    }
  };

  const productsSchemas = [
    collectionSchema,
    product1Schema,
    product2Schema,
    product3Schema,
    product4Schema,
    product5Schema,
    product6Schema,
    product7Schema,
    product8Schema
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <SEO 
        title="Shop Premium Cotton Clothing Collection | Cotton Canvas"
        description="Browse the latest clothing collection from Cotton Canvas. Find premium quality apparel, trendy outfits, and comfortable fashion for every occasion."
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
            Organic Cotton T Shirts, Dresses, Joggers & Custom Printed Outfits
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
                                className={`inline-flex items-center justify-center w-8 h-8 border text-[11px] font-mono transition-all duration-300 ${
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
                        className="bg-white border border-black text-black py-3 px-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
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
                        className="bg-black text-white py-3 px-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-900 active:bg-gray-950 transition-all duration-300 flex items-center justify-center gap-1.5"
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
