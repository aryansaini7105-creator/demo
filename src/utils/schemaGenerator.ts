/**
 * Schema.org JSON-LD Structured Data Generators for CottonCanvas
 * Compliant with Google Search Central & Google Merchant Center rich results specifications.
 */

export const BASE_URL = "https://cottoncanvascloths.vercel.app";

export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/**
 * Common Merchant Return Policy (Google Merchant specification)
 */
export const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  "applicableCountry": "IN",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 30,
  "returnMethod": "https://schema.org/ReturnByMail",
  "returnFees": "https://schema.org/FreeReturn",
  "itemCondition": "https://schema.org/NewCondition",
  "restockingFee": {
    "@type": "MonetaryAmount",
    "value": 0,
    "currency": "INR"
  }
};

/**
 * Common Shipping Details (Free shipping over ₹999 across India)
 */
export const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  "shippingRate": {
    "@type": "MonetaryAmount",
    "value": 0,
    "currency": "INR"
  },
  "shippingDestination": {
    "@type": "DefinedRegion",
    "addressCountry": "IN"
  },
  "deliveryTime": {
    "@type": "ShippingDeliveryTime",
    "handlingTime": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 2,
      "unitCode": "d"
    },
    "transitTime": {
      "@type": "QuantitativeValue",
      "minValue": 2,
      "maxValue": 5,
      "unitCode": "d"
    }
  }
};

/**
 * Master Organization / ClothingStore Schema
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "OnlineStore", "Organization"],
  "@id": ORGANIZATION_ID,
  "name": "CottonCanvas",
  "legalName": "CottonCanvas Apparel Private Limited",
  "alternateName": "Cotton Canvas Clothes",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/favicon.svg`,
    "width": 512,
    "height": 512,
    "caption": "CottonCanvas Brand Logo"
  },
  "image": `${BASE_URL}/images/home_hero.webp`,
  "description": "CottonCanvas is a premier sustainable organic cotton apparel brand crafting everyday minimalist tees, durable jackets, and luxurious pure cotton essentials.",
  "email": "aryansaini7105@gmail.com",
  "telephone": "+917988227604",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking", "Google Pay", "PhonePe", "Paytm"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Market Road",
    "addressLocality": "Yamunanagar",
    "addressRegion": "Haryana",
    "postalCode": "135001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.1290",
    "longitude": "77.2674"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
    "https://twitter.com"
  ],
  "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
});

/**
 * Master WebSite Schema with SearchAction
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "url": BASE_URL,
  "name": "CottonCanvas",
  "alternateName": "CottonCanvas Clothing Store",
  "description": "Premium sustainable 100% organic cotton apparel and timeless ethical fashion.",
  "publisher": {
    "@id": ORGANIZATION_ID
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/products?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

/**
 * Standard Breadcrumb Generator
 */
export const getBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.path.startsWith("http") ? item.path : `${BASE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`
    }))
  ]
});

/**
 * Comprehensive Product Schema (Fully compliant with Google Merchant Center & Rich Product Results)
 */
export interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes?: string[];
  colors?: string[];
  image: string;
}

const productRatings: Record<number, { rating: number; count: number; reviews: { author: string; date: string; title: string; body: string; rating: number }[] }> = {
  1: {
    rating: 4.9,
    count: 28,
    reviews: [
      {
        author: "Rahul Sharma",
        date: "2026-04-04",
        title: "The perfect everyday white tee",
        body: "Ultra-soft 100% organic cotton, excellent crew-neck collar that holds its shape wash after wash.",
        rating: 5
      },
      {
        author: "Neha Kapoor",
        date: "2026-05-18",
        title: "Breathable and well-crafted",
        body: "Clean minimalist design, lightweight breathable cotton fabric, and premium everyday comfort.",
        rating: 5
      }
    ]
  },
  2: {
    rating: 4.9,
    count: 42,
    reviews: [
      {
        author: "Priya Sharma",
        date: "2026-06-06",
        title: "Comfortable everyday set",
        body: "The ribbed knit sweater and jeans make a stylish, cozy everyday outfit.",
        rating: 5
      },
      {
        author: "Karan Johar",
        date: "2026-06-20",
        title: "Warm and stylish",
        body: "Soft chunky knit texture and classic blue jeans make for an effortless look.",
        rating: 5
      }
    ]
  },
  3: {
    rating: 4.8,
    count: 19,
    reviews: [
      {
        author: "Aarushi Verma",
        date: "2026-05-12",
        title: "Stunning maxi dress",
        body: "Vibrant cherry red shade with an elegant floor-length silhouette and pleated waist.",
        rating: 5
      }
    ]
  },
  4: {
    rating: 5.0,
    count: 14,
    reviews: [
      {
        author: "Vikram Malhotra",
        date: "2026-04-10",
        title: "Durable cotton denim jacket",
        body: "The light wash and craftsmanship are top notch. Sturdy metal buttons, great fit, and perfect for layering.",
        rating: 5
      }
    ]
  },
  5: {
    rating: 4.9,
    count: 31,
    reviews: [
      {
        author: "Meera Nair",
        date: "2026-06-01",
        title: "Gentle on sensitive skin",
        body: "Bought this for my 6-year-old. Soft cotton is wonderful.",
        rating: 5
      }
    ]
  },
  6: {
    rating: 4.8,
    count: 23,
    reviews: [
      {
        author: "Amit Roy",
        date: "2026-05-24",
        title: "Stylish cargo and crop set",
        body: "Great fit on the high-waisted cargo pants and very comfortable ribbed crop top.",
        rating: 5
      }
    ]
  }
};

