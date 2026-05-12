'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

const testimonials = [
  {
    text: 'Ordered a cake for my daughter\'s birthday and it exceeded my expectations. Delicious cake, wonderful customer service.',
    name: 'Happy Customer',
    occasion: 'Birthday Cake',
    stars: 5,
  },
  {
    text: 'Best cakes I have ever tasted! Fresh cream vanilla is our family\'s favourite. Prices are so low compared to the quality!',
    name: 'Regular Visitor',
    occasion: 'Vanilla Cream Cake',
    stars: 5,
  },
  {
    text: 'They made a beautiful and very tasty cake to celebrate the birth of our daughter. Thank you so much.',
    name: 'New Parent',
    occasion: 'Celebration Cake',
    stars: 5,
  },
  {
    text: 'Excellent eggless cake. Everybody loved it. Very helpful and courteous staff. Mohammed was very helpful. Highly recommend.',
    name: 'Satisfied Customer',
    occasion: 'Eggless Cake',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark burgundy background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, #4A1228 0%, #6B1E3A 50%, #7B2040 100%)',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 dots-pattern opacity-[0.03]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-accent text-cream-400 text-sm tracking-[0.25em] uppercase mb-3">
              What People Say
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream-50 mb-4">
              Loved by{' '}
              <span style={{ fontStyle: 'italic' }} className="text-cream-300">
                Harrow
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Testimonial cards - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`bg-white/10 backdrop-blur-sm rounded-3xl p-7 border border-white/10 hover:bg-white/15 transition-all duration-400 ${
                  i === 0 ? 'md:mt-0' : i === 1 ? 'md:mt-8' : i === 2 ? 'md:-mt-4' : 'md:mt-4'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-cream-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-cream-100 text-lg leading-relaxed mb-5 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-burgundy-400/30 rounded-full flex items-center justify-center">
                    <span className="text-cream-200 font-display font-semibold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-cream-100 font-medium text-sm">
                      {t.name}
                    </p>
                    <p className="font-body text-cream-300/50 text-xs">{t.occasion}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
