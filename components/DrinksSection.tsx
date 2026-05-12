"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ItemModal from "./ItemModal";
import Image from "next/image";

const drinks = [
  {
    name: "Mocha",
    price: "£3.00",
    description:
      "Rich espresso combined with chocolate syrup and creamy steamed milk for a smooth indulgence.",
    image: "/images/drinks/mocha.png",
  },
  {
    name: "Latte",
    price: "£3.00",
    description:
      "A gentle blend of espresso and steamed milk, topped with a soft layer of foam.",
    image: "/images/drinks/latte.png",
  },
  {
    name: "Cappuccino",
    price: "£3.00",
    description:
      "A classic espresso drink with frothed milk and a hint of cocoa for an elegant finish.",
    image: "/images/drinks/cappuccino.png",
  },
  {
    name: "Hot Chocolate",
    price: "£3.00",
    description:
      "Velvety hot chocolate made with premium cocoa and steamed milk for a cozy treat.",
    image: "/images/drinks/hot-chocolate.png",
  },
  {
    name: "Americano",
    price: "£3.00",
    description:
      "Smooth espresso diluted with hot water for a bright, full-bodied coffee experience.",
    image: "/images/drinks/americano.png",
  },
  {
    name: "English Tea",
    price: "£2.50",
    description:
      "A classic English tea steeped to the perfect strength, served warm and comforting.",
    image: "/images/drinks/english-tea.png",
  },
  {
    name: "Green Tea",
    price: "£2.50",
    description: "Delicate green tea brewed fresh with a light, grassy finish.",
    image: "/images/drinks/green-tea.png",
  },
  {
    name: "Moroccan Tea",
    price: "£2.50",
    description:
      "A fragrant tea blend with mint and warming spices, made to refresh and delight.",
    image: "/images/drinks/moroccan-tea.png",
  },
];

export default function DrinksSection() {
  const [selectedDrink, setSelectedDrink] = useState<
    (typeof drinks)[number] | null
  >(null);

  return (
    <section id="drinks" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, #FDF2F4 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #FDEBD4 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-accent text-burgundy-400 text-sm tracking-[0.25em] uppercase mb-3">
              Warm Up Your Day
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-chocolate-800 mb-4">
              Hot <span className="hand-underline">Drinks</span> & Teas
            </h2>
            <p className="font-body text-chocolate-800/50 text-lg max-w-md mx-auto font-light">
              The perfect companion to any pastry. All made fresh to order,
              350ml.
            </p>
          </div>
        </Reveal>

        {/* Drinks in a cozy visual grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {drinks.map((drink, i) => (
            <Reveal key={drink.name} delay={i * 0.08} direction="scale">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => setSelectedDrink(drink)}
                className="group relative cursor-pointer bg-white rounded-3xl overflow-hidden border border-burgundy-100/30 hover:shadow-lg hover:shadow-burgundy-900/8 transition-shadow duration-400"
              >
                {/* Drink image */}
                <div className="relative h-32">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Cozy decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream-200/20 to-burgundy-50/30"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-gold-accent/10 rounded-full blur-sm"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-rose-soft/15 rounded-full"></div>

                <div className="relative z-10 p-4 text-center">
                  <h3 className="font-display text-lg font-semibold text-chocolate-800 group-hover:text-burgundy-700 transition-colors mb-1">
                    {drink.name}
                  </h3>
                  <p className="font-display text-burgundy-600 font-semibold">
                    {drink.price}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <ItemModal
        item={selectedDrink}
        open={Boolean(selectedDrink)}
        onClose={() => setSelectedDrink(null)}
      />
    </section>
  );
}
