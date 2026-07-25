import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TestimonialData } from '../types';

interface Props {
  testimonials: TestimonialData[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="mb-16 bg-brand-primary/50 border border-white/5 rounded-xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="text-4xl text-brand-secondary/40 font-serif absolute -top-4 -left-2">"</div>
          <p className="text-lg md:text-xl text-gray-300 italic mb-6 relative z-10 pl-6">
            {testimonials[currentIndex].quote}
          </p>
          <div className="pl-6">
            <h4 className="text-white font-bold">{testimonials[currentIndex].name}</h4>
            <span className="text-brand-secondary text-sm">{testimonials[currentIndex].role}</span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-brand-secondary w-6' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
