"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFAF5 0%, #4A1228 100%)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <Reveal direction="left">
            <div className="relative">
              {/* Stacked cards visual */}
              <div className="relative h-[400px] md:h-[480px]">
                {/* Background decorative card */}
                <motion.div
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-4 right-4 bottom-4 bg-burgundy-100 rounded-3xl"
                />
                {/* Main card */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-burgundy-900/10 border border-burgundy-100/30 overflow-hidden">
                  <Image
                    src="/images/shop/shop-front.png"
                    alt="La Petite Cake Shop front"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="font-body text-cream-50/80 text-sm drop-shadow-lg">
                      Harrow HA1 2TW • Open 7am – 10:30pm • 7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <Reveal direction="right" delay={0.15}>
            <div>
              <p className="font-accent text-burgundy-400 text-sm tracking-[0.25em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-chocolate-800 mb-6 leading-tight">
                A Little Bakery,{" "}
                <span
                  style={{ fontStyle: "italic" }}
                  className="text-burgundy-600"
                >
                  A Lot of Love
                </span>
              </h2>
              <div className="space-y-4 font-body text-chocolate-800/60 text-lg leading-relaxed font-light">
                <p>
                  Nestled on Station Road in the heart of Harrow, La Petite Cake
                  Shop has become the neighbourhood&apos;s go-to spot for
                  handcrafted cakes, fresh pastries, and warm drinks.
                </p>
                <p>
                  We specialise in eggless cakes that taste just as indulgent as
                  their traditional counterparts — from birthday celebrations to
                  elegant wedding centrepieces. Every cake is baked fresh with
                  premium ingredients and a generous helping of care.
                </p>
                <p>
                  Whether you&apos;re popping in for a morning croissant,
                  ordering a custom celebration cake, or simply enjoying a
                  cappuccino by the window — you&apos;re always welcome here.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:02088638088"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy-700 text-cream-50 font-body font-semibold rounded-full hover:bg-burgundy-800 transition-colors"
                >
                  <span>📞</span>
                  <span>020 8863 8088</span>
                </a>
                <a
                  href="https://www.instagram.com/lapetitebakeryldn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-burgundy-200 text-burgundy-700 font-body font-semibold rounded-full hover:bg-burgundy-50 transition-colors"
                >
                  <span>📸</span>
                  <span>@lapetitebakeryldn</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
