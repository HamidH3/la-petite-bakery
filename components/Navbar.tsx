"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Cakes", href: "#cakes" },
  { label: "Pastries", href: "#pastries" },
  { label: "Drinks", href: "#drinks" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center transition-all duration-500 ${
          scrolled
            ? "bg-white/80 shadow-lg shadow-burgundy-900/5 px-3 py-2 rounded-full frosted"
            : "bg-burgundy-800/90 px-4 py-2.5 rounded-[2rem] frosted"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className={`font-display text-lg font-semibold mr-6 transition-colors duration-300 whitespace-nowrap ${
            scrolled ? "text-burgundy-800" : "text-cream-100"
          }`}
          style={{ fontStyle: "italic" }}
        >
          La Petite
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`relative px-4 py-1.5 text-sm font-body font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? isActive
                      ? "text-cream-50 bg-burgundy-700"
                      : "text-chocolate-800 hover:text-burgundy-700 hover:bg-burgundy-50"
                    : isActive
                      ? "text-burgundy-800 bg-cream-100"
                      : "text-cream-200 hover:text-cream-50 hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      scrolled ? "bg-burgundy-700" : "bg-cream-100"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div
          className={`flex items-center justify-between px-5 py-3 transition-all duration-500 ${
            scrolled || mobileOpen
              ? "bg-white/90 frosted shadow-md"
              : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            className={`font-display text-xl font-semibold transition-colors ${
              scrolled || mobileOpen ? "text-burgundy-800" : "text-cream-50"
            }`}
            style={{ fontStyle: "italic" }}
          >
            La Petite
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 transition-colors ${
              scrolled || mobileOpen ? "text-burgundy-800" : "text-cream-50"
            }`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current origin-center"
            />
            <motion.span
              animate={
                mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
              }
              className="block w-6 h-0.5 bg-current"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-current origin-center"
            />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 frosted overflow-hidden border-t border-burgundy-100"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className={`font-body text-lg py-2 px-4 rounded-xl transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-burgundy-700 bg-burgundy-50 font-semibold"
                        : "text-chocolate-800 hover:text-burgundy-700 hover:bg-cream-200"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
