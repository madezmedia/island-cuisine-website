'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a server
    window.location.href = `mailto:info@islandcuisineclt.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#1A3A3A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#E87A5D] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
            Have questions or want to place a large order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 font-serif">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white/90">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#E87A5D] focus:bg-white/15 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/90">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#E87A5D] focus:bg-white/15 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white/90">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#E87A5D] focus:bg-white/15 transition-all"
                  placeholder="(980) 237-2677"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/90">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#E87A5D] focus:bg-white/15 transition-all resize-none"
                  placeholder="Tell us about your order or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E87A5D] hover:bg-[#d6694c] text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 font-serif">Quick Contact</h3>

              <div className="space-y-6">
                <a
                  href="tel:+19802372677"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group border border-white/5"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform bg-[#E87A5D] w-12 h-12 flex items-center justify-center rounded-full">📞</div>
                  <div>
                    <p className="text-sm text-white/60">Call Us</p>
                    <p className="text-lg font-semibold">(980) 237-2677</p>
                  </div>
                </a>

                <a
                  href="mailto:info@islandcuisineclt.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group border border-white/5"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform bg-[#E87A5D] w-12 h-12 flex items-center justify-center rounded-full">✉️</div>
                  <div>
                    <p className="text-sm text-white/60">Email Us</p>
                    <p className="text-lg font-semibold">info@islandcuisineclt.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E87A5D] to-[#FFD166] rounded-2xl p-8 text-[#1A3A3A] shadow-lg">
              <h3 className="text-2xl font-bold mb-4 font-serif">Follow Us on Social</h3>
              <p className="text-[#1A3A3A]/80 mb-6 font-medium">
                Stay updated with specials, events, and behind-the-scenes content!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/islandcuisineclt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/40 hover:bg-white/60 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-sm backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <span className="text-2xl">📘</span>
                </a>
                <a
                  href="https://instagram.com/islandcuisineclt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/40 hover:bg-white/60 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-sm backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <span className="text-2xl">📷</span>
                </a>
                <a
                  href="https://tiktok.com/@islandcuisineclt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/40 hover:bg-white/60 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-sm backdrop-blur-sm"
                  aria-label="TikTok"
                >
                  <span className="text-2xl">🎵</span>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <h3 className="text-xl font-bold mb-3 font-serif">Large Orders & Catering</h3>
              <p className="text-white/70 mb-6">
                Planning an event? We offer catering services for parties of 10+.
              </p>
              <a
                href="tel:+19802372677"
                className="inline-block bg-[#E87A5D] hover:bg-[#d6694c] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                Call for Catering Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
