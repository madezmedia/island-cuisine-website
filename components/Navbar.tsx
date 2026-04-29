'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
        <Link
          href="/"
          className="relative h-12 w-12 md:h-14 md:w-14 transition-transform hover:scale-105"
        >
          <img
            src="/images/logo-raw.jpg"
            alt="Island Cuisine Logo"
            className="rounded-full object-cover w-full h-full border-2 border-white/20 shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#E87A5D] ${scrolled ? 'text-[#1A3A3A]' : 'text-white/90'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+19802372677"
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${scrolled
                ? 'bg-[#E87A5D] text-white'
                : 'bg-white text-[#E87A5D]'
              }`}
          >
            <Phone size={16} />
            Call to Order
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-[#1A3A3A]' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-[#1A3A3A]' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#1A3A3A] hover:text-[#E87A5D] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+19802372677"
                className="flex items-center justify-center gap-2 w-full bg-[#E87A5D] text-white py-3 rounded-xl font-semibold mt-4 hover:bg-[#d6694c] transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
