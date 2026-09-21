export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes?: string[];
  colors?: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CC Classic White Tee",
    price: 1499,
    description: "A timeless crew-neck t-shirt made from 100% premium cotton. Soft, breathable, and perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/prod1.webp",
  },
  {
    id: 2,
    name: "Cozy Ribbed Knit & Denim Set",
    price: 3299,
    description: "A relaxed casual set featuring a soft grey ribbed knit sweater paired with classic blue denim jeans and a rust cable-knit beanie.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/prod2.webp",
  },
  {
    id: 3,
    name: "Sleeveless Cherry Red Maxi Dress",
    price: 4499,
    description: "An elegant cherry red floor-length gown designed with a fitted sleeveless bodice, pleated waist, and a voluminous flared skirt.",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/prod3.webp",
  },
  {
    id: 4,
    name: "CottonCanvas Denim Jacket",
    price: 5999,
    description: "A classic light-wash cotton denim jacket crafted with durable metal buttons, chest flap pockets, and timeless style.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/prod4.webp",
  },
  {
    id: 5,
    name: "Kids Classic White Cotton Tee",
    price: 999,
    description: "A soft and gentle white crewneck t-shirt made from comfortable cotton, designed for delicate skin and easy everyday play.",
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    image: "/images/prod5.webp",
  },
  {
    id: 6,
    name: "Two-Tone Cargo Pants & Crop Set",
    price: 2799,
    description: "A modern casual outfit pairing a fitted black short-sleeve ribbed crop top with high-waisted olive green and black color-blocked cargo pants.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/prod6.webp",
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "5 Essentials for a Minimalist Wardrobe",
    date: "March 15, 2026",
    summary: "Discover the key cotton pieces that form the foundation of a versatile, timeless everyday wardrobe.",
    image: "/images/blog1.webp"
  },
  {
    id: 2,
    title: "How to Build a Sustainable Capsule Wardrobe",
    date: "April 2, 2026",
    summary: "A practical guide to curating a thoughtful wardrobe with high-quality, durable cotton garments.",
    image: "/images/blog2.webp"
  },
  {
    id: 3,
    title: "How to Wash Cotton: Ultimate Care Guide",
    date: "April 20, 2026",
    summary: "Simple tips to keep your cotton clothes soft, bright, and long-lasting wash after wash.",
    image: "/images/blog3.webp"
  },
  {
    id: 4,
    title: "Summer Fashion Trends 2026",
    date: "May 12, 2026",
    summary: "Explore this season's most popular colors, silhouettes, and styling ideas for a comfortable summer wardrobe.",
    image: "/images/blog4.webp"
  },
  {
    id: 5,
    title: "Behind the Scenes: Designing the CottonCanvas Collection",
    date: "June 5, 2026",
    summary: "Take a closer look at the inspiration, design process, and craftsmanship behind our latest apparel collection.",
    image: "/images/blog5.webp"
  }
];
