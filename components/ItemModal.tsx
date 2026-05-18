"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface ItemModalProps {
  item: {
    name: string;
    description?: string;
    price?: string;
    image?: string;
    tag?: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export default function ItemModal({ item, open, onClose }: ItemModalProps) {
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!open || !item) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-burgundy-100/30"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-chocolate-900 shadow-sm transition hover:bg-burgundy-50"
          >
            <span className="text-2xl leading-none">×</span>
          </button>

          {item.image ? (
            <div className="relative h-64 sm:h-72">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-64 sm:h-72 items-center justify-center bg-gradient-to-br from-cream-100 to-burgundy-50 px-8">
              <div className="rounded-3xl border border-burgundy-200/30 bg-white/80 p-8 text-center shadow-inner shadow-burgundy-100/20">
                <p className="font-display text-xl font-semibold text-burgundy-800">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-chocolate-700">
                  A delightful selection from our bakery.
                </p>
              </div>
            </div>
          )}

          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-start gap-3 pb-4">
              <span className="rounded-full bg-burgundy-100/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-burgundy-700">
                {item.tag ?? "Bakery Favourite"}
              </span>
              {item.price && (
                <span className="ml-auto text-xl font-semibold text-burgundy-800">
                  {item.price}
                </span>
              )}
            </div>
            <h2 className="font-display text-3xl font-semibold text-chocolate-900 mb-4">
              {item.name}
            </h2>
            <p className="font-body text-chocolate-800/80 leading-relaxed text-base">
              {item.description ||
                "A delicious choice from our bakery, prepared with care and attention to flavour. Tap outside the box or use the close icon to return to the menu."}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
