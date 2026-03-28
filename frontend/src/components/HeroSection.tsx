import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Camera } from 'lucide-react';
export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-base">
      
      {/* Parallax Background - Replaced with styled placeholder */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          opacity
        }}>
        
        <div className="absolute inset-0 bg-[var(--color-overlay)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-transparent to-transparent z-10" />

        {/* Photo Placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-surface p-8">
          <div className="w-full h-full max-w-5xl max-h-[80vh] border-2 border-dashed border-theme-strong rounded-3xl flex flex-col items-center justify-center text-secondary opacity-50">
            <Camera size={64} className="mb-4 opacity-50" />
            <p className="font-display text-2xl tracking-widest uppercase">
              Player Photo Here
            </p>
            <p className="text-sm mt-2">Full-screen action shot recommended</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="mb-4 flex items-center gap-3">
          
          <span className="h-[1px] w-8 bg-gold block"></span>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">
            Green Sports Academy
          </span>
          <span className="h-[1px] w-8 bg-gold block"></span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none mb-6 tracking-tight">
          
          MILKIAS <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
            TEKLE
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-lg md:text-xl text-secondary font-light tracking-wide mb-10 max-w-2xl">
          
          #6 <span className="text-gold mx-2">•</span> Midfielder{' '}
          <span className="text-gold mx-2">•</span> Class of 2031
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}>
          
          <a
            href="#highlights"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-black font-display text-lg uppercase tracking-wider overflow-hidden transition-transform hover:scale-105">
            
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Play size={20} className="fill-black relative z-10" />
            <span className="relative z-10 font-semibold">
              Watch Highlights
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        
        <span className="text-xs text-secondary uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut'
          }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        
      </motion.div>
    </section>);

}