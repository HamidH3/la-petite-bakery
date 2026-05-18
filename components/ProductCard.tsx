"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  variant?: "default" | "wide" | "featured";
  onClick?: () => void;
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  tag,
  variant = "default",
  onClick,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
      }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`group relative bg-white rounded-3xl overflow-hidden border border-burgundy-100/40 shadow-sm hover:shadow-xl hover:shadow-burgundy-900/8 transition-shadow duration-500 ${
        variant === "wide" ? "col-span-1 md:col-span-2" : ""
      } ${variant === "featured" ? "ring-2 ring-burgundy-200" : ""} ${
        onClick ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Product image */}
      <div className={`relative ${variant === "wide" ? "h-48" : "h-44"}`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-t-3xl"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FDF2F4 0%, #FDEBD4 50%, #FFF5EB 100%)",
            }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-burgundy-100/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-rose-soft/15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-accent/10 rounded-full blur-sm" />
            <div className="absolute top-4 right-4 w-8 h-8 bg-cream-300/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-burgundy-50/40 rounded-full" />
          </div>
        )}

        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-burgundy-700 text-cream-50 text-xs font-body font-semibold rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-44">
        <h3 className="font-display text-sm md:text-lg font-semibold text-chocolate-800 mb-1 group-hover:text-burgundy-700 transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="font-body text-[11px] text-chocolate-800/50 leading-relaxed line-clamp-2 flex-grow mb-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-lg font-semibold text-burgundy-700">
            {price}
          </span>
          <span className="text-xs font-body text-burgundy-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
