import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <ThemeProvider>
      <div className="bg-base min-h-screen text-primary selection:bg-gold selection:text-black transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <HighlightsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}