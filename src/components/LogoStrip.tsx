import { motion } from 'framer-motion';
import type { PartnerLogo } from '../types';

interface Props {
  logos: PartnerLogo[];
}

export default function LogoStrip({ logos }: Props) {
  // Duplicate logos for seamless marquee effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-brand-primary border-y border-white/5 py-8 mt-16 flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-primary to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-primary to-transparent z-10"></div>
      
      <motion.div
        className="flex gap-16 min-w-max pr-16"
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div key={`${logo.id}-${idx}`} className="text-gray-400/50 font-bold text-2xl tracking-widest uppercase hover:text-brand-secondary/80 transition-colors">
            {logo.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
