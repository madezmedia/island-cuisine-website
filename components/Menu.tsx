'use client';

import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    // Signature Dishes
    {
      name: 'Oxtail & Chicken',
      description: 'Tender oxtail slow-cooked with seasoned chicken, served with rice and peas',
      price: '$18.99',
      category: 'signature',
      popular: true
    },
    {
      name: 'Jerk Chicken',
      description: 'Authentic Jamaican jerk chicken marinated for 24 hours in scotch bonnet peppers',
      price: '$15.99',
      category: 'signature',
      popular: true
    },
    {
      name: 'Brown Stew Fish',
      description: 'Fresh fish stewed in brown sauce with herbs and spices',
      price: '$16.99',
      category: 'signature',
      popular: false
    },
    {
      name: 'Curry Goat',
      description: 'Tender goat meat in rich curry sauce with potatoes and carrots',
      price: '$17.99',
      category: 'signature',
      popular: false
    },
    // Chicken Dishes
    {
      name: 'Curry Chicken',
      description: 'Chicken cooked in traditional Jamaican curry with spinach',
      price: '$14.99',
      category: 'chicken',
      popular: false
    },
    {
      name: 'Brown Stew Chicken',
      description: 'Chicken stewed in brown sauce with herbs',
      price: '$13.99',
      category: 'chicken',
      popular: false
    },
    // Sides
    {
      name: 'Mac & Cheese',
      description: 'Creamy baked macaroni and cheese',
      price: '$4.99',
      category: 'sides',
      popular: true
    },
    {
      name: 'Rice and Peas',
      description: 'Traditional Jamaican rice and kidney beans',
      price: '$3.99',
      category: 'sides',
      popular: false
    },
    {
      name: 'Festivals',
      description: 'Sweet fried dumplings (6 pieces)',
      price: '$4.99',
      category: 'sides',
      popular: false
    },
    {
      name: 'Cabbage',
      description: 'Steamed cabbage with carrots and spices',
      price: '$3.99',
      category: 'sides',
      popular: false
    },
    // Vegetarian
    {
      name: 'Curry Chickpeas',
      description: 'Chickpeas in rich curry sauce with potatoes',
      price: '$12.99',
      category: 'vegetarian',
      popular: true
    },
    {
      name: 'Callaloo',
      description: 'Jamaican leafy vegetable cooked with onions and tomatoes',
      price: '$10.99',
      category: 'vegetarian',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'signature', name: 'Signature' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'sides', name: 'Sides' },
    { id: 'vegetarian', name: 'Vegetarian' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4" style={{ backgroundColor: 'rgb(var(--alabaster))' }}>
      <div className="max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ 
            fontFamily: 'var(--font-lora)',
            color: 'rgb(var(--lush-palm))'
          }}>
            Our Menu
          </h2>
          <div className="w-32 h-1.5 mx-auto mb-8 rounded-full" style={{ backgroundColor: 'rgb(var(--papaya-coral))' }}></div>
          <p className="text-xl max-w-2xl mx-auto" style={{ 
            color: 'rgb(var(--foreground))',
            fontFamily: 'var(--font-montserrat)'
          }}>
            Authentic Caribbean flavors made with love and tradition
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'cta-button'
                  : 'bg-white text-gray-700 hover:shadow-md border-2 border-gray-200'
              }`}
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid - Premium Two-Column */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="menu-item-card relative"
            >
              {item.popular && (
                <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full text-white text-sm font-semibold"
                     style={{ backgroundColor: 'rgb(var(--sunset-gold))' }}>
                  ⭐ Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold pr-4" style={{ 
                  fontFamily: 'var(--font-montserrat)',
                  color: 'rgb(var(--lush-palm))'
                }}>
                  {item.name}
                </h3>
                <span className="text-2xl font-bold flex-shrink-0" style={{ 
                  fontFamily: 'var(--font-lora)',
                  color: 'rgb(var(--papaya-coral))'
                }}>
                  {item.price}
                </span>
              </div>
              
              <p className="text-base leading-relaxed" style={{ 
                color: 'rgb(var(--muted-foreground))',
                fontFamily: 'var(--font-montserrat)'
              }}>
                {item.description}
              </p>

              {/* Dietary Badges */}
              <div className="flex gap-2 mt-4">
                {item.category === 'vegetarian' && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    🌱 Vegetarian
                  </span>
                )}
                {item.category === 'signature' && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                    🔥 Signature
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Full Menu */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Want to see our complete menu with all options?
          </p>
          <button className="cta-button text-lg">
            📄 Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
