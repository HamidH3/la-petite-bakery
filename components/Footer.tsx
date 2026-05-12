"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #4A1228 0%, #1A0E0A 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-3xl font-semibold text-cream-100 mb-3"
              style={{ fontStyle: "italic" }}
            >
              La Petite
            </h3>
            <p className="font-accent text-cream-400/60 text-sm tracking-wider uppercase mb-4">
              Continental Bakery
            </p>
            <p className="font-body text-cream-300/40 text-sm leading-relaxed">
              Handcrafted cakes and pastries, baked fresh every day in the heart
              of Harrow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Cakes", href: "#cakes" },
                { label: "Pastries & Bites", href: "#pastries" },
                { label: "Drinks Menu", href: "#drinks" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream-300/50 hover:text-cream-100 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-200 mb-4">
              Order Online
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.ubereats.com/gb/store/la-petite-bakery/tXAaEnhlQUmuCgLB2Xh9Aw"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-cream-300/50 hover:text-cream-100 transition-colors text-sm"
              >
                Order on Uber Eats →
              </a>
              <a
                href="tel:02088638088"
                className="block font-body text-cream-300/50 hover:text-cream-100 transition-colors text-sm"
              >
                Call to place an order →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream-300/30 text-xs">
            © {currentYear} La Petite Cake Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lapetitebakeryldn/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-cream-300/30 hover:text-cream-200 transition-colors text-xs"
            >
              Instagram
            </a>
            <span className="text-cream-300/20">·</span>
            <a
              href="tel:02088638088"
              className="font-body text-cream-300/30 hover:text-cream-200 transition-colors text-xs"
            >
              020 8863 8088
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
