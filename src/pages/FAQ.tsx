import React from 'react';
import { SEO } from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { faqs } from '../data/faqData';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';
import { getFAQPageSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

export default function FAQ() {
  const faqSchema = [
    getFAQPageSchema(faqs),
    getBreadcrumbSchema([
      { name: "Frequently Asked Questions", path: "/faq" }
    ])
  ];

  return (
    <div className="bg-white min-h-screen text-black">
      <SEO 
        title="Frequently Asked Questions (FAQ) | CottonCanvas"
        description="Find answers to all frequently asked questions about CottonCanvas organic cotton clothing, sizing guides, express shipping, order tracking, and 30-day returns."
        canonical="/faq"
        keywords="cotton canvas faq, organic cotton clothing questions, wash cotton properly, return policy, shipping times india, custom cotton orders"
        schema={faqSchema}
      />

      {/* Hero Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-3 text-black">
            Customer Help Center
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Quick, comprehensive answers regarding our pure organic cotton apparel, sustainability certifications, sizing details, shipping timelines, and returns.
          </p>

          {/* Quick Feature Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto text-left">
            <div className="p-4 bg-white border border-gray-200 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-black mb-2" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-black">100% GOTS Certified</h2>
              <p className="text-[11px] text-gray-700 mt-1 font-light">Bio-organic cotton grown with zero harmful toxins.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 shadow-xs">
              <Truck className="w-5 h-5 text-black mb-2" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-black">Free Express Delivery</h2>
              <p className="text-[11px] text-gray-700 mt-1 font-light">Complimentary shipping on all orders above ₹999.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 shadow-xs">
              <RefreshCw className="w-5 h-5 text-black mb-2" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-black">30-Day Free Returns</h2>
              <p className="text-[11px] text-gray-700 mt-1 font-light">Hassle-free doorstep exchanges and returns.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 shadow-xs">
              <Sparkles className="w-5 h-5 text-black mb-2" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-black">Pre-Shrunk Weaves</h2>
              <p className="text-[11px] text-gray-700 mt-1 font-light">Enzyme washed to prevent post-laundry shrinkage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Component */}
      <FAQSection showTitleHeader={false} />
    </div>
  );
}
