import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CertificationData } from '../types';

interface Props {
  certifications: CertificationData[];
}

export default function CertificationsTabs({ certifications }: Props) {
  const categories = ["Perbankan", "Coaching & Psikologi", "Mutu & Standar"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredCerts = certifications.filter(cert => cert.category === activeTab);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">Lisensi & Sertifikasi</h2>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === cat 
                ? 'bg-brand-secondary text-white shadow-[0_0_15px_rgba(178,34,34,0.4)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 absolute w-full"
          >
            {filteredCerts.map((cert) => (
              <div key={cert.id} className="bg-brand-primary/40 p-5 rounded-lg border border-white/5 hover:border-brand-secondary/50 transition-colors group">
                <div className="text-xs font-semibold text-brand-secondary mb-2 tracking-wider uppercase flex justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-gray-500">{cert.year}</span>
                </div>
                <h4 className="font-semibold text-white text-sm leading-snug group-hover:text-brand-secondary transition-colors">{cert.name}</h4>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
