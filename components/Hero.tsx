"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slideshowImages = Array.from(
  { length: 8 },
  (_, index) => `/images/slideshow/image${index + 1}.png`,
);

const repeatedSlides = [
  ...slideshowImages,
  ...slideshowImages,
  ...slideshowImages,
  ...slideshowImages,
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[84vh] pt-24 sm:pt-28 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, #4A1228 0%, #7B2040 35%, #9B2D47 65%, #B8405B 100%)",
      }}
    >
      {/* Animated decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-rose-soft/10 blob-shape blur-2xl"
        />

        {/* Floating pastry icons */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] text-6xl opacity-20 select-none"
        >
          🥐
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -8, 5, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[20%] right-[12%] text-5xl opacity-20 select-none"
        >
          🎂
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[25%] left-[15%] text-5xl opacity-15 select-none"
        >
          ☕
        </motion.div>
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, -6, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[30%] right-[8%] text-5xl opacity-15 select-none"
        >
          🍰
        </motion.div>

        {/* Dots decoration */}
        <div className="absolute inset-0 dots-pattern opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-accent text-cream-300 text-sm md:text-base tracking-[0.2em] uppercase mb-5"
        >
          Continental Bakery · Est. Harrow
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-cream-50 mb-8 leading-tight"
        >
          <span className="block text-3xl md:text-5xl lg:text-6xl font-light">
            La Petite
          </span>
          <span
            className="block text-4xl md:text-6xl lg:text-[4.5rem] font-semibold mt-2"
            style={{ fontStyle: "italic" }}
          >
            Cake Shop
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cream-400 to-transparent mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-cream-200 text-base md:text-lg max-w-xl mx-auto mb-7 leading-relaxed font-light"
        >
          Handcrafted cakes, continental pastries & warm drinks made with love
          in the heart of Harrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#cakes"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#cakes")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-7 py-3 bg-cream-100 text-burgundy-800 font-body font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
          >
            <span className="relative z-10">Explore Our Cakes</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border-2 border-cream-200/30 text-cream-100 font-body font-medium rounded-full hover:bg-white/10 hover:border-cream-200/50 transition-all duration-300"
          >
            Contact Us →
          </a>
        </motion.div>

        {/* Slideshow */}
        <div className="relative left-1/2 -translate-x-1/2 mt-8 w-[95vw] overflow-hidden">
          <div
            className="flex w-full gap-2"
            style={{
              animation: "heroCarouselSlide 16s linear infinite",
            }}
          >
            {repeatedSlides.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className={`relative flex-none basis-[32%] sm:basis-[25%] md:basis-[20%] h-40 sm:h-52 md:h-68 overflow-hidden ${
                  index < repeatedSlides.length - 1
                    ? "border-r border-white/20"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Bakery slideshow image ${(index % 8) + 1}`}
                  fill
                  sizes="(max-width: 640px) 60vw, (max-width: 768px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick info pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          {[
            "Eggless Options",
            "Wedding Cakes",
            "Custom Orders",
            "Fresh Daily",
          ].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-white/10 text-cream-200 rounded-full font-body font-light border border-white/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Curved bottom */}
      <style jsx global>{`
        @keyframes heroCarouselSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C240 10 480 0 720 20C960 40 1200 80 1440 60V120H0Z"
            fill="#FFFAF5"
          />
        </svg>
      </div>
    </section>
  );
}
