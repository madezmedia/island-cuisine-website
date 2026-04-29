'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/interior.png',
      title: 'Authentic Caribbean Flavors',
      subtitle: 'Charlotte\'s Premier Jamaican Restaurant',
      cta: 'View Our Menu',
      link: '#menu'
    },
    {
      image: '/images/jerk-chicken.png',
      title: 'Fresh Jerk Chicken',
      subtitle: 'Marinated to Perfection with Island Spices',
      cta: 'Order Now',
      link: 'tel:+19802372677'
    },
    {
      image: '/images/curry-goat.png',
      title: 'Island Vibes, Great Food',
      subtitle: 'Experience the Warmth of Jamaica in Charlotte',
      cta: 'Visit Us',
      link: '#location'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1A3A3A]">
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A3A]/90 via-[#1A3A3A]/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg font-serif">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-10 font-light max-w-3xl leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:+19802372677"
                className="group flex items-center gap-3 bg-[#E87A5D] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_4px_15px_rgba(232,122,93,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(232,122,93,0.6)] hover:bg-[#da664b]"
              >
                <Phone className="w-5 h-5" />
                <span>Call to Order</span>
              </a>
              <a
                href="#menu"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-[#E87A5D]"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/80 mt-16 text-sm md:text-base font-medium flex items-center gap-2 bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm"
        >
          📍 2025 E Arbors Dr #210, Charlotte, NC 28262 • 🕐 Open Tue-Sun
        </motion.p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${index === currentSlide
              ? 'w-12 h-1.5 bg-[#E87A5D]'
              : 'w-2 h-1.5 bg-white/40 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

