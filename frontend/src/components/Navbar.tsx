import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
const navLinks = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Stats',
  href: '#stats'
},
{
  name: 'Highlights',
  href: '#highlights'
},
{
  name: 'Gallery',
  href: '#gallery'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-wider text-primary flex items-center gap-2">
          
          M<span className="text-gold">.</span>TEKLE
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-secondary hover:text-gold transition-colors uppercase tracking-widest">
            
              {link.name}
            </a>
          )}
          <button
            onClick={toggleTheme}
            className="text-secondary hover:text-gold transition-colors p-2"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-primary p-2"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-primary p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu">
            
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            x: '100%'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: '100%'
          }}
          transition={{
            type: 'tween',
            duration: 0.3
          }}
          className="fixed inset-0 z-50 bg-base flex flex-col">
          
            <div className="flex justify-end p-6">
              <button
              className="text-primary p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu">
              
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) =>
            <motion.a
              key={link.name}
              href={link.href}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1 + 0.2
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-4xl text-primary hover:text-gold transition-colors">
              
                  {link.name}
                </motion.a>
            )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}