import React from 'react';
export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-theme">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-wider text-primary">
            M<span className="text-gold">.</span>TEKLE
          </span>
        </div>

        <p className="text-secondary text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Milkias Tekle. Represented by Green
          Sports Academy.
        </p>

        <div className="flex gap-6 text-sm text-secondary uppercase tracking-widest">
          <a href="#home" className="hover:text-gold transition-colors">
            Top
          </a>
          <a href="#highlights" className="hover:text-gold transition-colors">
            Video
          </a>
          <a href="#contact" className="hover:text-gold transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>);

}