'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // In production, replace with your API route or form service (e.g. Formspree, EmailJS)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-cream-50">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V40C360 70 720 10 1080 40C1260 55 1360 45 1440 40V0H0Z"
            fill="#7B2040"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-8">
        <Reveal>
          <div className="text-center mb-8 lg:mb-16">
            <p className="font-accent text-burgundy-400 text-sm tracking-[0.25em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-chocolate-800 mb-4">
              Visit Us or{' '}
              <span className="hand-underline" style={{ fontStyle: 'italic' }}>
                Say Hello
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info cards */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
              {/* Address */}
              <div className="bg-white rounded-2xl p-3 lg:p-6 border border-burgundy-100/30 shadow-sm">
                <div className="flex items-start gap-2 lg:gap-4">
                  <span className="text-xl lg:text-2xl">📍</span>
                  <div>
                    <h3 className="font-display text-sm lg:text-lg font-semibold text-chocolate-800 mb-0.5 lg:mb-1">
                      Find Us
                    </h3>
                    <p className="font-body text-xs lg:text-base text-chocolate-800/60">
                      5 Station Road
                      <br />
                      Harrow HA1 2TW
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-3 lg:p-6 border border-burgundy-100/30 shadow-sm">
                <div className="flex items-start gap-2 lg:gap-4">
                  <span className="text-xl lg:text-2xl">🕐</span>
                  <div>
                    <h3 className="font-display text-sm lg:text-lg font-semibold text-chocolate-800 mb-0.5 lg:mb-1">
                      Opening Hours
                    </h3>
                    <p className="font-body text-xs lg:text-base text-chocolate-800/60">
                      Every day: 7:00 AM – 10:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-3 lg:p-6 border border-burgundy-100/30 shadow-sm">
                <div className="flex items-start gap-2 lg:gap-4">
                  <span className="text-xl lg:text-2xl">📞</span>
                  <div>
                    <h3 className="font-display text-sm lg:text-lg font-semibold text-chocolate-800 mb-0.5 lg:mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:02088638088"
                      className="font-body text-xs lg:text-base text-burgundy-600 hover:text-burgundy-800 transition-colors font-medium"
                    >
                      020 8863 8088
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="bg-white rounded-2xl p-3 lg:p-6 border border-burgundy-100/30 shadow-sm">
                <div className="flex items-start gap-2 lg:gap-4">
                  <span className="text-xl lg:text-2xl">📱</span>
                  <div>
                    <h3 className="font-display text-sm lg:text-lg font-semibold text-chocolate-800 mb-0.5 lg:mb-1">
                      Follow Us
                    </h3>
                    <a
                      href="https://www.instagram.com/lapetitebakeryldn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs lg:text-base text-burgundy-600 hover:text-burgundy-800 transition-colors font-medium"
                    >
                      @lapetitebakeryldn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal direction="right" delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 border border-burgundy-100/30 shadow-lg shadow-burgundy-900/5">
              <h3 className="font-display text-2xl font-semibold text-chocolate-800 mb-2">
                Send Us a Message
              </h3>
              <p className="font-body text-chocolate-800/50 text-sm mb-6">
                Custom cake enquiry? Question about our menu? We&apos;d love to hear from you.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <span className="text-5xl block mb-4">💌</span>
                  <p className="font-display text-2xl font-semibold text-burgundy-700 mb-2">
                    Message Sent!
                  </p>
                  <p className="font-body text-chocolate-800/50">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-chocolate-800/70 mb-1.5 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-cream-100 border border-burgundy-100/40 rounded-xl font-body text-chocolate-800 placeholder-chocolate-800/30 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-transparent transition-all"
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-chocolate-800/70 mb-1.5 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-cream-100 border border-burgundy-100/40 rounded-xl font-body text-chocolate-800 placeholder-chocolate-800/30 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-transparent transition-all"
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-chocolate-800/70 mb-1.5 font-medium">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream-100 border border-burgundy-100/40 rounded-xl font-body text-chocolate-800 placeholder-chocolate-800/30 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-transparent transition-all"
                      placeholder="020 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm text-chocolate-800/70 mb-1.5 font-medium">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-100 border border-burgundy-100/40 rounded-xl font-body text-chocolate-800 placeholder-chocolate-800/30 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your cake order or enquiry..."
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-3.5 bg-burgundy-700 text-cream-50 font-body font-semibold rounded-xl hover:bg-burgundy-800 active:scale-[0.98] transition-all duration-200 shadow-md shadow-burgundy-700/20"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Google Maps embed */}
        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl overflow-hidden border border-burgundy-100/30 shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.4!2d-0.335!3d51.592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM1JzMxLjIiTiAwwrAyMCcwNi4wIlc!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Petite Cake Shop location"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
