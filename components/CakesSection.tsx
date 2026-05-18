"use client";

import { Fragment, useState } from "react";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import ItemModal from "./ItemModal";

const cakes = [
  {
    group: "whole",
    name: 'Whole Cake 8" (Oreo)',
    description:
      "Mixed Vanilla and Chocolate sponge with Oreo flavoured cream, crushed Oreos covering the sides with Oreo biscuits on top.",
    price: "£32.00",
    image: "",
  },
  {
    group: "whole",
    name: 'Whole Cake 11"',
    description:
      "Delicious soft sponge layered with the finest fresh cream. Each one of the flavours come with a different scrumptious topping and filling. Vanilla is covered with peanuts on the sides with glazed mixed fruit on top. Chocolate & Black Forest both are covered with High-Quality milk chocolate on the sides finished with mixed fruit and chocolate shaving on top. (Black Forest contains chocolate sponge, fresh cream and dark cherry jam whereas Chocolate has both chocolate sponge and chocolate cream).",
    price: "£45.00",
    image: "/images/cakes/whole-cake-11-chocolate.png",
  },
  {
    group: "whole",
    name: 'Whole Cake 8"',
    description:
      "Delicious soft sponge layered with the finest fresh cream. Each one of the flavours come with a different scrumptious topping and filling. Vanilla is covered with peanuts on the sides with glazed mixed fruit on top. Chocolate & Black Forest both are covered with High-Quality milk chocolate on the sides finished with mixed fruit and chocolate shaving on top. (Black Forest contains chocolate sponge, fresh cream and dark cherry jam whereas Chocolate has both chocolate sponge and chocolate cream).",
    price: "£32.00",
    image: "/images/cakes/whole-cake-8-black-forest.png",
  },
  {
    group: "whole",
    name: 'Whole Cake 8" (Lotus Biscoff)',
    description:
      "Mixed Vanilla and Chocolate sponge with Lotus Biscoff flavoured cream. Smothered with crushed Lotus Biscoff on the side and biscuits on top.",
    price: "£32.00",
    image: "",
  },
  {
    group: "slice",
    name: "Chocolate Cake Slice",
    description:
      "Soft chocolate sponge layered with the finest chocolate cream. Covered with High-Quality milk chocolate finished with mixed fruit and chocolate shaving on top.",
    price: "£4.00",
    image: "/images/cakes/chocolate-cake-slice.png",
  },
  {
    group: "slice",
    name: "Black Forest Cake Slice",
    description:
      "Chocolate soft sponge layered with the finest cream and one layer of dark cherry jam. Covered with High-Quality milk chocolate finished with mixed fruit and chocolate shaving on top.",
    price: "£4.00",
    image: "/images/cakes/black-forest-cake-slice.png",
  },
  {
    group: "slice",
    name: "Tiramisu Cake Slice",
    description:
      "Soft sponge layered with the finest coffee flavoured cream. Finished with cocoa powder on top.",
    price: "£4.00",
    image: "/images/cakes/tiramisu-cake-slice.png",
  },
  {
    group: "slice",
    name: "Strawberry Cheesecake Slice",
    description:
      "Digestive biscuit base with scrumptious cream and soft full fat cheese topped with strawberry pie filling.",
    price: "£4.00",
    image: "/images/cakes/strawberry-cheesecake-slice.png",
  },
  {
    group: "slice",
    name: "Coconut Cake Slice",
    description:
      "Soft sponge layered with the finest fresh cream. Covered with fine coconut on top.",
    price: "£4.00",
    image: "/images/cakes/coconut-cake-slice.png",
  },
  {
    group: "slice",
    name: "Oreo Cake Slice",
    description: "",
    price: "£4.00",
    image: "/images/cakes/oreo-cake-slice.png",
  },
  {
    group: "slice",
    name: "Coffee Cake Slice",
    description:
      "Soft sponge layered with the finest coffee flavoured cream. Finished with coffee glazing on top.",
    price: "£4.00",
    image: "/images/cakes/coffee-cake-slice.png",
  },
  {
    group: "slice",
    name: "Vanilla Cake Slice",
    description:
      "Soft sponge layered with the finest fresh cream with one layer of strawberry pie filling. Covered with peanuts on the sides with glazed mixed fruit on top.",
    price: "£4.00",
    image: "",
  },
  {
    group: "slice",
    name: "Lemon Cake Slice",
    description:
      "Soft sponge layered with the finest cream. Covered with lemon curd.",
    price: "£4.00",
    image: "/images/cakes/lemon-cake-slice.png",
  },
  {
    group: "slice",
    name: "Caramel Cake Slice",
    description:
      "Soft sponge layered with both chocolate and vanilla sponge filled with the finest cream. finished with caramel on top.",
    price: "£4.00",
    image: "/images/cakes/caramel-cake-slice.png",
  },
  {
    group: "slice",
    name: "Mango Cake Slice",
    description:
      "Soft sponge layered with the finest cream. Covered with mango compound on top.",
    price: "£4.00",
    image: "/images/cakes/mango-cake-slice.png",
  },
  {
    group: "eggless",
    name: 'Whole Cake Square 8" (Eggless)',
    description:
      'Eggless soft sponge layered with the finest fresh cream. Each one of the flavours come with a different scrumptious topping and filling. (8" Square serves 8-10 people) Vanilla contains Nuts, Chocolate and Black Forest may contain Nuts. Vanilla is covered with peanuts on the sides with glazed mixed fruit on top(Vanilla sponge & fresh cream). Chocolate & Black Forest are covered with High-Quality milk chocolate finished with mixed fruit and chocolate shaving on top. (Black Forest contains chocolate sponge, fresh cream and dark Cherry Jam whereas Chocolate has both chocolate sponge and chocolate cream).',
    price: "£34.99",
    image: "",
    tag: "Eggless",
  },
  {
    group: "eggless",
    name: "Eggless Vanilla Slice",
    description:
      "Soft sponge with fresh cream, one layer of Strawberry pie filling, topped with glazed mixed fruits on top with nuts on the sides.",
    price: "£4.00",
    image: "",
    tag: "Eggless",
  },
  {
    group: "eggless",
    name: "Eggless Chocolate Slice",
    description:
      "Soft Chocolate sponge layered with the finest chocolate cream. High-Quality milk chocolate shaving on top finished with chocolate vermicelli on the sides.",
    price: "£4.00",
    image: "",
    tag: "Eggless",
  },
  {
    group: "eggless",
    name: "Eggless Black Forest Slice",
    description:
      "Chocolate soft sponge layered with the finest cream and one layer of dark cherry jam. Covered with High-Quality milk chocolate finished chocolate shaving on top with chocolate Vermicelli on the sides.",
    price: "£4.00",
    image: "",
    tag: "Eggless",
  },
  {
    name: "Blue and Pink Numbered Candles",
    description: "Numbered Candles",
    price: "£0.10",
    image: "",
  },
];

