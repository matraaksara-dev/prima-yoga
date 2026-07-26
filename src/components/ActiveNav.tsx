import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#about', label: 'Profil' },
  { href: '#services', label: 'Layanan' },
  { href: '#ecosystem', label: 'Ekosistem' },
  { href: '#credibility', label: 'Kredibilitas' }
];

interface ActiveNavProps {
  kolaborasiUrl?: string;
}

export default function ActiveNav({ kolaborasiUrl = '#' }: ActiveNavProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 relative">
        {links.map(({ href, label }) => (
          <a 
            key={href} 
            href={href} 
            className={`relative px-1 py-2 hover:text-white transition-colors ${activeSection === href ? 'text-white' : ''}`}
          >
            {label}
            {activeSection === href && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-secondary rounded-full" />
            )}
          </a>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-secondary text-white px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          {isOpen ? 'Tutup' : 'Telusuri'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-brand-primary border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${activeSection === href ? 'text-brand-secondary' : 'text-gray-300 hover:text-white'}`}
              >
                {label}
              </a>
            ))}
            {kolaborasiUrl && (
              <a
                href={kolaborasiUrl}
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center text-sm font-semibold bg-brand-secondary text-white px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Kolaborasi
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
