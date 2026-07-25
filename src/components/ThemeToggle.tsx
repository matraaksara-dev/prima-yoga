import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? <Moon className="w-5 h-5 text-text-muted hover:text-text-primary" /> : <Sun className="w-5 h-5 text-text-muted hover:text-text-primary" />}
    </button>
  );
}
