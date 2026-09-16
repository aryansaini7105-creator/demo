import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, MessageSquare, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs, faqCategories, FAQItem } from '../data/faqData';

interface FAQSectionProps {
  showTitleHeader?: boolean;
  limit?: number;
  initialCategory?: string;
}

export default function FAQSection({
  showTitleHeader = true,
  limit,
  initialCategory = 'all'
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']); // default open first FAQ

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    }).slice(0, limit || faqs.length);
  }, [selectedCategory, searchQuery, limit]);

  return (
    <section id="faq-section" aria-labelledby="faq-main-heading" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitleHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 id="faq-main-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black tracking-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              Clear, transparent answers about our certified organic cotton, ethical supply chain, sizing recommendations, express shipping, and 30-day returns.
            </p>
          </div>
        )}

        {/* Search & Category Filter Bar */}
        <div className="space-y-6 mb-10">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="faq-search-input" className="sr-only">Search frequently asked questions</label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword (e.g. shrink, returns, shipping, size)..."
                className="w-full bg-gray-50 border border-gray-200 pl-11 pr-10 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear FAQ search"
                  className="absolute right-3 text-xs text-gray-400 hover:text-black font-bold uppercase tracking-wider px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {faqCategories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 border border-gray-200 p-8">
              <p className="text-sm text-gray-600 mb-4">
                No matching answers found for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-block px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-300 ${
                    isOpen ? 'border-black bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-gray-700 mt-0.5 sm:mt-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-medium text-black leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-black text-white' : 'bg-gray-100 text-black'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-gray-700 text-sm leading-relaxed font-light">
                          <p>{faq.answer}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700 bg-gray-100 px-2 py-0.5">
                              {faq.categoryLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-14 bg-gray-50 border border-gray-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-serif text-black font-medium">Still have questions?</h3>
            <p className="text-gray-600 text-xs sm:text-sm font-light">
              Can't find what you're looking for? Our dedicated customer care team is here to assist you.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Contact Support
            </Link>
            <a
              href="tel:+917988227604"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 7988227604
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
