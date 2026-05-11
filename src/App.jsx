import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
  },
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Nav turns solid after 50px of scroll
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    {
      name: "High-Grade Timber",
      desc: "Sourced with care and precision for residential and commercial construction.",
      image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800",
    },
    {
      name: "Premium Plywood",
      desc: "Durable and reliable materials for high-end furniture and interiors.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    },
    {
      name: "Structural Solutions",
      desc: "Customized timber requirements for roofing, flooring, and structural work.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
    },
  ];

  return (
    <div id="home" className="font-classic-body bg-[#1a1410] text-[#f9f5f0] texture-overlay min-h-screen">
      
      {/* TOP HEADER - Becomes hidden when scrolled to keep screen clean */}
      <div className={`py-2 px-6 border-b border-[#b08d57]/20 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] opacity-70 hidden md:flex transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-70'}`}>
        <span>Est. 2002 — Your One-Stop Timber Destination</span>
        <div className="flex gap-10">
          <span>📞 +91 94435 81293</span>
          <span>📍 Nagercoil, Tamil Nadu</span>
        </div>
      </div>

      {/* MAIN NAVIGATION - FIXED HEADER VISIBILITY */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#1a1410] shadow-2xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="font-classic-serif text-2xl md:text-3xl tracking-tighter text-[#b08d57]">
              RTN <span className="text-[#f9f5f0] font-light">ANISH</span>
            </h1>
            <p className="text-[7px] uppercase tracking-[0.5em] opacity-50">Timbers & Saw Mill</p>
          </div>
          
          <ul className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#b08d57] transition-all duration-300">{link.name}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden lg:block btn-classic !py-2 !px-6 !text-[10px]">Get a Quote</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000" 
            className="w-full h-full object-cover opacity-25"
            alt="Timber craft background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410] via-transparent to-[#1a1410]" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-[#b08d57] uppercase tracking-[0.6em] text-[10px] mb-4 block font-semibold">Reliability Since 2002</span>
          <h2 className="font-classic-serif text-4xl md:text-7xl mb-6 leading-tight">
            Premium <span className="italic font-bold text-[#f9f5f0]">Timber Solutions</span>
          </h2>
          <div className="classic-line-short !my-6" />
          <p className="text-base md:text-lg text-[#d6c1ab] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Welcome to RTN Anish Timbers — your trusted partner for high-grade materials for residential, commercial, and industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#about" className="btn-classic-filled !py-3 !px-10">Our Story</a>
            <a href="#products" className="btn-classic !py-3 !px-10">View Products</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="image-frame order-2 lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200" 
              alt="Timber stack"
              className="w-full h-[400px] object-cover grayscale-[0.2]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#b08d57] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">About Us</span>
            <h3 className="font-classic-serif text-3xl md:text-4xl text-[#2c241e] mb-8 leading-tight">Committed to Quality,<br/>Built on Trust</h3>
            <div className="space-y-4 text-[#5c4d42] text-base leading-relaxed font-light">
              <p>Welcome to RTN Anish Timbers — your trusted partner for premium quality timber and wood solutions.</p>
              <p>With a strong commitment to quality, durability, and customer satisfaction, we specialize in supplying high-grade timber. From construction wood and plywood to customized requirements, we provide materials sourced with precision.</p>
              <p className="italic border-l-4 border-[#b08d57] pl-4 py-1">We believe in building long-term relationships through honest business practices and timely delivery.</p>
              <p>Whether it’s for furniture, interiors, roofing, or structural work, we are your one-stop destination for all timber needs.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 border-t border-[#b08d57]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b08d57] uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">What We Do</span>
            <h2 className="font-classic-serif text-4xl md:text-5xl italic text-[#f9f5f0]">Our Services</h2>
            <div className="classic-line-short" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Timber Supply", desc: "Supplying high-grade construction wood and hardwoods." },
              { title: "Custom Milling", desc: "Precision saw mill services tailored to your project requirements." },
              { title: "Consultation", desc: "Expert advice on wood selection for roofing and furniture." }
            ].map((s, idx) => (
              <div key={idx} className="p-8 border border-[#b08d57]/20 hover:border-[#b08d57]/60 transition-all bg-[#1a1410]/50">
                <h4 className="font-classic-serif text-2xl text-[#b08d57] mb-4">{s.title}</h4>
                <p className="text-[#d6c1ab] text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-6 bg-dark-wood">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b08d57] uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Collection</span>
            <h2 className="font-classic-serif text-4xl md:text-5xl italic text-[#f9f5f0]">Products</h2>
            <div className="classic-line-short" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden mb-6 aspect-video border border-[#b08d57]/10">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="font-classic-serif text-xl mb-2 text-[#f9f5f0]">{p.name}</h4>
                <p className="text-[#d6c1ab] text-xs font-light mb-4 opacity-80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-[#120c08]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="py-12 px-6 border border-[#b08d57]/20">
            <h2 className="font-classic-serif text-4xl md:text-6xl mb-6">Contact Us</h2>
            <p className="text-[#d6c1ab] text-lg font-light mb-10 italic max-w-xl mx-auto">
              Ready to start your project? Reach out to our experts in Nagercoil.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:9443581293" className="btn-classic-filled">Call Office</a>
              <a href="https://wa.me/919443581293" className="text-[#f9f5f0] uppercase tracking-[0.3em] text-[10px] font-bold border-b border-[#b08d57] pb-1">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0705] py-20 px-6 border-t border-[#b08d57]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h1 className="font-classic-serif text-2xl md:text-3xl tracking-tighter text-[#b08d57]">
              RTN <span className="text-[#f9f5f0] font-light">ANISH</span>
            </h1>
            <p className="text-[7px] uppercase tracking-[0.5em] opacity-50">Timbers & Saw Mill</p>
            <p className="text-sm text-[#d6c1ab] font-light leading-loose max-w-sm opacity-60">
              Specializing in high-grade timber for residential, commercial, and industrial projects. Sourced with care, delivered with precision since 2002.
            </p>
          </div>
          <div>
            <h6 className="text-[#b08d57] uppercase tracking-[0.3em] text-[11px] font-bold mb-8">Contact</h6>
            <ul className="text-sm space-y-4 opacity-60 font-light">
              <li className="flex gap-3"><span>📍</span> 49/110-A, Periyavilai, Eathamozhi, Nagercoil, TN</li>
              <li className="flex gap-3"><span>📞</span> +91 94435 81293</li>
              <li className="flex gap-3"><span>✉️</span> info@rtnanish.com</li>
            </ul>
          </div>
          <div>
            <h6 className="text-[#b08d57] uppercase tracking-[0.3em] text-[11px] font-bold mb-8">Navigation</h6>
            <ul className="text-sm space-y-4 opacity-60 font-light">
              <li><a href="#home" className="hover:text-[#b08d57] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#b08d57] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#b08d57] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#b08d57] transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-[10px] uppercase tracking-widest">
          <p>© 2026 RTN ANISH TIMBERS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
