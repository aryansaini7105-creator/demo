import React from 'react';
import { SEO } from '../components/SEO';
import { getOrganizationSchema, getBreadcrumbSchema, BASE_URL } from '../utils/schemaGenerator';

export default function About() {
  const team = [
    {
      name: "Aanya Sharma",
      role: "Founder & CEO",
      image: "/images/team1.webp"
    },
    {
      name: "Rohan Kapoor",
      role: "Creative Director",
      image: "/images/team2.webp"
    },
    {
      name: "Sneha Iyer",
      role: "Head of Product Development",
      image: "/images/team3.webp"
    },
    {
      name: "Devendra Patel",
      role: "Customer Experience Manager",
      image: "/images/team4.webp"
    }
  ];

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About CottonCanvas",
      "url": `${BASE_URL}/about`,
      "description": "Learn about CottonCanvas, our sustainable clothing story, organic fabric benefits, ethical craftsmanship, and core team.",
      "mainEntity": {
        ...getOrganizationSchema(),
        "employee": team.map(member => ({
          "@type": "Person",
          "name": member.name,
          "jobTitle": member.role,
          "image": member.image.startsWith('http') ? member.image : `${BASE_URL}${member.image}`
        }))
      }
    },
    getBreadcrumbSchema([
      { name: "About Us", path: "/about" }
    ])
  ];

  return (
    <div className="bg-white text-black">
      <SEO 
        title="About CottonCanvas — Ethical Sustainable Cotton Clothing Story"
        description="Learn about CottonCanvas, our mission, values, and commitment to delivering certified organic cotton clothing with unmatched style, comfort, and craftsmanship."
        canonical="/about"
        keywords="about cottoncanvas, organic cotton clothing brand, ethical fashion story, sustainable textile craftsmanship, eco apparel vision"
        schema={aboutSchema}
      />
      {/* Hero */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <p className="text-[10px] uppercase tracking-[.3em] font-bold text-black mb-4">
            Organic Integrity. Pure Design.
          </p>
          <h1 className="text-5xl font-serif text-black mb-6">
            The Benefits of Organic Cotton Clothing
          </h1>
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
                  src="/images/about_manufacturing.webp" 
                  alt="A raw demonstration of ethical clothing production focusing on organic textiles" 
                  className="object-cover w-full h-full"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
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

      {/* Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-3">Principles</p>
            <h2 className="text-3xl font-serif">What Drives Us Forward</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 1</div>
              <h4 className="text-lg font-bold mb-3">Quality Craft</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We source pure, long-staple cotton threads to produce soft and durable garments.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors">
              <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mb-4">Core 2</div>
              <h4 className="text-lg font-bold mb-3">Eco-Friendly</h4>
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={300}
                    height={400}
                    loading="lazy"
                    decoding="async"
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
