import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CottonCanvas",
    "url": "https://cottoncanvascloths.netlify.app/contact",
    "description": "Contact CottonCanvas for product inquiries, customer support and business information."
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-black">
      <SEO 
        title="Contact Cotton Canvas - Cotton Clothing Customer Support"
        description="Get in touch with Cotton Canvas for product inquiries, customer support, collaborations, or general questions. We're here to help."
        schema={contactSchema}
      />
      <section className="bg-white py-24 border-b border-gray-200 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-60 mb-4 text-black">Inquiries</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">Ethical Cotton Clothing Customer Service</h1>
          <h2 className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mt-4 font-light">
            Inquire About Customer Support, Bulk Custom Orders & Cotton Clothing Care Solutions
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-4 leading-relaxed font-light">
            We'd love to hear from you. Whether you have questions for our ethical cotton clothing representatives, need to buy organic cotton garments in bulk, or want to discuss custom organic cotton printing services, we are here to help.
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
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Address</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Aryan<br />
                      Yamunanagar 135001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Phone</h3>
                    <p className="mt-2 text-gray-700">7988227604</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Email</h3>
                    <p className="mt-2 text-gray-700">aryansaini7105@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-black p-2">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Business Hours</h3>
                    <ul className="mt-2 text-gray-700 space-y-2">
                      <li className="flex justify-between w-48 border-b border-gray-200 pb-1"><span>Mon–Fri</span> <span>9am–6pm</span></li>
                      <li className="flex justify-between w-48 border-b border-gray-200 pb-1"><span>Saturday</span> <span>10am–4pm</span></li>
                      <li className="flex justify-between w-48 pb-1 text-gray-600"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-10 shadow-inner">
              <h2 className="text-2xl font-serif text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-1">What is your return policy?</h4>
                  <p className="text-gray-700 text-sm">Returns are accepted within 30 days of purchase.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Do you offer international shipping?</h4>
                  <p className="text-gray-700 text-sm">Yes, we ship to selected countries worldwide.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">How can I track my order?</h4>
                  <p className="text-gray-700 text-sm">Tracking information is sent via email after your order is shipped.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-10 shadow-sm relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            
            {isSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center space-y-6 py-12 text-center">
                 <CheckCircle className="w-16 h-16 text-black mb-2" />
                 <h2 className="text-2xl font-serif text-black">Message Sent</h2>
                 <p className="text-gray-700">Thank you for reaching out! Our team will get back to you within 24 hours.</p>
                 <button 
                   onClick={() => setIsSubmitted(false)}
                   className="mt-4 px-6 py-3 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                 >
                   Send Another Message
                 </button>
               </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-black mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                        placeholder="7988227604"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-black focus:ring-0 focus:border-black transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-black mb-2">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full border border-gray-200 bg-white p-3 text-black focus:ring-1 focus:ring-black focus:border-black transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-black text-white px-6 py-4 font-bold text-sm uppercase tracking-[.2em] shadow-lg hover:bg-opacity-90 transition-all focus:outline-none"
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
