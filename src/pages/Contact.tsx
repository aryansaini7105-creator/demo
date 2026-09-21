import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getOrganizationSchema, getBreadcrumbSchema, BASE_URL } from '../utils/schemaGenerator';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact CottonCanvas Customer Support",
      "url": `${BASE_URL}/contact`,
      "description": "Contact CottonCanvas for sustainable organic cotton apparel inquiries, order support, and wholesale partnerships."
    },
    getBreadcrumbSchema([
      { name: "Contact Us", path: "/contact" }
    ]),
    getOrganizationSchema()
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-black">
      <SEO 
        title="Contact CottonCanvas — Customer Support & Wholesale Inquiries"
        description="Get in touch with CottonCanvas. Inquire about pure organic cotton clothing, custom printing, order tracking, bulk purchase, and retail partnerships."
        canonical="/contact"
        keywords="contact cotton canvas, cotton clothing customer care, organic clothing supplier, bulk cotton apparel, custom cotton printing contact"
        schema={contactSchemas}
      />
      <section className="bg-white py-24 border-b border-gray-200 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-4 text-black">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Contact Us
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
            We'd love to hear from you. Whether you have questions about our products, orders, or sizing, we are here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & FAQs */}
          <div>
            <div className="bg-white border border-gray-200 p-10 mb-10 shadow-sm">
              <h2 className="text-2xl font-serif text-black mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                 <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-1">Our Studio</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      CottonCanvas Headquarters<br />
                      Main Market Road, Yamunanagar, Haryana 135001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-1">Email Us</h3>
                    <p className="text-gray-700 text-sm">aryansaini7105@gmail.com</p>
                    <p className="text-gray-500 text-xs mt-1">Typical response time: Under 12 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-1">Phone & WhatsApp</h3>
                    <p className="text-gray-700 text-sm">+91 7988227604</p>
                    <p className="text-gray-500 text-xs mt-1">Available Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-1">Operating Hours</h3>
                    <p className="text-gray-700 text-sm">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                      Sunday: Closed (Online orders operate 24/7)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-black mb-1">What are your typical shipping times?</h4>
                  <p className="text-gray-600">Standard domestic deliveries take 3–5 business days. Express shipping is available at checkout.</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-black mb-1">What is your return policy?</h4>
                  <p className="text-gray-600">We offer a 30-day hassle-free exchange and return window for unwashed, unworn garments with original tags intact.</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-black mb-1">Do you offer bulk wholesale pricing?</h4>
                  <p className="text-gray-600">Yes! Use the contact form to request our wholesale catalog and bulk purchase price tiers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-10 shadow-sm flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-black mb-3">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto mb-8">
                  Thank you for reaching out to CottonCanvas. A member of our customer care team will respond to you shortly.
                </p>
                <button 
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="inline-block bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-black mb-2">Send Us a Message</h2>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="contact-email" 
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="contact-phone" 
                        name="phone"
                        autoComplete="tel"
                        className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                        placeholder="+91 7988227604"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="contact-subject" 
                      name="subject"
                      required
                      className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Message</label>
                    <textarea 
                      id="contact-message" 
                      name="message"
                      required
                      rows={4}
                      className="w-full border border-gray-200 bg-white p-3 text-black focus:ring-1 focus:ring-black focus:border-black transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-black text-white px-6 py-4 font-bold text-sm uppercase tracking-[.2em] shadow-lg hover:bg-opacity-90 transition-all focus:outline-none cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
