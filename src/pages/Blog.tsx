import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts } from '../data';
import { Calendar, ArrowRight, X, Clock, CheckCircle, Tag } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema, getBlogPostSchema, BASE_URL } from '../utils/schemaGenerator';

const blogDetailedContent: Record<number, { readTime: string; tags: string[]; content: string[] }> = {
  1: {
    readTime: "4 min read",
    tags: ["Minimalism", "Basics", "Organic Cotton"],
    content: [
      "A minimalist wardrobe is not about having as few clothes as possible; it is about having the right clothes that seamlessly match and bring everyday confidence.",
      "The foundational element is always pure organic cotton. Its breathable, temperature-regulating natural fibers ensure maximum comfort whether you're layering in cooler months or keeping cool in peak summer.",
      "Our top 5 essentials include: the Classic Crew Tee in pristine white, a structured cotton overshirt, relaxed-fit chinos, a versatile charcoal hoodie, and lightweight cotton knitwear.",
      "Investing in quality weave over fast-fashion synthetics means each piece retains its shape, color, and premium drape through hundreds of wash cycles."
    ]
  },
  2: {
    readTime: "5 min read",
    tags: ["Capsule Wardrobe", "Eco Living", "Style Tips"],
    content: [
      "Transitioning to a capsule wardrobe begins with taking inventory of what you already love and wear repeatedly.",
      "Identify a cohesive color palette anchored by earth tones: warm whites, deep navy, sand, and washed black. This allows any top to seamlessly pair with any bottom.",
      "Choose durable natural textiles like certified organic cotton and linen that age gracefully with wear, developing unique character rather than pill and unravel like synthetic blends.",
      "By narrowing your collection to 25-30 versatile, high-integrity items, you reduce decision fatigue every morning and minimize textile waste dramatically."
    ]
  },
  3: {
    readTime: "6 min read",
    tags: ["Fabric Care", "Longevity", "Sustainability"],
    content: [
      "Pure cotton is one of the most resilient natural fabrics on earth, but improper washing can cause unwanted shrinking and fiber stiffness.",
      "Golden Rule 1: Always wash with cold water (30°C / 85°F or lower). Cold water preserves natural cotton fiber elasticity, stops dye bleeding, and cuts laundry energy consumption by up to 75%.",
      "Golden Rule 2: Turn your printed and colored garments inside out before washing to protect the outer surface from friction and fading.",
      "Golden Rule 3: Air dry naturally whenever possible. High heat in tumble dryers breaks down cotton cellulose fibers over time. If using a dryer, opt for the lowest heat setting and remove while still slightly damp."
    ]
  },
  4: {
    readTime: "3 min read",
    tags: ["Summer Trends", "Color Palette", "Breathable Fabrics"],
    content: [
      "Summer 2026 embraces loose tailoring, unbleached natural cotton textures, and sun-kissed terracotta hues.",
      "Ditch synthetic polyesters that trap moisture and humidity against your skin. Pure organic cotton absorbs moisture naturally and allows airflow, keeping body temperatures balanced.",
      "Key silhouettes for this summer include breezy oversized camp shirts, wide-leg drawstring trousers, and relaxed midi slip dresses that flow with every step."
    ]
  },
  5: {
    readTime: "5 min read",
    tags: ["Behind The Scenes", "Craftsmanship", "Ethics"],
    content: [
      "Behind every CottonCanvas garment is a conscious commitment to zero hazardous chemicals, fair living wages, and meticulous craftsmanship.",
      "Our design studio starts with fiber selection: non-GMO seeds grown under organic farming methods with natural rainwater harvesting.",
      "From yarn spinning to precise hand-stitching, we prioritize reinforced seams, clean finishes, and timeless silhouettes rather than chasing fleeting micro-trends."
    ]
  }
};

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const blogSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "CottonCanvas Sustainable Fashion Journal",
      "url": `${BASE_URL}/blog`,
      "description": "Fashion insights, sustainable clothing care guides, capsule wardrobe guides, and certified organic cotton apparel updates."
    },
    getBreadcrumbSchema([
      { name: "Blog", path: "/blog" }
    ]),
    ...blogPosts.map(post => getBlogPostSchema(post))
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <SEO 
        title="Fashion Blog & Sustainable Cotton Clothing Guides | CottonCanvas"
        description="Read expert guides on building minimalist capsule wardrobes, washing pure cotton without shrinking, and discovering ethical fashion trends."
        canonical="/blog"
        type="article"
        keywords="cotton fashion blog, organic clothing care, how to wash cotton, sustainable styling tips, minimalist wardrobe guide"
        schema={blogSchema}
      />
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-4 text-black">Journal</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Our Blog
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
            Stories, style guides, and care tips from the CottonCanvas team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => {
              const details = blogDetailedContent[post.id];
              return (
                <motion.article 
                  key={post.id}
                  id={`post-${post.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-white border-b border-gray-200 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                    />
                    {details && (
                      <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2.5 py-1 tracking-wider backdrop-blur-xs">
                        {details.readTime}
                      </span>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-gray-600 mb-4">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-black" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:underline underline-offset-4 transition-all">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                      {post.summary}
                    </p>
                    <button 
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      aria-label={`Read full article: ${post.title}`}
                      className="inline-flex items-center font-bold text-xs uppercase tracking-wider text-black hover:text-amber-900 transition-colors mt-auto group/btn cursor-pointer py-2 focus:outline-none"
                    >
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Article Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl p-6 sm:p-10 relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-modal-title"
            >
              <button 
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article popup"
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-mono">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blogDetailedContent[selectedPost.id]?.readTime || "4 min read"}</span>
              </div>

              <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-serif text-black mb-6 leading-snug">
                {selectedPost.title}
              </h2>

              <div className="aspect-[16/9] w-full mb-6 overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base font-light">
                {blogDetailedContent[selectedPost.id]?.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {blogDetailedContent[selectedPost.id]?.tags && (
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-2 items-center">
                  <Tag className="w-3.5 h-3.5 text-gray-400 mr-1" />
                  {blogDetailedContent[selectedPost.id]?.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 pt-4">
                <button 
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
