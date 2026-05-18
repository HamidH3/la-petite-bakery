"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";
import ItemModal from "./ItemModal";

const pastries = [
  {
    name: "Croissant",
    description:
      "Pure butter croissant, a golden brown french pastry, layered and puffy.",
    price: "£1.80",
    image: "/images/pastries/croissant.png",
  },
  {
    name: "Almond Croissant",
    description:
      "Pure butter Almond Croissant, golden brown french pastry, layered and puffy with almond paste inside topped with almond flakes on top.",
    price: "£2.00",
    image: "/images/pastries/almond-croissant.png",
  },
  {
    name: "Pain Au Chocolat",
    description:
      "Pure butter Pain Au Chocolat, a french viennoiserie roll with a few chocolate sticks inside.",
    price: "£1.80",
    image: "/images/pastries/pain-au-chocolat.png",
  },
];

export default function PastriesSection() {
  const [selectedPastry, setSelectedPastry] = useState<
    (typeof pastries)[number] | null
  >(null);

  return (
    <section
      id="pastries"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFAF5 0%, #FDF2F4 40%, #FFF5EB 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-burgundy-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cream-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gold-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-rose-soft/20 rounded-full blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-accent text-burgundy-400 text-sm tracking-[0.25em] uppercase mb-3">
              Freshly Baked Every Morning
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-chocolate-800 mb-4">
              Fresh <span className="hand-underline">Pastries</span>
            </h2>
            <p className="font-body text-chocolate-800/50 text-lg max-w-lg mx-auto font-light">
              Pure butter French pastries, baked golden every morning.
            </p>
          </div>
        </Reveal>

        {/* Horizontal scrolling cards on mobile, grid on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastries.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.08}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPastry(item)}
                className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-burgundy-100/30 hover:bg-white hover:shadow-lg hover:shadow-burgundy-900/5 transition-all duration-400 flex flex-col h-40 md:h-52"
              >
                {/* Product image */}
                <div className="flex justify-center mb-3">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-xs sm:text-base font-semibold text-chocolate-800 group-hover:text-burgundy-700 transition-colors flex-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <span className="font-display text-burgundy-600 font-semibold text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="hidden md:block font-body text-sm text-chocolate-800/50 leading-relaxed line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <ItemModal
        item={selectedPastry}
        open={Boolean(selectedPastry)}
        onClose={() => setSelectedPastry(null)}
      />
    </section>
  );
}