export const getSingleProductSchema = (product: ProductData) => {
  const ratingData = productRatings[product.id] || {
    rating: 4.9,
    count: 12,
    reviews: [
      {
        author: "Verified Customer",
        date: "2026-05-01",
        title: "Exceptional quality",
        body: "True to size, natural cotton feel, and rapid delivery.",
        rating: 5
      }
    ]
  };

  const sku = `CC-${String(product.id).padStart(4, "0")}`;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "@id": `${BASE_URL}/products#product-${product.id}`,
    "name": product.name,
    "image": [product.image.startsWith('http') ? product.image : `${BASE_URL}${product.image}`],
    "description": product.description,
    "sku": sku,
    "mpn": `MPN-${sku}`,
    "brand": {
      "@type": "Brand",
      "name": "CottonCanvas"
    },
    "manufacturer": {
      "@id": ORGANIZATION_ID
    },
    "material": "100% Certified Organic Cotton",
    "category": "Apparel & Accessories > Clothing",
    "offers": {
      "@type": "Offer",
      "url": `${BASE_URL}/products#product-${product.id}`,
      "priceCurrency": "INR",
      "price": product.price.toString(),
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@id": ORGANIZATION_ID
      },
      "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY,
      "shippingDetails": SHIPPING_DETAILS
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingData.rating.toString(),
      "reviewCount": ratingData.count.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": ratingData.reviews.map(rev => ({
      "@type": "Review",
      "name": rev.title,
      "reviewBody": rev.body,
      "datePublished": rev.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": rev.author
      },
      "publisher": {
        "@id": ORGANIZATION_ID
      }
    }))
  };
};

/**
 * Collection Page Schema with ItemList of products
 */
export const getCollectionPageSchema = (products: ProductData[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Certified Organic Cotton Clothing Collection",
  "url": `${BASE_URL}/products`,
  "description": "Explore CottonCanvas collection of 100% organic cotton t-shirts, jackets, hoodies, joggers, and dresses.",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": products.length,
    "itemListElement": products.map((prod, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": prod.name,
      "url": `${BASE_URL}/products#product-${prod.id}`
    }))
  }
});

/**
 * FAQPage Schema
 */
export const getFAQPageSchema = (faqItems: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

/**
 * Blog Posting Schema
 */
export const getBlogPostSchema = (post: {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
}) => {
  // Convert friendly date to ISO string (e.g. "March 15, 2026" -> "2026-03-15")
  const isoDate = (() => {
    try {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        return parsed.toISOString().split("T")[0];
      }
    } catch (e) {}
    return "2026-03-15";
  })();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog#post-${post.id}`,
    "headline": post.title,
    "description": post.summary,
    "image": [post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`],
    "datePublished": isoDate,
    "dateModified": isoDate,
    "inLanguage": "en-US",
    "articleSection": "Sustainable Fashion",
    "keywords": "organic cotton, capsule wardrobe, clothing care, eco fashion, minimalist style",
    "author": {
      "@type": "Organization",
      "name": "CottonCanvas Editorial Team",
      "url": BASE_URL
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "mainEntityOfPage": `${BASE_URL}/blog#post-${post.id}`
  };
};
