import React from 'react';
import Image from 'next/image';

const thaiDishes = [
  {
    name: 'Pad Thai Goong',
    description: 'Classic stir-fried rice noodles with prawns, tofu, bean sprouts, peanuts, and lime.',
  },
  {
    name: 'Gaeng Keow Wan Gai',
    description: 'Creamy green curry with tender chicken, Thai eggplant, bamboo shoots, and sweet basil.',
  },
];

const fusionDishes = [
  {
    name: 'Truffle Mushroom Risotto',
    description: 'Arborio rice slow-cooked with wild mushrooms, parmesan cheese, and a delicate truffle oil infusion.',
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Crispy-skin salmon fillet served with roasted asparagus, quinoa, and a zesty lemon-dill sauce.',
  },
];

const FoodMenu = () => {
  return (
    <section id="food-menu" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#6d1d2a] mb-4">
            Culinary Delights
          </h2>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Savor the exquisite flavors at Chakra Hotel, where traditional Thai tastes meet contemporary European fusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Image + Thai Dishes */}
          <div className="space-y-8">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/thai meal.png"
                alt="Authentic Thai Meal"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-[#6d1d2a] mb-4">Classic Thai Flavors</h3>
              <ul className="space-y-3">
                {thaiDishes.map((dish, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium text-[#8c2f3e]">{dish.name}:</span> {dish.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: European Fusion + Image */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-[#6d1d2a] mb-4">European Fusion Creations</h3>
              <ul className="space-y-3">
                {fusionDishes.map((dish, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium text-[#8c2f3e]">{dish.name}:</span> {dish.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/restaurant-area-1.jpg"
                alt="Elegant dining area at Chakra Hotel"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
