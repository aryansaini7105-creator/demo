import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CottonCanvas Blog",
    "url": "https://cottoncanvascloths.netlify.app/blog",
    "description": "Fashion tips, sustainable clothing insights and cotton apparel trends."
  };

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <SEO 
        title="Fashion Blog - Cotton Clothing Style Tips - CottonCanvas"
        description="Read the latest fashion insights, styling tips, clothing guides, and trend updates from Cotton Canvas to elevate your wardrobe."
        schema={blogSchema}
      />
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-4 text-black">Journal</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">Sustainable Cotton Clothing Insights & Care Guides</h1>
          <h2 className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mt-4 font-light">
            Capsule Wardrobes, Organic Fabrics & Professional Cotton Clothing Care Articles
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Essential insights on curated minimalist wardrobe essentials, care guides on how to wash cotton properly, and expert sustainable styling tips.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white border-b border-gray-200">
                  <img 
                    src={post.image} 
                    alt={`Beautiful graphic overview for the article detailing ${post.title}`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    width={400}
                    height={250}
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-black mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:underline underline-offset-4 transition-all">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                    {post.summary}
                  </p>
                  <a href="#" className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-black hover:text-black transition-colors mt-auto">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