const groupLabels: Record<string, string> = {
  whole: "Whole Cakes",
  slice: "Cake Slices",
  eggless: "Eggless Cakes",
};

export default function CakesSection() {
  const [selectedCake, setSelectedCake] = useState<
    (typeof cakes)[number] | null
  >(null);

  return (
    <section id="cakes" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-50/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream-300/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-accent text-burgundy-400 text-sm tracking-[0.25em] uppercase mb-3">
              Our Signature Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-chocolate-800 mb-4">
              <span className="hand-underline">Cakes</span>, Slices & Treats
            </h2>
            <p className="font-body text-chocolate-800/50 text-lg max-w-lg mx-auto font-light">
              Whole cakes, delicious slices, and everything sweet. Baked fresh
              with love daily.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {(() => {
            let lastGroup = "";
            return cakes.map((cake, i) => {
              const groupHeader = cake.group && cake.group !== lastGroup;
              lastGroup = cake.group || lastGroup;
              return (
                <Fragment key={cake.name}>
                  {groupHeader && (
                    <div className="col-span-full pt-8 pb-4">
                      <div className="border-b border-burgundy-100/40 pb-4">
                        <h3 className="font-display text-2xl font-semibold text-chocolate-800">
                          {groupLabels[cake.group]}
                        </h3>
                        <p className="font-body text-sm text-chocolate-800/60 mt-2 max-w-2xl">
                          {cake.group === "whole"
                            ? "Full cakes for celebrations and sharing."
                            : cake.group === "slice"
                              ? "Single-serving slices, perfect with coffee."
                              : "Eggless cakes and slices made with care."}
                        </p>
                      </div>
                    </div>
                  )}

                  <Reveal delay={i * 0.08}>
                    <ProductCard
                      {...cake}
                      onClick={() => setSelectedCake(cake)}
                    />
                  </Reveal>
                </Fragment>
              );
            });
          })()}
        </div>

        <ItemModal
          item={selectedCake}
          open={Boolean(selectedCake)}
          onClose={() => setSelectedCake(null)}
        />

        {/* Custom order CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="flex flex-col items-center gap-4 px-6 py-5 bg-burgundy-50 rounded-2xl border border-burgundy-100 md:inline-flex md:flex-row md:items-center md:gap-3 md:px-8 md:py-4">
              <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-gold-accent/20 to-burgundy-100/30 rounded-full items-center justify-center">
                <div className="w-4 h-4 bg-gold-accent/40 rounded-full"></div>
              </div>
              <div className="text-center md:text-left">
                <p className="font-display text-burgundy-800 font-semibold">
                  Need a custom cake?
                </p>
                <p className="font-body text-burgundy-600/70 text-sm">
                  Wedding cakes, themed designs & bespoke orders — just call us
                </p>
              </div>
              <a
                href="tel:02088638088"
                className="px-6 py-2.5 bg-burgundy-700 text-cream-50 font-body font-semibold text-sm rounded-full hover:bg-burgundy-800 transition-colors whitespace-nowrap md:ml-4"
              >
                020 8863 8088
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
