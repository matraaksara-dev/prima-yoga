import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'Profil' },
  { href: '#services', label: 'Layanan' },
  { href: '#ecosystem', label: 'Ekosistem' },
  { href: '#credibility', label: 'Kredibilitas' }
];

export default function ActiveNav() {
  const [activeSection, setActiveSection] = useState('');

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
  );
}
