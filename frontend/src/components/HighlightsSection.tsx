import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
const highlights = [
{
  id: 1,
  title: 'Season Best Moments',
  duration: '4:12',
  image:
  'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2069&auto=format&fit=crop',
  featured: true
},
{
  id: 2,
  title: 'Dhana Cup Top Goals',
  duration: '2:45',
  image:
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop',
  featured: false
},
{
  id: 3,
  title: 'Playmaking & Assists',
  duration: '3:30',
  image:
  'https://images.unsplash.com/photo-1431324155629-1a6d0a6eb434?q=80&w=2067&auto=format&fit=crop',
  featured: false
},
{
  id: 4,
  title: 'Midfield Dominance',
  duration: '2:15',
  image:
  'https://images.unsplash.com/photo-1551280857-2b9bbe520442?q=80&w=2070&auto=format&fit=crop',
  featured: false
}];

export function HighlightsSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const featured = highlights.find((h) => h.featured);
  const gridItems = highlights.filter((h) => !h.featured);
  return (
    <section id="highlights" className="py-24 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="font-display text-5xl md:text-6xl text-primary mb-2">
              
              Match <span className="text-gold">Highlights</span>
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-secondary">
              
              Watch Milkias in action on the pitch.
            </motion.p>
          </div>
        </div>

        {/* Featured Video */}
        {featured &&
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="relative aspect-video w-full mb-8 group cursor-pointer overflow-hidden bg-surface rounded-xl"
          onClick={() => setActiveVideo(featured.id)}>
          
            <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-gold text-black text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                  Featured
                </span>
                <span className="text-white/80 text-sm">
                  {featured.duration}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white">
                {featured.title}
              </h3>
            </div>
          </motion.div>
        }

        {/* Grid Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridItems.map((item, index) =>
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="relative aspect-video group cursor-pointer overflow-hidden bg-surface rounded-xl"
            onClick={() => setActiveVideo(item.id)}>
            
              <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              loading="lazy" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Play
                  className="w-5 h-5 text-black ml-1"
                  fill="currentColor" />
                
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="text-gold text-xs mb-1 block">
                  {item.duration}
                </span>
                <h4 className="font-display text-xl text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12">
          
            <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            
              <X size={32} />
            </button>

            <motion.div
            initial={{
              scale: 0.95,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.95,
              opacity: 0
            }}
            className="w-full max-w-6xl aspect-video bg-[#111] relative border border-white/10 flex items-center justify-center rounded-xl overflow-hidden">
            
              {/* Simulated Video Player */}
              <div className="text-center">
                <Play className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                <p className="text-white font-display tracking-widest text-xl">
                  VIDEO PLAYER SIMULATION
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  In a real environment, an iframe or video tag would render
                  here.
                </p>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}