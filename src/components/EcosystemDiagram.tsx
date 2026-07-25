import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import type { EcosystemPillar } from '../types';

interface Props {
  pillars: EcosystemPillar[];
}

export default function EcosystemDiagram({ pillars }: Props) {
  return (
    <div className="relative max-w-4xl mx-auto py-12 md:py-24">
      {/* Center Node (Mobile & Desktop) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center w-32 h-32 bg-brand-primary border-2 border-brand-secondary rounded-full shadow-[0_0_30px_rgba(178,34,34,0.3)]">
        <span className="font-bold text-white text-center text-sm leading-tight">Prima<br/>Ecosystem</span>
      </div>

      {/* SVG Connecting Lines (Desktop Only) */}
      <svg className="absolute inset-0 w-full h-full z-0 hidden md:block" style={{ pointerEvents: 'none' }}>
        <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="var(--color-brand-secondary)" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="var(--color-brand-secondary)" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="var(--color-brand-secondary)" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="var(--color-brand-secondary)" strokeWidth="1" strokeOpacity="0.4" />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-48 md:gap-y-32 relative z-10">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-brand-primary/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(178,34,34,0.2)] transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-brand-secondary/10 rounded-md text-brand-secondary shrink-0 group-hover:scale-110 group-hover:bg-brand-secondary/20 transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-brand-secondary transition-colors">{pillar.pillarName}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
