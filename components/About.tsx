'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#F5EDDC]">
      <div className="max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-[#1A3A3A]">
              Welcome to Island Cuisine
            </h2>
            <div className="w-32 h-1.5 mx-auto mb-8 rounded-full bg-[#E87A5D]"></div>
            <p className="text-2xl max-w-3xl mx-auto text-[#1A3A3A] font-light">
              Bringing the authentic taste of the Caribbean to Charlotte, North Carolina
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Grid - Premium */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&fit=crop"
                  alt="Caribbean feast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&fit=crop"
                  alt="Jerk chicken"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 mt-12"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/oxtail.png"
                  alt="Famous Oxtail Stew"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mt-12 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/rice-and-peas.png"
                  alt="Authentic Rice and Peas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Content with Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold font-serif text-[#1A3A3A]">
              Our Story
            </h3>
            <p className="text-lg leading-relaxed text-[#1A3A3A]/80">
              At <strong>Island Cuisine</strong>, we bring the vibrant flavors and warm hospitality
              of the Caribbean straight to your table. Our recipes have been passed down through
              generations, capturing the authentic taste of Jamaica and the islands.
            </p>

            {/* Premium Pull Quote */}
            <blockquote className="border-l-4 border-[#E87A5D] py-6 px-8 italic text-2xl rounded-r-lg bg-[#E87A5D]/10 text-[#1A3A3A] font-serif">
              &ldquo;Every dish is prepared with love using traditional cooking methods and the
              freshest ingredients. From our signature jerk chicken to our rich oxtail stew,
              each bite transports you to the sun-soaked beaches of the Caribbean.&rdquo;
            </blockquote>

            <p className="text-lg leading-relaxed text-[#1A3A3A]/80">
              Located in the heart of Charlotte, NC, we're proud to serve our community with
              the same warmth and flavor you'd find in a Jamaican home.
            </p>

            {/* Premium Feature Cards */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { icon: '🍖', title: 'Fresh Daily', desc: 'Prepared fresh every day' },
                { icon: '🌿', title: 'Authentic Spices', desc: 'Imported from Jamaica' },
                { icon: '❤️', title: 'Made with Love', desc: 'Family recipes' },
                { icon: '⭐', title: '5-Star Taste', desc: 'Customer favorite' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-[#E87A5D]/10">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-2 font-serif text-[#1A3A3A]">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
