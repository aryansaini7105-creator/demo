import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export default function About() {
  const team = [
    {
      name: "Aanya Sharma",
      role: "Founder & CEO",
      image: "https://i.pinimg.com/736x/f9/5d/6c/f95d6c9f9856209beae46a8e05a27384.jpg"
    },
    {
      name: "Rohan Kapoor",
      role: "Creative Director",
      image: "https://static.vecteezy.com/system/resources/thumbnails/034/598/907/small_2x/ai-generative-happy-business-man-in-a-suit-white-background-free-photo.jpg"
    },
    {
      name: "Sneha Iyer",
      role: "Head of Product Development",
      image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/a/g/w/l-shirtformal-ladyshop-original-imahjrf7p9wjh7wy.jpeg?q=20"
    },
    {
      name: "Devendra Patel",
      role: "Customer Experience Manager",
      image: "https://t4.ftcdn.net/jpg/06/38/86/99/360_F_638869953_rdcWeINcRcNpWRlHdQo30EWmpzYe0h9W.jpg"
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About CottonCanvas",
    "url": "https://cottoncanvascloths.netlify.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "CottonCanvas",
      "description": "CottonCanvas creates premium cotton apparel focused on comfort, durability and timeless fashion.",
      "url": "https://cottoncanvascloths.netlify.app/"
    }
  };

  return (
    <div className="bg-white text-black">
      <SEO 
        title="About Cotton Canvas - Our Cotton Clothing Story"
        description="Learn about Cotton Canvas, our mission, values, and commitment to delivering premium quality clothing with style, comfort, and craftsmanship."
        schema={aboutSchema}
      />
      {/* Hero */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] uppercase tracking-[.3em] font-bold text-black mb-4"
          >
            Organic Integrity. Pure Design.
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-black mb-6"
          >
            The Benefits of Organic Cotton Clothing
          </motion.h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Discover why our signature cotton apparel stands at the intersection of everyday skin comfort and ecological responsibility.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative p-8">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
              <div className="aspect-[4/3] overflow-hidden border border-gray-200 relative z-10 bg-white p-4 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&h=900&fm=png&q=80" 
                  alt="A raw demonstration of ethical clothing production focusing on organic textiles" 
                  className="object-cover w-full h-full"
                  width={1200}
                  height={900}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:pr-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black mb-3">Beginnings</p>
              <h2 className="text-3xl font-serif text-black mb-8">Our Ethical Cotton Clothing Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2021, CottonCanvas was created with a simple vision: to design pure organic cotton clothing and educate the market on <strong>how organic cotton is made</strong> to ensure unparalleled comfort and sustainability.
                </p>
                <p>
                  What started as a small, conscious boutique has grown into a trusted advocate for clean cotton apparel practices. Our operations center on local, verified partners who share our dedication to <strong>ethical cotton clothing production</strong>. We believe that what you wear should look elegant, feel incredibly soft against your skin, and be made with absolute respect for nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-24 border-b border-gray-800 pb-20">
            <div className="p-8 border border-gray-800">
              <h3 className="text-xl font-serif mb-4 flex items-center gap-4"><span className="text-[10px] font-sans opacity-50 tracking-widest">01</span> Benefits of Pure Cotton Clothing</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond its premium softness, one of the leading <strong>benefits of organic cotton clothing</strong> is its hypoallergenic footprint—free from synthetic chemicals, preserving soil health, and using significantly less water than standard fabrics.
              </p>
            </div>
            <div className="p-8 border border-gray-800">
              <h3 className="text-xl font-serif mb-4 flex items-center gap-4"><span className="text-[10px] font-sans opacity-50 tracking-widest">02</span> Our Sustainable Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a leading name recognized for showing how organic cotton clothing is made, setting new benchmarks for premium craftsmanship, ecological responsibility, and exceptional customer experience.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white">Our Brand Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 1</div>
              <h4 className="text-lg font-bold mb-3">Quality First</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Every garment is carefully designed and rigorously inspected.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 2</div>
              <h4 className="text-lg font-bold mb-3">Sustainability</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We strive to reduce environmental impact through responsible sourcing.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 3</div>
              <h4 className="text-lg font-bold mb-3">Customer Focus</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Our customers are at the center of every decision we make.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 4</div>
              <h4 className="text-lg font-bold mb-3">Innovation</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We continuously improve our designs and manufacturing processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-black mb-3">The People</p>
            <h2 className="text-3xl font-serif text-black">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div key={index} className="text-center group bg-white p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-6 overflow-hidden bg-white mx-auto aspect-[3/4] relative border border-gray-200 p-2">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    width={300}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-1">{member.name}</h3>
                <p className="text-gray-700 text-xs italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
